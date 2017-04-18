hangouts-converter
------------------
A tool for importing Hangouts messages to your Android phone.

Disclaimer: This program works for my specific data set. It might work with yours. It might not. I shall under no circumstances be held liable for data loss that may occur as a result of using this program. BE CAREFUL WHEN RESTORING, OR DELETING MESSAGES. PLEASE MAKE A BACKUP OF YOUR MESSAGES BEFORE RESTORING THE FILE PRODUCED BY THIS APP.

----------
### Requirements ###
 - Node.js with ECMAScript 6 support
 - Access to Google Account
 - The [SMS Backup and Restore app](https://play.google.com/store/apps/details?id=com.riteshsahu.SMSBackupRestore)


----------
### Usage ###

 - Go to [Google Takeout](https://takeout.google.com/settings/takeout) and select at least Hangouts.
 - In the downloaded zip file, there should be a `Hangouts.json` file in the `Takeout/Hangouts` directory.
 - Place `Hangouts.json` in the root of the project folder.
 - Run `npm install`.
 - Run `node main > 'filename.xml'`, replacing `filename` with the desired name.
 - Transfer the output file to your Android device, and restore the SMSes with the SMS Backup and Restore app.
 - Profit!