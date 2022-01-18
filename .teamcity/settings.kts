import jetbrains.buildServer.configs.kotlin.v2019_2.*
import jetbrains.buildServer.configs.kotlin.v2019_2.buildFeatures.commitStatusPublisher
import jetbrains.buildServer.configs.kotlin.v2019_2.buildSteps.script
import jetbrains.buildServer.configs.kotlin.v2019_2.projectFeatures.spaceConnection
import jetbrains.buildServer.configs.kotlin.v2019_2.triggers.vcs

/*
The settings script is an entry point for defining a TeamCity
project hierarchy. The script should contain a single call to the
project() function with a Project instance or an init function as
an argument.

VcsRoots, BuildTypes, Templates, and subprojects can be
registered inside the project using the vcsRoot(), buildType(),
template(), and subProject() methods respectively.

To debug settings scripts in command-line, run the

    mvnDebug org.jetbrains.teamcity:teamcity-configs-maven-plugin:generate

command and attach your debugger to the port 8000.

To debug in IntelliJ Idea, open the 'Maven Projects' tool window (View
-> Tool Windows -> Maven Projects), find the generate task node
(Plugins -> teamcity-configs -> teamcity-configs:generate), the
'Debug' option is available in the context menu for the task.
*/

version = "2021.2"

project {

    buildType(Build)

    features {
        spaceConnection {
            id = "PROJECT_EXT_3"
            displayName = "JetBrains Space"
            serverUrl = "nefdtco.jetbrains.space"
            clientId = "55682dfa-da7f-4ac6-a9c1-2823da241a71"
            clientSecret = "credentialsJSON:a6737b8e-13ac-4739-848f-d678382ea8a4"
        }
        feature {
            id = "PROJECT_EXT_4"
            type = "deployment-dashboard-config"
            param("dashboardEnabled", "true")
            param("projectKey", "")
            param("refreshSecs", "")
            param("environments", "")
            param("environmentKey", "")
            param("multiEnvConfig", "true")
            param("versionKey", "")
        }
    }
}

object Build : BuildType({
    name = "Build"

    vcs {
        root(DslContext.settingsRoot)

        cleanCheckout = true
    }

    steps {
        script {
            name = "build"
            scriptContent = "npm install"
        }
        script {
            scriptContent = "ng build"
        }
    }

    triggers {
        vcs {
        }
    }

    features {
        commitStatusPublisher {
            vcsRootExtId = "${DslContext.settingsRoot.id}"
            publisher = space {
                authType = connection {
                    connectionId = "PROJECT_EXT_3"
                }
                displayName = "Team City"
            }
        }
    }
})
