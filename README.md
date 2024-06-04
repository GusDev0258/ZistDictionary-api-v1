## Instruções para rodar a api

- Com o docker instalado digite: `docker run -d -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama`
- Após o imagem baixada e o container up, rode `docker exec -it ollama ollama run phi3:medium`
- Depois de tudo rodando, digite npm start:dev

# Esta api foi criada para ser utilizada com o aplicativo para a matéria DDM, o ZistDictionary-v1, você pode encontrar ele em https://github.com/GusDev0258/ZistDictionary-v1
