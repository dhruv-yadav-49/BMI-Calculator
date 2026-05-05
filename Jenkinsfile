pipeline {
    agent any

    stages {

        stage('Clone Code') {
            steps {
                git 'https://github.com/dhruv-yadav-49/BMI-Calculator.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                docker rm -f my-app || true
                docker rmi my-app || true
                docker build -t my-app .
                '''
            }
        }

        stage('Deploy Container') {
            steps {
                sh '''
                docker run -d -p 80:80 --name my-app my-app
                '''
            }
        }
    }
}
