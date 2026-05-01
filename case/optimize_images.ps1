Add-Type -AssemblyName System.Drawing
$images = Get-ChildItem -Path .. -Recurse -Include *.JPG, *.jpg
foreach ($img in $images) {
    try {
        $bmp = New-Object System.Drawing.Bitmap($img.FullName)
        $needsResize = $bmp.Width -gt 1600
        
        # Check if it needs compression (too wide or too large)
        if ($needsResize -or $img.Length -gt 500000) {
            $newWidth = $bmp.Width
            $newHeight = $bmp.Height
            
            if ($needsResize) {
                $ratio = 1600 / $bmp.Width
                $newWidth = 1600
                $newHeight = [int]($bmp.Height * $ratio)
            }

            $newBmp = New-Object System.Drawing.Bitmap($newWidth, $newHeight)
            $g = [System.Drawing.Graphics]::FromImage($newBmp)
            $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
            $g.DrawImage($bmp, 0, 0, $newWidth, $newHeight)
            
            $encoder = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.FormatDescription -eq "JPEG" }
            $params = New-Object System.Drawing.Imaging.EncoderParameters(1)
            $params.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, 75)
            
            $bmp.Dispose()
            $g.Dispose()
            
            $tempPath = $img.FullName + ".tmp"
            $newBmp.Save($tempPath, $encoder, $params)
            $newBmp.Dispose()
            
            Move-Item -Path $tempPath -Destination $img.FullName -Force
            Write-Host "Optimized: $($img.FullName) (New size: $([int]((Get-Item $img.FullName).Length / 1KB)) KB)"
        } else {
            $bmp.Dispose()
        }
    } catch {
        Write-Host "Failed to optimize: $($img.Name)"
    }
}
