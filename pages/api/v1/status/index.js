function status(request, response) {
  return response.status(200).json({ chave: "OK" });
}

export default status;
