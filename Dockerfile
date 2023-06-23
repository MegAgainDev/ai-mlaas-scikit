# Grab the Python 3.61 Image from Docker Hub, docker.com
FROM python:3

# Update pip to minimize dependency errors
RUN pip install --upgrade pip

# Create a working directory to use for transfering files to this image
WORKDIR /mlaas-scikit-image-workdir

# Copy the contents into work dirctory
ADD . /mlaas-scikit-image-workdir/

# Execute the libraries from the requirements.txt file
RUN pip install -r requirements.txt

# Run the python application
CMD ["python3", "app.py"]