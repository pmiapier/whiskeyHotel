# Whiskey Cat Hotel

## Configs:
Copy the `.env.example` file to `.env`:
`cp .env.example .env`
Update `.env` file with DB settings (user, passwort)


## Frontend:
Located in `./app`

### To start in dev:
`cd app`
`pnpm install`
`pnpm run dev`

## Backend (API):
Located in `./api`

### To start in dev:
`cd api`
`pnpm install`
`pnpm run dev`



### TODO ###
* Implement some base level endpoints
* Strip out things we do not need
* Test with postman
* Create admin seed

Endpoints:
* Login
* Signup
* CreateReservation
* ModifyReservation
* GetReservation
* GetReservations
