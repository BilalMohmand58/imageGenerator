function onSubmit(e) {
  e.preventDefault();

  document.querySelector(".msg").textContent = "";
  document.querySelector("#image").src = "";
  const prompt = document.querySelector("#prompt").value;
  const size = document.querySelector("#size").value;

  if (prompt === "") {
    alert("Please add some text!");
    return;
  }
  //   console.log(prompt, size);
  genarateImageRequest(prompt, size);
  document.querySelector("#prompt").value = "";
  document.querySelector("#size").value = "-- Select Size --";
}

async function genarateImageRequest(prompt, size) {
  try {
    showSpinner();
    const response = await fetch("/openai/generateimage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
        size,
      }),
    });
    if (!response.ok) {
      removeSpinner();
      throw new Error("something went wrong!");
    }
    const content = await response.json();
    // console.log(data);
    const imageUrl = content.data;
    document.querySelector("#image").src = imageUrl;
    removeSpinner();
  } catch (error) {
    document.querySelector(".msg").textContent = error;
  }
}
function showSpinner() {
  document.querySelector(".spinner").classList.add("show");
}
function removeSpinner() {
  document.querySelector(".spinner").classList.remove("show");
}

document.querySelector("#image-form").addEventListener("submit", onSubmit);
