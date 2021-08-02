# JARGONS

<p align="center">
<img src="https://github.com/karankumarshreds/NestMessagesApp/blob/master/img/jargons.PNG"/>
</p>

`npm install -g @nestjs/cli`

## To start a new nest project

> nest new messages

## To create a new module

> nest generate module <name_of_module>

`nest generate module messages`

## To generate controller tied to the module

> nest generate controller <name_of_module>/<name_of_controller> --flat

`nest generate controller messages/messages --flat`

`--flat` tells nest to NOT create an extra folder called controllers.
