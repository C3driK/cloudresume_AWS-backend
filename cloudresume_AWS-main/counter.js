const getvisitors = async () => {
  try {
    const url =
      "https://sz2l3yv8wi.execute-api.us-east-1.amazonaws.com/deployment/visitorsCount";
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