Compiled with warnings.

./src/Components/Footer/Footer.jsx
  Line 118:9:  Emojis should be wrapped in <span>, have role="img", and have an accessible description with aria-label or aria-labelledby  jsx-a11y/accessible-emoji

./src/App.js
  Line 6:8:  'Footer' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

^C
Jianlan@Jianlans-MBP covid-19-tracker % ls
ls
README.md		node_modules		public
docs			package-lock.json	src
firebase.json		package.json		yarn.lock
Jianlan@Jianlans-MBP covid-19-tracker % cd src
Jianlan@Jianlans-MBP src % ls
App.js		Components	images
App.module.css	api		index.js
Jianlan@Jianlans-MBP src % cd api
Jianlan@Jianlans-MBP api % ls
index.js
Jianlan@Jianlans-MBP api % vi index.js 
Jianlan@Jianlans-MBP api % cd ..
Jianlan@Jianlans-MBP src % cd ..
Jianlan@Jianlans-MBP covid-19-tracker % cd ..
Jianlan@Jianlans-MBP Reactide % git remote add upstream https://github.com/jianlanren/react-demo.git
fatal: not a git repository (or any of the parent directories): .git
Jianlan@Jianlans-MBP Reactide % git remove -v
git: 'remove' is not a git command. See 'git --help'.

The most similar command is
	remote
Jianlan@Jianlans-MBP Reactide % git remote -v
fatal: not a git repository (or any of the parent directories): .git
Jianlan@Jianlans-MBP Reactide % git clone https://github.com/jianlanren/react-demo.git
fatal: destination path 'react-demo' already exists and is not an empty directory.
Jianlan@Jianlans-MBP Reactide % git clone https://github.com/jianlanren/react-demo.git
Cloning into 'react-demo'...
remote: Enumerating objects: 14585, done.
remote: Counting objects: 100% (14585/14585), done.
remote: Compressing objects: 100% (9345/9345), done.
remote: Total 14585 (delta 3772), reused 14576 (delta 3768), pack-reused 0
Receiving objects: 100% (14585/14585), 21.02 MiB | 9.22 MiB/s, done.
Resolving deltas: 100% (3772/3772), done.
Jianlan@Jianlans-MBP Reactide % cd react-demo
Jianlan@Jianlans-MBP react-demo % git remote -v
origin	https://github.com/jianlanren/react-demo.git (fetch)
origin	https://github.com/jianlanren/react-demo.git (push)
Jianlan@Jianlans-MBP react-demo % git remote add upstream https://github.com/ShuiShenYouLaiLe/react-demo.git
Jianlan@Jianlans-MBP react-demo % git remote -v
origin	https://github.com/jianlanren/react-demo.git (fetch)
origin	https://github.com/jianlanren/react-demo.git (push)
upstream	https://github.com/ShuiShenYouLaiLe/react-demo.git (fetch)
upstream	https://github.com/ShuiShenYouLaiLe/react-demo.git (push)
Jianlan@Jianlans-MBP react-demo % git pull upstream master
From https://github.com/ShuiShenYouLaiLe/react-demo
 * branch            master     -> FETCH_HEAD
 * [new branch]      master     -> upstream/master
fatal: refusing to merge unrelated histories
Jianlan@Jianlans-MBP react-demo % git branch
* main
Jianlan@Jianlans-MBP react-demo % git push origin main
Everything up-to-date
Jianlan@Jianlans-MBP react-demo % git commit -m "create dropdown box"          
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean
Jianlan@Jianlans-MBP react-demo % cd ..       
Jianlan@Jianlans-MBP .Trash % ls 
ls: .: Operation not permitted
Jianlan@Jianlans-MBP .Trash % cd ..
Jianlan@Jianlans-MBP ~ % ls
Applications			eclipse-workspace
CytoscapeConfiguration		env
Desktop				gsea_home
Documents			igv
Downloads			java_error_in_pycharm.hprof
GALES				lib
GDCdata				miniconda3
IdeaProjects			mskcc-vcf2maf-2235eed
Library				nltk_data
Movies				node_modules
Music				opt
NMF_49183d63b4bc		package-lock.json
NetBeansProjects		package.json
Pictures			pyvenv.cfg
Public				rzmq
PycharmProjects			spark
Reactide			torch
Zotero				unit04
bin				venv
eclipse
Jianlan@Jianlans-MBP ~ % cd Reactide 
Jianlan@Jianlans-MBP Reactide % ls
covid-19-tracker		react-demo copy
nodejs-express-sequelize-mysql	react-stockcharts-examples2
portfolio
Jianlan@Jianlans-MBP Reactide % git clone -b master https://github.com/jianlanren/react-demo.git
Cloning into 'react-demo'...
remote: Enumerating objects: 14585, done.
remote: Counting objects: 100% (14585/14585), done.
remote: Compressing objects: 100% (9345/9345), done.
remote: Total 14585 (delta 3772), reused 14576 (delta 3768), pack-reused 0
Receiving objects: 100% (14585/14585), 21.02 MiB | 5.33 MiB/s, done.
Resolving deltas: 100% (3772/3772), done.
Updating files: 100% (11725/11725), done.
Jianlan@Jianlans-MBP Reactide % cd react-demo
Jianlan@Jianlans-MBP react-demo % ls
README.md	django_react	htmlcov		stock
db.sqlite3	frontend	manage.py	venv
Jianlan@Jianlans-MBP react-demo % git remote -v
origin	https://github.com/jianlanren/react-demo.git (fetch)
origin	https://github.com/jianlanren/react-demo.git (push)
Jianlan@Jianlans-MBP react-demo % git remote add origin https://github.com/ShuiShenYouLaiLe/react-demo.git
fatal: remote origin already exists.
Jianlan@Jianlans-MBP react-demo % git remote add upstream https://github.com/ShuiShenYouLaiLe/react-demo.git
Jianlan@Jianlans-MBP react-demo % git pull upstream master
From https://github.com/ShuiShenYouLaiLe/react-demo
 * branch            master     -> FETCH_HEAD
 * [new branch]      master     -> upstream/master
Already up to date.
Jianlan@Jianlans-MBP react-demo % git checkout -b branch
Switched to a new branch 'branch'
Jianlan@Jianlans-MBP react-demo % git branch
* branch
  master
Jianlan@Jianlans-MBP react-demo % git commit -m 'add dropdown list'
On branch branch
Changes not staged for commit:
	modified:   django_react/__pycache__/__init__.cpython-38.pyc
	modified:   django_react/__pycache__/settings.cpython-38.pyc
	modified:   django_react/__pycache__/urls.cpython-38.pyc
	modified:   django_react/__pycache__/wsgi.cpython-38.pyc
	modified:   frontend/__pycache__/__init__.cpython-38.pyc
	modified:   frontend/__pycache__/admin.cpython-38.pyc
	modified:   frontend/__pycache__/apps.cpython-38.pyc
	modified:   frontend/__pycache__/models.cpython-38.pyc
	modified:   frontend/__pycache__/urls.cpython-38.pyc
	modified:   frontend/__pycache__/views.cpython-38.pyc
	modified:   frontend/migrations/__pycache__/__init__.cpython-38.pyc
	modified:   frontend/node_modules/.package-lock.json
	modified:   frontend/package-lock.json
	modified:   frontend/package.json
	modified:   frontend/src/components/App.js
	modified:   frontend/static/frontend/main.js
	modified:   stock/__pycache__/__init__.cpython-38.pyc
	modified:   stock/__pycache__/admin.cpython-38.pyc
	modified:   stock/__pycache__/apps.cpython-38.pyc
	modified:   stock/__pycache__/models.cpython-38.pyc
	modified:   stock/__pycache__/serializers.cpython-38.pyc
	modified:   stock/__pycache__/urls.cpython-38.pyc
	modified:   stock/__pycache__/views.cpython-38.pyc
	modified:   stock/migrations/__pycache__/0001_initial.cpython-38.pyc
	modified:   stock/migrations/__pycache__/0002_record.cpython-38.pyc
	modified:   stock/migrations/__pycache__/__init__.cpython-38.pyc
	modified:   venv/pyvenv.cfg

no changes added to commit
Jianlan@Jianlans-MBP react-demo % git push origin branch
Total 0 (delta 0), reused 0 (delta 0)
remote: 
remote: Create a pull request for 'branch' on GitHub by visiting:
remote:      https://github.com/jianlanren/react-demo/pull/new/branch
remote: 
To https://github.com/jianlanren/react-demo.git
 * [new branch]      branch -> branch
Jianlan@Jianlans-MBP react-demo % git commit -m 'fetch data table' 
On branch branch
Changes not staged for commit:
	modified:   django_react/__pycache__/__init__.cpython-38.pyc
	modified:   django_react/__pycache__/settings.cpython-38.pyc
	modified:   django_react/__pycache__/urls.cpython-38.pyc
	modified:   django_react/__pycache__/wsgi.cpython-38.pyc
	modified:   frontend/__pycache__/__init__.cpython-38.pyc
	modified:   frontend/__pycache__/admin.cpython-38.pyc
	modified:   frontend/__pycache__/apps.cpython-38.pyc
	modified:   frontend/__pycache__/models.cpython-38.pyc
	modified:   frontend/__pycache__/urls.cpython-38.pyc
	modified:   frontend/__pycache__/views.cpython-38.pyc
	modified:   frontend/migrations/__pycache__/__init__.cpython-38.pyc
	modified:   frontend/node_modules/.package-lock.json
	modified:   frontend/package-lock.json
	modified:   frontend/package.json
	modified:   frontend/src/components/App.js
	modified:   frontend/src/index.js
	modified:   frontend/static/frontend/main.js
	modified:   stock/__pycache__/__init__.cpython-38.pyc
	modified:   stock/__pycache__/admin.cpython-38.pyc
	modified:   stock/__pycache__/apps.cpython-38.pyc
	modified:   stock/__pycache__/models.cpython-38.pyc
	modified:   stock/__pycache__/serializers.cpython-38.pyc
	modified:   stock/__pycache__/urls.cpython-38.pyc
	modified:   stock/__pycache__/views.cpython-38.pyc
	modified:   stock/migrations/__pycache__/0001_initial.cpython-38.pyc
	modified:   stock/migrations/__pycache__/0002_record.cpython-38.pyc
	modified:   stock/migrations/__pycache__/__init__.cpython-38.pyc
	modified:   venv/pyvenv.cfg

no changes added to commit
Jianlan@Jianlans-MBP react-demo % git push origin branch          
Everything up-to-date
Jianlan@Jianlans-MBP react-demo % cd ..
Jianlan@Jianlans-MBP Reactide % ls
covid-19-tracker		portfolio			react-demo copy
nodejs-express-sequelize-mysql	react-demo			react-stockcharts-examples2
Jianlan@Jianlans-MBP Reactide % cd react-demo
Jianlan@Jianlans-MBP react-demo % git remote -v
origin	https://github.com/jianlanren/react-demo.git (fetch)
origin	https://github.com/jianlanren/react-demo.git (push)
upstream	https://github.com/ShuiShenYouLaiLe/react-demo.git (fetch)
upstream	https://github.com/ShuiShenYouLaiLe/react-demo.git (push)
Jianlan@Jianlans-MBP react-demo % git pull upstream master
From https://github.com/ShuiShenYouLaiLe/react-demo
 * branch            master     -> FETCH_HEAD
Already up to date.
Jianlan@Jianlans-MBP react-demo % git pull upstream branch
fatal: couldn't find remote ref branch
Jianlan@Jianlans-MBP react-demo % git branch
* branch
  master
Jianlan@Jianlans-MBP react-demo % git fetch --all
Fetching origin
Fetching upstream
Jianlan@Jianlans-MBP react-demo % get checkout branch
zsh: command not found: get
Jianlan@Jianlans-MBP react-demo % git checkout branch
M	django_react/__pycache__/__init__.cpython-38.pyc
M	django_react/__pycache__/settings.cpython-38.pyc
M	django_react/__pycache__/urls.cpython-38.pyc
M	django_react/__pycache__/wsgi.cpython-38.pyc
M	frontend/__pycache__/__init__.cpython-38.pyc
M	frontend/__pycache__/admin.cpython-38.pyc
M	frontend/__pycache__/apps.cpython-38.pyc
M	frontend/__pycache__/models.cpython-38.pyc
M	frontend/__pycache__/urls.cpython-38.pyc
M	frontend/__pycache__/views.cpython-38.pyc
M	frontend/migrations/__pycache__/__init__.cpython-38.pyc
M	frontend/node_modules/.package-lock.json
M	frontend/package-lock.json
M	frontend/package.json
M	frontend/src/components/App.js
M	frontend/src/index.js
M	frontend/static/frontend/main.js
M	stock/__pycache__/__init__.cpython-38.pyc
M	stock/__pycache__/admin.cpython-38.pyc
M	stock/__pycache__/apps.cpython-38.pyc
M	stock/__pycache__/models.cpython-38.pyc
M	stock/__pycache__/serializers.cpython-38.pyc
M	stock/__pycache__/urls.cpython-38.pyc
M	stock/__pycache__/views.cpython-38.pyc
M	stock/migrations/__pycache__/0001_initial.cpython-38.pyc
M	stock/migrations/__pycache__/0002_record.cpython-38.pyc
M	stock/migrations/__pycache__/__init__.cpython-38.pyc
M	venv/pyvenv.cfg
Already on 'branch'
Jianlan@Jianlans-MBP react-demo % git merge origin/master
Already up to date.
Jianlan@Jianlans-MBP react-demo % git checkout master
M	django_react/__pycache__/__init__.cpython-38.pyc
M	django_react/__pycache__/settings.cpython-38.pyc
M	django_react/__pycache__/urls.cpython-38.pyc
M	django_react/__pycache__/wsgi.cpython-38.pyc
M	frontend/__pycache__/__init__.cpython-38.pyc
M	frontend/__pycache__/admin.cpython-38.pyc
M	frontend/__pycache__/apps.cpython-38.pyc
M	frontend/__pycache__/models.cpython-38.pyc
M	frontend/__pycache__/urls.cpython-38.pyc
M	frontend/__pycache__/views.cpython-38.pyc
M	frontend/migrations/__pycache__/__init__.cpython-38.pyc
M	frontend/node_modules/.package-lock.json
M	frontend/package-lock.json
M	frontend/package.json
M	frontend/src/components/App.js
M	frontend/src/index.js
M	frontend/static/frontend/main.js
M	stock/__pycache__/__init__.cpython-38.pyc
M	stock/__pycache__/admin.cpython-38.pyc
M	stock/__pycache__/apps.cpython-38.pyc
M	stock/__pycache__/models.cpython-38.pyc
M	stock/__pycache__/serializers.cpython-38.pyc
M	stock/__pycache__/urls.cpython-38.pyc
M	stock/__pycache__/views.cpython-38.pyc
M	stock/migrations/__pycache__/0001_initial.cpython-38.pyc
M	stock/migrations/__pycache__/0002_record.cpython-38.pyc
M	stock/migrations/__pycache__/__init__.cpython-38.pyc
M	venv/pyvenv.cfg
Switched to branch 'master'
Your branch is up to date with 'origin/master'.
Jianlan@Jianlans-MBP react-demo % git branch
  branch
* master
Jianlan@Jianlans-MBP react-demo % git merge origin/master master
Already up to date.
Jianlan@Jianlans-MBP react-demo % git branch
  branch
* master
Jianlan@Jianlans-MBP react-demo % cd frontend 
Jianlan@Jianlans-MBP frontend % cd src 
Jianlan@Jianlans-MBP src % ls    
components	index.js
Jianlan@Jianlans-MBP src % cd components 
Jianlan@Jianlans-MBP components % ls
App.js
Jianlan@Jianlans-MBP components % vi App.js        

            });
         });

         }*/

    render(){
    return(
    <div className="child">
        <button onClick={this.fetchData}>
        fetchData
        </button>
        <button onClick={this.plotData}>
        plotData
        </button>

        <p> Table of stockId: {this.props.callFromParent}</p>

        <table>
            <tbody>
            {this.state.data.map(contact => {
            return (
            <tr key={contact.date}>
                <td>{contact.date}---</td>
                <td>{contact.price}</td>
            </tr>
          );
        })}
        </tbody>
        </table>

      </div>
    );
    }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);
