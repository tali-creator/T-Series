// api/upload.js

import formidable from 'formidable';
import fs from 'fs';
import path from 'path';

// Disable default body parsing to handle file upload
export const config = {
  api: {
    bodyParser: false, 
  },
};

const uploadHandler = (req, res) => {
  const form = new formidable.IncomingForm();
  form.uploadDir = './'; // Temporary directory to store files before they are moved
  form.keepExtensions = true; // Keep the original file extensions

  form.parse(req, (err, fields, files) => {
    if (err) {
      console.error("Error parsing the form:", err);
      res.status(500).json({ error: "Error uploading file" });
      return;
    }

    // Move the file to a public directory (public/uploads)
    const filePath = files.file[0].filepath;
    const targetPath = path.join('./public/uploads', files.file[0].newFilename);

    fs.rename(filePath, targetPath, (err) => {
      if (err) {
        console.error("Error saving the file:", err);
        res.status(500).json({ error: "Error saving file" });
        return;
      }

      // Return the file URL to be used on the frontend
      const fileUrl = `/uploads/${files.file[0].newFilename}`;
      res.status(200).json({ url: fileUrl });
    });
  });
};

export default uploadHandler;
