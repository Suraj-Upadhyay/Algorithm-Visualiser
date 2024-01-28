#!/bin/bash

"""
Before usage, make sure that the script has been
given executable permissions. If not, run the below
command:
chmod +x createComponent.sh

Once, the script is executable, it can be used like
this:

createComponent.sh ComponentName1 ComponentName2 ...

The above command will create a 'components' directory,
below working directory. And, create a folder for each
component with its name under the 'components' and
create an index.js for all of the components as well.

These comoponent folders will contain three files:
ComponentName1.css
ComponentName1.js
index.js

This will be our directory structure for the components
folder created.

components
|
|__index.js
|
|__ComponentName1
|  |
|  |__index.js
|  |__ComponentName1.css
|  |__ComponentName1.js
|
|__ComponentName2
|  |
|  |__index.js
|  |__ComponentName2.css
|  |__ComponentName2.js
|
|
.
.
.

components/index.js -
Will import all the component names
and export it back for the outer
world to see and use.

components/ComponentName1/ComponentName1.css -
This will be empty.

compenents/ComponentName1/ComponentName1.js -
This will import ComponentName1.css, and add
an empty functional component named ComponentName1,
and exports 'ComponentName1' by default.

compenents/ComponentName1/index.js -
This will import ComponentName1 and exports it as
default for the outer world to see.

Importing the components created by this script -

import {ComponentName1, ComponentName2...}
from './components';

Thansk for using this!
"""

mkdir components && cd components
touch index.js

for i in $@
do
    mkdir $i
    touch $i/index.js $i/$i.js $i/$i.css
    echo "import './$i.css';

function $i() {
    return (
        <div className='$i'></div>
    );
}

export deafault $i;
" > $i/$i.js
    echo "import $i from './$i';

export default $i;" > $i/index.js
    echo "import $i from './$i';" >> index.js
done

echo -ne "\nexport {" >> index.js

for i in $@
do
    echo -n "$i," >> index.js
done

echo "};" >> index.js
