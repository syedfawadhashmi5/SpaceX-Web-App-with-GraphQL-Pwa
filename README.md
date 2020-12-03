Bootcamp 2020 (English) : Building SpaceX App with QraphQL

npx create-react-app spacex --typyscript

then run this cammand 

yarn add graphql -tag graphql

after this run this cammand


yarn add -D @apollo/client

after this run codegen cli cammand

yarn add -D @graphql-codegen/cli

after run this cammand 

yarn graphql-codegen init

after init few step you would type

1 Where is your schema?: (path or url) https://spacexdata.herokuapp.com/graphql

2 Where are your operations and fragments?: ./src/components/**/*.{ts,tsx}

3 ? Where to write the output: (src/generated/graphql.tsx) : press emter 

4 ? Do you want to generate an introspection file? (Y/n) : no

5 How to name the config file? codegen.yml

6 What script in package.json should run the codegen?  codegen

after setup querys you need to run this cammand

7 yarn codegen

when you see error then you cope this command in error section yarn add -D @graphql-codegen/typescript-operations

8 yarn codegen again run this cammand

Url ( https://spacex-web-app-v1.web.app/ )


