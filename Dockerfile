FROM adoptopenjdk/openjdk11:ubi
VOLUME /temp
ADD target/KalkulatorWeb-1.0.0.jar KalkulatorWeb.jar
EXPOSE 8080
CMD java -jar KalkulatorWeb.jar