function clearform() {
  document.getElementById("name").value = "";
  document.getElementById("password").value = "";
}

document.addEventListener("DOMContentLoaded", function () {
  const signIn = document.getElementById("signin");
  const signUp = document.getElementById("signup");

  signUp.addEventListener("click", function () {
    const username = document.getElementById("name").value;
    const password = document.getElementById("password").value;

    if (username === "" || password === "") {
      alert("Please Enter the details");
      return;
    }

    fakeAjaxPost({ username, password }, function (response) {
      if (response.success) {
        localStorage.setItem(username, JSON.stringify({ username, password }));
        alert("Sign Up is Done successful");
        clearform();
      } else {
        alert("Error");
      }
    });
  });

  signIn.addEventListener("click", function () {
    const username = document.getElementById("name").value;
    const password = document.getElementById("password").value;

    if (username == "" || password == "") {
      alert("Please Enter the details");
      return;
    }

    const storeduser = localStorage.getItem(username);
    if (!storeduser) {
      alert("User not found....");
      clearform();
      return;
    }

    const userdata = JSON.parse(storeduser);
   
    if (userdata.password === password ) {
      alert("Sign in is done successfully");
      clearform();
    } else {
      alert("Incorrect Password....Please Enter correct password");
      clearform();
    }
  });
});

function fakeAjaxPost(data, callback) {
  console.log("Sending data to server...", data);

  setTimeout(() => {
    console.log("Server Response: Success!");
    callback({ success: true });
  }, 1000);
}
