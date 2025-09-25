# build img
FROM maven:3.9.9-amazoncorretto-23 AS build
WORKDIR /app

# copy pom and download dependencies
COPY pom.xml .
RUN mvn dependency:go-offline -B

# copy code and compile
COPY src ./src
RUN mvn clean package -DskipTests

# final img
FROM amazoncorretto:23
WORKDIR /app

# copy jar
COPY --from=build /app/target/*.jar app.jar

# expose port
EXPOSE 8080

# exec
ENTRYPOINT ["java", "-jar", "app.jar"]
