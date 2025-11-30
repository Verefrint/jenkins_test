pipeline {
    agent any

    stages {
        stage('Check docker') {
            steps {
                sh 'whoami'
                sh 'docker version'
                sh 'docker info'
            }
        }

        stage('Build') {
            steps {
                sh 'docker build -t node-app .'
            }
        }

        stage('Test') {
            steps {
                sh 'docker run --rm node-app npm test'
            }
        }

        stage('Deploy') {
            steps {
                // на всякий случай убираем старый контейнер
                sh 'docker rm -f node-app || true'
                sh 'docker run -d --name node-app -p 3000:3000 node-app'
            }
        }
    }
}
