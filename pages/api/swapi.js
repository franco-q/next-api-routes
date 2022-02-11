export default (req, res) => { 
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  fetch("https://swapi.dev/api/people/1/", requestOptions)
    .then(response => response.text())
    .then(result => res.status(200).json(result))
    .catch(error => res.status(500).json({ error, txt: 'fail' }));
}
