# Imagem base: ubuntu.
FROM ubuntu:latest AS build

# Comando para executar o update dentro do container.
RUN apt-get update
# Instalar e configurar o openjdk.
RUN apt-get install openjdk-17-jdk -y
# Copiar todo o projeto para o container.
COPY . .

# Instalação do maven
RUN apt-get install maven -y
# gerar o arquivo .jar para nossa aplicação.
RUN mvn clean install

# Outra imagem que é para rodar o openjdk.
FROM openjdk:17-jdk-slim

# Expor a porta 8080
EXPOSE 8080

# Informando nosso estágio: build e informando o que queremos copiar seguido do nosso novo .jar.
COPY --from=build /backend/target/dsmovie-0.0.1-SNAPSHOT.jar app.jar

ENTRYPOINT [ "java", "-jar", "app.jar" ]