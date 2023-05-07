html, body {
  height: 100%;
}

body {
  margin: 0;
  padding: 0;
}

#ball {
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: red;
  animation: bounce 2s linear infinite;
}

@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(200px);
  }
  100% {
    transform: translateY(0);
  }
}
