const getvisitors = async () => {
  try {
    const url =
    "https://ohr6o8yxfa.execute-api.us-east-1.amazonaws.com/prod/counter"
    const res = await fetch(url);
    console.log(res.ok);
    const data = await res.json();
    console.log(data);
    body = data.visitor;
    document.getElementById("visit").insertAdjacentHTML("afterbegin", body);
  } catch (err) {
    console.error(err);
  }
};

getvisitors();