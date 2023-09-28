let imageURL;

const submitHandler=()=> {
  console.log("click");
  const fileInput = document.getElementById("fileIn");
  console.log(fileInput.files);
  const image = fileInput.files[0];

  // Multipart file
  const formData = new FormData();
  formData.append("image_file", image);
  formData.append("size", "auto");

  const apiKey = "RWhRS5xWwJjJEGn8P42fE7yd";

  fetch("https://api.remove.bg/v1.0/removebg", {
    method: "POST",
    headers: {
      "X-Api-Key": apiKey,
    },
    body: formData,
  })
    .then(function (reponse) {
      return reponse.blob();
    })
    .then(function (blob) {
      console.log(blob);
      const url = URL.createObjectURL(blob);
      imageURL = url;
      const img = document.createElement("img");
      img.src = url;
      document.body.appendChild(img);
    })
    .catch();
}

const  downloadFile=()=> {
  var anchorElement = document.createElement("a");
  anchorElement.href = imageURL;
  anchorElement.download = "current.png";
  document.body.appendChild(anchorElement);

  anchorElement.click();

  document.body.removeChild(anchorElement);
}
