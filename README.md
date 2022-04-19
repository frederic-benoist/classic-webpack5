# PrestaShop 1.7 Webpack 5 for classic theme

webpack 5 configuration files for PrestaShop classic theme

==For PrestaShop Development training only.==

## Prerequisites

You need a shop with PrestaShop 1.7.8.0 or higher.
You need NodeJS 14.x and NPM 7.x
You need access to the shell of your server.

## Installing
1. Copy files in classic/_dev folder.

    ```sh
    $ cd prestashop_root_directory/themes/classic/_dev
    $ git clone https://github.com/frederic-benoist/classic-webpack5.git 
    $ mv -force classic-webpack5/* ./
	  $ rm -r -force classic-webpack5
    ```

2. install dependencies

    ```sh    
    npm install
    ```
## Command 
- Watch files and recompile whenever they change.
    ```sh 
    npm run watch
    ```
- Build assets in development mode (source map, etc.)
    ```sh 
    npm run dev
    ```
- Build assets in production mode (minify, etc.)
    ```sh 
    npm run prod
    ```
- Check scss files with stylelint 
    ```sh 
    npm run scss-lint
    ```
- Check scss files with stylelint and fix error
    ```sh 
    npm run scss-fix
    ```
- Check js files with eslint 
    ```sh 
    npm run lint
    ```
- Check js files with eslint and fix error
    ```sh 
    npm run lint-fix
    ```
## Authors

* **Frédéric BENOIST** - *Initial work* - [Expert PrestaShop](https://www.fbenoist.com)


## Licensing

This source file is subject to the Academic Free License (AFL 3.0)
that is available through the world-wide-web at this URL:
http://opensource.org/licenses/afl-3.0.php
If you did not receive a copy of the license and are unable to
obtain it through the world-wide-web, please send an email
to license@prestashop.com so we can send you a copy immediately.

## DISCLAIMER
 
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.