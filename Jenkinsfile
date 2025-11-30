pipeline {
    agent any

    stages {
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
                sh 'docker run -d --name node-app -p 3000:3000 node-app'
            }
        }
    }
}
