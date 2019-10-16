node('jenkins-slave-ruby-centos7') {
    stage('Build') {
        git url: "https://github.com/ComputerScienceHouse/CSHPublicSite.git"
        sh "bundle install"
        sh "bundle exec rake build:production"
    }

    /*
    stage('Test') {
        sh "bundle exec rake test"
    }
    */

    stage('Build Image') {
        sh "oc start-build pubsite --from-dir=_site"
    }
}
