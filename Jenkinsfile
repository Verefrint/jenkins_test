pipeline {
    agent any

    environment {
        DOCKER_HOST = "tcp://dind:2375"
        DOCKER_TLS_CERTDIR = ""
    }

    stages {
        stage('Check docker') {
            steps {
                sh 'whoami'
                sh 'echo DOCKER_HOST=$DOCKER_HOST'
                sh 'docker version'
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
                sh 'docker rm -f node-app || true'
                sh 'docker run -d --name node-app -p 3000:3000 node-app'
            }
        }
    }
}
