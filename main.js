const createChassis = () => {

    const newChassisObject = {}

    return newChassisObject
}

// Invoke the function here
const newCar = createChassis()

// Create a new function 
const addWheels = (chassisObject) => {
    chassisObject.wheels = 4

    return chassisObject
}

const carWithWheels = addWheels(newCar)

const addEngine = (chassisObject) => {
    chassisObject.engine = "4.8L"

    return chassisObject
}

const carWithEngine = addEngine(carWithWheels)

const addSteeringWheel = (chassisObject) => {
    chassisObject.steeringWheel = "Tilting"

    return chassisObject
}

const carSteeringWheel = addSteeringWheel(carWithEngine)

const addDriveTrain = (chassisObject) => {
    chassisObject.driveTrain = "two wheel drive"

    return chassisObject
}

const carDriveTrain = addDriveTrain(carSteeringWheel)

console.log(carDriveTrain) 