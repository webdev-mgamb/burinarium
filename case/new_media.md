N are the number of photo images of all classified plants in their folders.
Create a comparsion table for new image, with match rate of the columns.
Go from 0..N image in all plant folders and fill the first match rate in range from 0 .. 9, how much is the new image plant the same as in the photo.
If the top of the match_rate is lower than 8, your job is done when you inform that is a new plant in new_media folder.
For voice analysis use transcription file.
From matching table, consider the top match_rate image. If there are more with 8 and more score and are in the same folder, move the new image from new_media folder into this folder. Also move corresponded recorded voice media.
From matching table, consider the top match_rate image. If there are only one, analyse the description of the plant which is in the coresponded(same name) voice recorded and compare if this fits with the identified plant match.
If the identified description fit to identified plant, move the new image and corresponded voice description into the folder.
If in the identified folder does not exist description.md file create it and put there an consolidated description from recorded voice description. If that file exists only enhanced it with new information.
