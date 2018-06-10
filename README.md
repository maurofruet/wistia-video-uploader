# Wistia Video Uploader
An AngularJS component that uses [jQuery-File-Upload](https://github.com/blueimp/jQuery-File-Upload) to upload videos
to [Wistia](https://wistia.com/)

## Features
The component allows the user to upload a video to the Wistia website using the [Wistia Upload API](https://wistia.com/support/developers/upload-api). The required api_password parameter can be set in the API_PASSWORD constant defined in the src/app/wistia-video-uploader/wistia-video-uploader.constant.js file.

When the video has been successfully uploaded, the embedded Wistia video is shown in the component template.
Moreover, the name of the video is automatically set to the video file name, while the id of the project the media is
uploaded into has the following naming convention: Uploads_YYYY-MM-DD
