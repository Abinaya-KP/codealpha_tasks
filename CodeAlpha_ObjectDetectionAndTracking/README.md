# Object Detection and Tracking using YOLOv8

## Overview

This project implements a real-time Object Detection and Tracking system using the YOLOv8 deep learning model and OpenCV. The system processes video input, detects multiple objects such as persons, vehicles, traffic lights, and handbags, and displays bounding boxes with labels around the detected objects. Object tracking is performed to maintain consistent identification of detected objects across consecutive video frames.

## Features

* Real-time object detection using YOLOv8
* Detection of multiple object categories
* Object tracking with unique IDs
* Bounding box visualization and object labeling
* Video file input support
* Fast and efficient processing using OpenCV
* Pre-trained YOLOv8 model for accurate detection

## Technologies Used

* Python
* OpenCV
* Ultralytics YOLOv8
* NumPy

## Project Structure

```text
CodeAlpha_ObjectDetectionAndTracking/
│
├── obj_detect.py
├── README.md
└── output_images/
    ├── output_1.png
    └── output_2.png
    └── output_3.png
  
```

## How to Run

1. Place your input video file in the project folder.
2. Update the video filename in `obj_detect.py` if necessary.
3. Run the program:

```bash
python obj_detect.py
```

4. The system will display the video with detected objects, labels, bounding boxes, and tracking information.

## Output

The model can detect and track objects such as:

* Person
* Car
* Traffic Light
* Handbag
* Bicycle
* Bus
* Truck
* And many more object categories supported by YOLOv8

## Screenshots

Output screenshots are available in the `output_images` folder.

## Note

The input video file is not included in this repository due to file size limitations. Users can use their own video files for testing by placing them in the project directory.

## Applications

* Smart Surveillance Systems
* Traffic Monitoring
* Security and Safety Systems
* Automated Video Analysis
* Computer Vision Research

## Internship Information

This project was developed as part of the CodeAlpha AI Internship Program to demonstrate practical implementation of Object Detection and Tracking using computer vision and deep learning.
