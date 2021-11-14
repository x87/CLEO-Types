// Sanny Builder Library v0.144
/// <reference no-default-lib="true"/>
/// <reference lib="es5" />
/** Integer value */
type int = number & { _int: never };
/** Floating-point value */
type float = number & { _float: never };

/** Pauses the script execution for the specified amount of time in milliseconds */
declare function wait(delay: int): void;
/** Displays a black text box with custom text */
declare function showTextBox(text: string): void;
/** Prints values to the cleo_redux.log */
declare function log(...values: Array<string | int | float>): void;
/** Executes the opcode with the given arguments */
declare function op<T>(op: int, ...args: any[]): T;
/** Terminates the script and optionally writes a reason to the log file */
declare function exit(reason?: string): void;

/** Current host name */
declare const GAME: "re3" | "reVC" | "gta3" | "vc" | "sa";
/** Is player on a mission flag */
declare var ONMISSION: boolean;
/** Self-incrementing timer #1 */
declare var TIMERA: int;
/** Self-incrementing timer #2 */
declare var TIMERB: int;
/** Audio Effects
 * 
 * https://library.sannybuilder.com/#/vc/classes/Audio */
interface Audio {
    /** Unloads the mission audio (03CF), freeing game memory
    *
    * https://library.sannybuilder.com/#/vc?q=040D */
    ClearMissionAudio(slotId: int): void;
    /** Returns true if the audio (03CF) is no longer playing
    *
    * https://library.sannybuilder.com/#/vc?q=03D2 */
    HasMissionAudioFinished(slotId: int): boolean;
    /** Returns true if the mission audio has loaded (03CF)
    *
    * https://library.sannybuilder.com/#/vc?q=03D0 */
    HasMissionAudioLoaded(slotId: int): boolean;
    /** Loads the end of game music
    *
    * https://library.sannybuilder.com/#/vc?q=0451 */
    LoadEndOfGameTune(): void;
    /** Loads the file from the audio directory
    *
    * https://library.sannybuilder.com/#/vc?q=03CF */
    LoadMissionAudio(slotId: int, name: string): void;
    /** Plays an announcement audio
    *
    * https://library.sannybuilder.com/#/vc?q=057D */
    PlayAnnouncement(track: int): void;
    /** Plays the theme tune
    *
    * https://library.sannybuilder.com/#/vc?q=043F */
    PlayEndOfGameTune(): void;
    /** Plays the loaded sound (03CF)
    *
    * https://library.sannybuilder.com/#/vc?q=03D1 */
    PlayMissionAudio(slotId: int): void;
    /** Plays an audio file with the specified ID from the Audio directory
    *
    * https://library.sannybuilder.com/#/vc?q=0394 */
    PlayMissionPassedTune(soundId: int): void;
    /** Plays police radio message audio reporting the suspect has last been seen at the specified location
    *
    * https://library.sannybuilder.com/#/vc?q=03AA */
    PoliceRadioMessage(x: float, y: float, z: float): void;
    /** Sets the location of the mission audio (03CF) where it can be heard
    *
    * https://library.sannybuilder.com/#/vc?q=03D7 */
    SetMissionAudioPosition(slotId: int, x: float, y: float, z: float): void;
    /** Sets whether sounds should fade along with the screen
    *
    * https://library.sannybuilder.com/#/vc?q=043C */
    SetMusicDoesFade(state: boolean): void;
    /** Sets the current radio station that is playing, if the player is in a vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=041E */
    SetRadioChannel(channel: int, startFromMs: int): void;
    /** Stops the theme tune
    *
    * https://library.sannybuilder.com/#/vc?q=0440 */
    StopEndOfGameTune(): void;
}
declare var Audio: Audio
/** Markers and Radar Icons
 * 
 * https://library.sannybuilder.com/#/vc/classes/Blip */
declare class Blip {
    constructor(handle: number);
    /** Adds a blip and a marker to the vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=0186 */
    static AddForCar(vehicle: Car): Blip;
    /** Adds a blip with properties to the vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=0161 */
    static AddForCarOld(vehicle: Car, color: int, display: int): Blip;
    /** Adds a blip and a marker to the character
    *
    * https://library.sannybuilder.com/#/vc?q=0187 */
    static AddForChar(char: Char): Blip;
    /** Adds a blip with properties to the character
    *
    * https://library.sannybuilder.com/#/vc?q=0162 */
    static AddForCharOld(char: Char, color: int, display: int): Blip;
    /** Adds a blip to the contact point
    *
    * https://library.sannybuilder.com/#/vc?q=0189 */
    static AddForContactPoint(x: float, y: float, z: float): Blip;
    /** Adds a blip to the location
    *
    * https://library.sannybuilder.com/#/vc?q=018A */
    static AddForCoord(x: float, y: float, z: float): Blip;
    /** Adds a blip with properties at the location
    *
    * https://library.sannybuilder.com/#/vc?q=0167 */
    static AddForCoordOld(x: float, y: float, z: float, colour: int, display: int): Blip;
    /** Adds a blip and a marker to the object
    *
    * https://library.sannybuilder.com/#/vc?q=0188 */
    static AddForObject(object: ScriptObject): Blip;
    /** Adds a blip and a marker to the pickup
    *
    * https://library.sannybuilder.com/#/vc?q=03DC */
    static AddForPickup(pickup: Pickup): Blip;
    /** Adds a contact sprite blip for the specified coordinates
    *
    * https://library.sannybuilder.com/#/vc?q=0570 */
    static AddShortRangeSpriteForContactPoint(x: float, y: float, z: float, sprite: int): Blip;
    /** Adds a sprite blip for the specified coordinates
    *
    * https://library.sannybuilder.com/#/vc?q=04CE */
    static AddShortRangeSpriteForCoord(x: float, y: float, z: float, sprite: int): Blip;
    /** Adds a sprite blip to the contact point
    *
    * https://library.sannybuilder.com/#/vc?q=02A7 */
    static AddSpriteForContactPoint(x: float, y: float, z: float, sprite: int): Blip;
    /** Adds a sprite blip to the location
    *
    * https://library.sannybuilder.com/#/vc?q=02A8 */
    static AddSpriteForCoord(x: float, y: float, z: float, sprite: int): Blip;
    /** Sets the blip's color
    *
    * https://library.sannybuilder.com/#/vc?q=0165 */
    changeColor(color: int): void;
    /** Changes the display of the specified blip
    *
    * https://library.sannybuilder.com/#/vc?q=018B */
    changeDisplay(display: int): void;
    /** Sets the blip's size
    *
    * https://library.sannybuilder.com/#/vc?q=0168 */
    changeScale(size: int): void;
    /** Sets whether the blip should appear dimmed
    *
    * https://library.sannybuilder.com/#/vc?q=0166 */
    dim(state: boolean): void;
    /** Removes the blip
    *
    * https://library.sannybuilder.com/#/vc?q=0164 */
    remove(): void;
}
/** Camera/View Manipulation
 * 
 * https://library.sannybuilder.com/#/vc/classes/Camera */
interface Camera {
    /** Fades the screen for the specified time
    *
    * https://library.sannybuilder.com/#/vc?q=016A */
    DoFade(time: int, direction: int): void;
    /** Returns the debug camera position
    *
    * https://library.sannybuilder.com/#/vc?q=0454 */
    GetDebugCoordinates(): {
        x: float;
        y: float;
        z: float;
    };
    /** Stores the location the debug camera is pointing to
    *
    * https://library.sannybuilder.com/#/vc?q=0463 */
    GetDebugPointAt(): {
        x: float;
        y: float;
        z: float;
    };
    /** Returns true if the screen is fading (016A)
    *
    * https://library.sannybuilder.com/#/vc?q=016B */
    GetFadingStatus(): boolean;
    /** Returns true if the camera is in widescreen mode
    *
    * https://library.sannybuilder.com/#/vc?q=0603 */
    IsInWidescreenMode(): boolean;
    /** Returns true if any part of the radius of the specified point is visible on screen
    *
    * https://library.sannybuilder.com/#/vc?q=00C2 */
    IsPointOnScreen(x: float, y: float, z: float, radius: float): boolean;
    /** Attaches the camera to the specified vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=0158 */
    PointAtCar(vehicle: Car, mode: int, switchStyle: int): void;
    /** Attaches the camera to the specified character
    *
    * https://library.sannybuilder.com/#/vc?q=0159 */
    PointAtChar(char: Char, mode: int, switchStyle: int): void;
    /** Attaches the camera to the specified player
    *
    * https://library.sannybuilder.com/#/vc?q=0157 */
    PointAtPlayer(player: Player, mode: int, switchStyle: int): void;
    /** Points the camera at the specified location and applies the position set by 0159
    *
    * https://library.sannybuilder.com/#/vc?q=0160 */
    PointAtPoint(x: float, y: float, z: float, switchStyle: int): void;
    /** Restores the camera to its usual position
    *
    * https://library.sannybuilder.com/#/vc?q=015A */
    Restore(): void;
    /** Restores the camera, putting it back behind the player
    *
    * https://library.sannybuilder.com/#/vc?q=02EB */
    RestoreJumpcut(): void;
    /** Puts the camera behind the player
    *
    * https://library.sannybuilder.com/#/vc?q=0373 */
    SetBehindPlayer(): void;
    /** Sets the RGB color of the fade command (016A)
    *
    * https://library.sannybuilder.com/#/vc?q=0169 */
    SetFadingColor(r: int, g: int, b: int): void;
    /** Sets the camera's position and rotation
    *
    * https://library.sannybuilder.com/#/vc?q=015F */
    SetFixedPosition(x: float, y: float, z: float, xRotation: float, yRotation: float, zRotation: float): void;
    /** Enables traffic spawn at the camera position, otherwise at the player position (default)
    *
    * https://library.sannybuilder.com/#/vc?q=03EA */
    SetGenerateCarsAround(state: boolean): void;
    /** Puts the camera in front of the player, pointing towards the player
    *
    * https://library.sannybuilder.com/#/vc?q=03C8 */
    SetInFrontOfPlayer(): void;
    /** Sets how long the camera transition will last
    *
    * https://library.sannybuilder.com/#/vc?q=0460 */
    SetInterpolationParameters(_p1: float, time: int): void;
    /** Sets the near clip
    *
    * https://library.sannybuilder.com/#/vc?q=041D */
    SetNearClip(value: float): void;
    /** Sets how far behind the camera is from the player
    *
    * https://library.sannybuilder.com/#/vc?q=032A */
    SetZoom(zoom: int): void;
    /** Shakes the camera with the given intensity
    *
    * https://library.sannybuilder.com/#/vc?q=0003 */
    Shake(intensity: int): void;
    /** Displays a white interference overlay on the screen
    *
    * https://library.sannybuilder.com/#/vc?q=0507 */
    SwitchLift(state: boolean): void;
    /** Displays a green scan line overlay on the screen
    *
    * https://library.sannybuilder.com/#/vc?q=04C7 */
    SwitchSecurity(state: boolean): void;
}
declare var Camera: Camera
/** Script Vehicles
 * 
 * https://library.sannybuilder.com/#/vc/classes/Car */
declare class Car {
    constructor(handle: number);
    /** Creates a vehicle at the specified location, with the specified model
    *
    * https://library.sannybuilder.com/#/vc?q=00A5 */
    static Create(modelId: int, x: float, y: float, z: float): Car;
    /** Returns true if the handle is an invalid vehicle handle or the vehicle has been destroyed (wrecked)
    *
    * https://library.sannybuilder.com/#/vc?q=0119 */
    static IsDead(handle: int): boolean;
    /** Sets the variation of the next car to be created
    *
    * https://library.sannybuilder.com/#/vc?q=0506 */
    static SetModelComponents(_unused: int, component1: int, component2: int): void;
    /** Activates upside-down car check for the car
    *
    * https://library.sannybuilder.com/#/vc?q=0190 */
    addUpsidedownCheck(): void;
    /** Deflates the car's tire
    *
    * https://library.sannybuilder.com/#/vc?q=04FE */
    burstTire(tireId: int): void;
    /** Sets the car's primary and secondary colors
    *
    * https://library.sannybuilder.com/#/vc?q=0229 */
    changeColor(primaryColor: int, secondaryColor: int): void;
    /** Clears the vehicle's last weapon damage (see 031E)
    *
    * https://library.sannybuilder.com/#/vc?q=0468 */
    clearLastWeaponDamage(): void;
    /** Closes all car doors, hoods and boots
    *
    * https://library.sannybuilder.com/#/vc?q=0508 */
    closeAllDoors(): void;
    /** Removes the vehicle from the game
    *
    * https://library.sannybuilder.com/#/vc?q=00A6 */
    delete(): void;
    /** Disarms the car's bomb
    *
    * https://library.sannybuilder.com/#/vc?q=059B */
    disarmBomb(): void;
    /** Makes the vehicle explode
    *
    * https://library.sannybuilder.com/#/vc?q=020B */
    explode(): void;
    /** Locks the vehicle's position
    *
    * https://library.sannybuilder.com/#/vc?q=0519 */
    freezePosition(state: boolean): void;
    /** Makes the car maintain its position
    *
    * https://library.sannybuilder.com/#/vc?q=0574 */
    freezePositionAndDontLoadCollision(state: boolean): void;
    /** Gets the car's primary and secondary colors
    *
    * https://library.sannybuilder.com/#/vc?q=03F3 */
    getColors(): {
        primaryColour: int;
        secondaryColour: int;
    };
    /** Returns the vehicle's coordinates
    *
    * https://library.sannybuilder.com/#/vc?q=00AA */
    getCoordinates(): {
        x: float;
        y: float;
        z: float;
    };
    /** Returns the car's driver handle
    *
    * https://library.sannybuilder.com/#/vc?q=046C */
    getDriver(): Char;
    /** Returns the X coord of the vehicle's angle
    *
    * https://library.sannybuilder.com/#/vc?q=02F8 */
    getForwardX(): float;
    /** Returns the Y coord of the vehicle's angle
    *
    * https://library.sannybuilder.com/#/vc?q=02F9 */
    getForwardY(): float;
    /** Returns the vehicle's heading (z-angle)
    *
    * https://library.sannybuilder.com/#/vc?q=0174 */
    getHeading(): float;
    /** Returns the vehicle's health
    *
    * https://library.sannybuilder.com/#/vc?q=0227 */
    getHealth(): int;
    /** Returns the maximum number of passengers that could sit in the car
    *
    * https://library.sannybuilder.com/#/vc?q=01EA */
    getMaximumNumberOfPassengers(): int;
    /** Returns the car's model id
    *
    * https://library.sannybuilder.com/#/vc?q=0441 */
    getModel(): int;
    /** Returns the number of passengers sitting in the car
    *
    * https://library.sannybuilder.com/#/vc?q=01E9 */
    getNumberOfPassengers(): int;
    /** Returns the coordinates of an offset of the vehicle's position, depending on the vehicle's rotation
    *
    * https://library.sannybuilder.com/#/vc?q=0407 */
    getOffsetInWorldCoords(xOffset: float, yOffset: float, zOffset: float): {
        x: float;
        y: float;
        z: float;
    };
    /** Gets the car's speed
    *
    * https://library.sannybuilder.com/#/vc?q=02E3 */
    getSpeed(): float;
    /** Makes the AI drive to the specified location by any means
    *
    * https://library.sannybuilder.com/#/vc?q=00A7 */
    gotoCoordinates(x: float, y: float, z: float): void;
    /** Makes the AI drive to the specified location obeying the traffic rules
    *
    * https://library.sannybuilder.com/#/vc?q=02C2 */
    gotoCoordinatesAccurate(x: float, y: float, z: float): void;
    /** Returns true if the vehicle has been hit by the specified weapon
    *
    * https://library.sannybuilder.com/#/vc?q=031E */
    hasBeenDamagedByWeapon(weaponType: int): boolean;
    /** Returns true if the car's health is over the specified value
    *
    * https://library.sannybuilder.com/#/vc?q=0185 */
    isHealthGreater(health: int): boolean;
    /** Returns true if the vehicle's siren is on
    *
    * https://library.sannybuilder.com/#/vc?q=0383 */
    isIcecreamJingleOn(): boolean;
    /** Returns true if the vehicle is in the air
    *
    * https://library.sannybuilder.com/#/vc?q=01F3 */
    isInAirProper(): boolean;
    /** Returns true if the vehicle is located within the specified 2D area
    *
    * https://library.sannybuilder.com/#/vc?q=00B0 */
    isInArea2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, drawSphere: boolean): boolean;
    /** Returns true if the vehicle is located within the specified 3D area
    *
    * https://library.sannybuilder.com/#/vc?q=00B1 */
    isInArea3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, drawSphere: boolean): boolean;
    /** Returns true if the vehicle is submerged in water
    *
    * https://library.sannybuilder.com/#/vc?q=02BF */
    isInWater(): boolean;
    /** Returns true if the vehicle has the specified model
    *
    * https://library.sannybuilder.com/#/vc?q=0137 */
    isModel(modelId: int): boolean;
    /** Returns true if the car is burning
    *
    * https://library.sannybuilder.com/#/vc?q=0495 */
    isOnFire(): boolean;
    /** Returns true if the car is visible
    *
    * https://library.sannybuilder.com/#/vc?q=02CA */
    isOnScreen(): boolean;
    /** Returns true if the specified car seat is empty
    *
    * https://library.sannybuilder.com/#/vc?q=0431 */
    isPassengerSeatFree(seatIndex: int): boolean;
    /** Returns true if the vehicle is not moving
    *
    * https://library.sannybuilder.com/#/vc?q=01C1 */
    isStopped(): boolean;
    isStoppedInArea2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, drawSphere: boolean): boolean;
    isStoppedInArea3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, drawSphere: boolean): boolean;
    /** Returns true if the car has been upside down for more than 2 seconds (requires 0190)
    *
    * https://library.sannybuilder.com/#/vc?q=018F */
    isStuckOnRoof(): boolean;
    /** Returns true if the car's tire is deflated
    *
    * https://library.sannybuilder.com/#/vc?q=0496 */
    isTireBurst(tireId: int): boolean;
    /** Returns true if the vehicle is in the normal position (upright)
    *
    * https://library.sannybuilder.com/#/vc?q=020D */
    isUpright(): boolean;
    /** Returns true if the car is upside down
    *
    * https://library.sannybuilder.com/#/vc?q=01F4 */
    isUpsidedown(): boolean;
    isWaitingForWorldCollision(): boolean;
    locate2D(x: float, y: float, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    locate3D(x: float, y: float, z: float, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    locateStopped2D(x: float, y: float, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the car is stopped in the radius of the specified point
    *
    * https://library.sannybuilder.com/#/vc?q=01B0 */
    locateStopped3D(x: float, y: float, z: float, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Sets the locked status of the car's doors
    *
    * https://library.sannybuilder.com/#/vc?q=020A */
    lockDoors(lockStatus: int): void;
    /** Marks the car as being part of a convoy, which seems to follow a path set by 0994
    *
    * https://library.sannybuilder.com/#/vc?q=04BD */
    markAsConvoyCar(state: boolean): void;
    /** Allows the vehicle to be deleted by the game if necessary, and also removes it from the mission cleanup list, if applicable
    *
    * https://library.sannybuilder.com/#/vc?q=01C3 */
    markAsNoLongerNeeded(): void;
    /** Opens the car's trunk and keeps it open
    *
    * https://library.sannybuilder.com/#/vc?q=04E1 */
    popBoot(): void;
    /** Opens the trunk/boot door component of the vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=050B */
    popBootUsingPhysics(): void;
    /** Deactivates upside-down car check (0190) for the car
    *
    * https://library.sannybuilder.com/#/vc?q=0191 */
    removeUpsidedownCheck(): void;
    /** Sets the driver and all passengers' objective to leave the vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=045F */
    setAllOccupantsLeave(): void;
    /** Sets whether the vehicle will avoid paths between levels (0426)
    *
    * https://library.sannybuilder.com/#/vc?q=0428 */
    setAvoidLevelTransitions(state: boolean): void;
    /** Sets whether the car receives damage
    *
    * https://library.sannybuilder.com/#/vc?q=03F5 */
    setCanBeDamaged(state: boolean): void;
    /** Sets whether the car's tires can be deflated
    *
    * https://library.sannybuilder.com/#/vc?q=053F */
    setCanBurstTires(state: boolean): void;
    /** Enables or disables the ability to Pay'n'Spray the car
    *
    * https://library.sannybuilder.com/#/vc?q=0294 */
    setCanRespray(state: boolean): void;
    /** Set's whether the AI driver will occupy the fast (left) lane on a two-way road
    *
    * https://library.sannybuilder.com/#/vc?q=0466 */
    setChangeLane(state: boolean): void;
    /** Puts the vehicle at the specified location
    *
    * https://library.sannybuilder.com/#/vc?q=00AB */
    setCoordinates(x: float, y: float, z: float): void;
    /** Sets the vehicle's max speed
    *
    * https://library.sannybuilder.com/#/vc?q=00AD */
    setCruiseSpeed(maxSpeed: float): void;
    /** Sets the behavior of the vehicle's AI driver
    *
    * https://library.sannybuilder.com/#/vc?q=00AE */
    setDrivingStyle(drivingStyle: int): void;
    /** Sets the speed of the car
    *
    * https://library.sannybuilder.com/#/vc?q=04BA */
    setForwardSpeed(forwardSpeed: float): void;
    /** Sets the vehicle's heading (z-angle)
    *
    * https://library.sannybuilder.com/#/vc?q=0175 */
    setHeading(heading: float): void;
    /** Sets the vehicle's health
    *
    * https://library.sannybuilder.com/#/vc?q=0224 */
    setHealth(health: int): void;
    /** Sets whether the car is heavy
    *
    * https://library.sannybuilder.com/#/vc?q=01EC */
    setHeavy(state: boolean): void;
    /** Sets the car's mission to idle (MISSION_NONE), stopping any driving activity
    *
    * https://library.sannybuilder.com/#/vc?q=00A9 */
    setIdle(): void;
    setLoadCollisionFlag(state: boolean): void;
    /** Sets the mission of the vehicle's AI driver
    *
    * https://library.sannybuilder.com/#/vc?q=00AF */
    setMission(carMission: int): void;
    /** Teleports the vehicle nearby the player's location
    *
    * https://library.sannybuilder.com/#/vc?q=0450 */
    setOnPathToPlayer(): void;
    /** Makes a vehicle immune to everything except the player
    *
    * https://library.sannybuilder.com/#/vc?q=02AA */
    setOnlyDamagedByPlayer(state: boolean): void;
    /** Sets the vehicle's immunities
    *
    * https://library.sannybuilder.com/#/vc?q=02AC */
    setProofs(bulletProof: boolean, fireProof: boolean, explosionProof: boolean, collisionProof: boolean, meleeProof: boolean): void;
    /** Sets the AI driver's mission to ram another car (similar to 00AF with RamCarFaraway)
    *
    * https://library.sannybuilder.com/#/vc?q=032C */
    setRamCar(target: Car): void;
    /** Sets the car on a specific route
    *
    * https://library.sannybuilder.com/#/vc?q=048B */
    setRandomRouteSeed(routeSeed: int): void;
    /** Sets the car's status
    *
    * https://library.sannybuilder.com/#/vc?q=03A2 */
    setStatus(status: int): void;
    /** Sets the minimum distance for the AI driver to start ignoring car paths and go straight to the target
    *
    * https://library.sannybuilder.com/#/vc?q=04E0 */
    setStraightLineDistance(distance: int): void;
    /** Makes the car more resistant to collisions
    *
    * https://library.sannybuilder.com/#/vc?q=03AB */
    setStrong(state: boolean): void;
    /** Sets whether the taxi's roof light is on
    *
    * https://library.sannybuilder.com/#/vc?q=0216 */
    setTaxiLights(state: boolean): void;
    /** Makes the AI driver perform the action in the vehicle for the specified period of time
    *
    * https://library.sannybuilder.com/#/vc?q=0477 */
    setTempAction(actionId: int, timeInMs: int): void;
    /** Sets the alpha transparency of a distant vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=0594 */
    setToFadeIn(alpha: int): void;
    /** Overrides the default vehicle traction value of 1.0
    *
    * https://library.sannybuilder.com/#/vc?q=0423 */
    setTraction(traction: float): void;
    /** Disables the car from exploding when it is upside down, as long as the player is not in the vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=03ED */
    setUpsidedownNotDamaged(state: boolean): void;
    /** Makes the vehicle watertight, meaning characters inside will not be harmed if the vehicle is submerged in water
    *
    * https://library.sannybuilder.com/#/vc?q=039C */
    setWatertight(state: boolean): void;
    /** Sets whether the car's alarm can be activated
    *
    * https://library.sannybuilder.com/#/vc?q=0397 */
    switchSiren(state: boolean): void;
    /** Sets the car's heading so that it is facing the 2D coordinate
    *
    * https://library.sannybuilder.com/#/vc?q=039F */
    turnToFaceCoord(x: float, y: float): void;
    /** Clears any current tasks the vehicle has and makes it drive around aimlessly
    *
    * https://library.sannybuilder.com/#/vc?q=00A8 */
    wanderRandomly(): void;
}
/** Parking Lots
 * 
 * https://library.sannybuilder.com/#/vc/classes/CarGenerator */
declare class CarGenerator {
    constructor(handle: number);
    /** Initializes a parked car generator
    *
    * https://library.sannybuilder.com/#/vc?q=014B */
    static Create(x: float, y: float, z: float, heading: float, modelId: int, primaryColor: int, secondaryColor: int, forceSpawn: boolean, alarmChance: int, doorLockChance: int, minDelay: int, maxDelay: int): CarGenerator;
    /** Specifies the number of times the car generator spawns a car (101 - infinite)
    *
    * https://library.sannybuilder.com/#/vc?q=014C */
    switch(amount: int): void;
}
/** Script Characters (Actors)
 * 
 * https://library.sannybuilder.com/#/vc/classes/Char */
declare class Char {
    constructor(handle: number);
    /** Creates a character at the specified location, with the specified model and pedtype
    *
    * https://library.sannybuilder.com/#/vc?q=009A */
    static Create(pedType: int, modelId: int, x: float, y: float, z: float): Char;
    /** Creates a character with the specified model in the passenger seat of the vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=01C8 */
    static CreateAsPassenger(vehicle: Car, pedType: int, modelId: int, seatId: int): Char;
    /** Creates a character in the driver's seat of the vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=0129 */
    static CreateInsideCar(vehicle: Car, pedType: int, modelId: int): Char;
    /** Creates a character with a randomised model and pedtype at the specified coordinates
    *
    * https://library.sannybuilder.com/#/vc?q=0376 */
    static CreateRandom(x: float, y: float, z: float): Char;
    /** Creates a driver in the vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=0560 */
    static CreateRandomAsDriver(vehicle: Car): Char;
    /** Creates a random character in the passenger seat of the vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=0561 */
    static CreateRandomAsPassenger(vehicle: Car, seatId: int): Char;
    /** Returns true if the handle is a valid character handle
    *
    * https://library.sannybuilder.com/#/vc?q=056D */
    static DoesExist(handle: int): boolean;
    /** Returns true if the handle is an invalid character handle or the character is dead (wasted)
    *
    * https://library.sannybuilder.com/#/vc?q=0118 */
    static IsDead(handle: int): boolean;
    /** Sets a multiplier for the range of a character's ability to go and occupy a vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=0481 */
    static SetEnterCarRangeMultiplier(value: float): void;
    /** Sets a multiplier for the range of a character's ability to react on deadly events around
    *
    * https://library.sannybuilder.com/#/vc?q=0482 */
    static SetThreatReactionRangeMultiplier(value: float): void;
    /** Adds the specified amount of ammo to the character's weapon, if the character has the weapon
    *
    * https://library.sannybuilder.com/#/vc?q=0114 */
    addAmmo(weaponType: int, ammo: int): void;
    /** Increases the character's armor by the specified value to the maximum of 100.0
    *
    * https://library.sannybuilder.com/#/vc?q=035F */
    addArmor(amount: int): void;
    /** Puts character into a turret on the vehicle, allowing them to shoot
    *
    * https://library.sannybuilder.com/#/vc?q=0464 */
    attachToCar(vehicle: Car, xOffset: float, yOffset: float, zOffset: float, position: int, angleLimit: float, weaponType: int): void;
    /** Attaches the character to the specified object, in turret mode
    *
    * https://library.sannybuilder.com/#/vc?q=04F4 */
    attachToObject(handle: ScriptObject, xOffset: float, yOffset: float, zOffset: float, orientation: int, angleLimit: float, weaponType: int): void;
    /** Returns true if the character sees a dead body of the given type
    *
    * https://library.sannybuilder.com/#/vc?q=0480 */
    canSeeDeadChar(pedType: int): boolean;
    clearAllAnims(): void;
    /** Clears the character's follow path (009E)
    *
    * https://library.sannybuilder.com/#/vc?q=0549 */
    clearFollowPath(): void;
    /** Resets the information that the character has bought "ice cream"
    *
    * https://library.sannybuilder.com/#/vc?q=0584 */
    clearIceCreamPurchase(): void;
    clearLastDamageEntity(): void;
    /** Clears the character's last weapon damage (see 031D)
    *
    * https://library.sannybuilder.com/#/vc?q=0467 */
    clearLastWeaponDamage(): void;
    /** Resets character's hostility to other ped types (011A)
    *
    * https://library.sannybuilder.com/#/vc?q=01ED */
    clearThreatSearch(): void;
    /** Stops the idle animation on the character (0372)
    *
    * https://library.sannybuilder.com/#/vc?q=053D */
    clearWaitState(): void;
    /** Removes the character from the game and mission cleanup list, freeing game memory
    *
    * https://library.sannybuilder.com/#/vc?q=009B */
    delete(): void;
    /** Removes the character from turret mode (0464)
    *
    * https://library.sannybuilder.com/#/vc?q=0465 */
    detachFromCar(): void;
    /** Removes the character from the mission cleanup list, preventing it from being deleted when the mission ends
    *
    * https://library.sannybuilder.com/#/vc?q=01C5 */
    dontRemove(): void;
    /** Respawns the character using the model requested with 0352
    *
    * https://library.sannybuilder.com/#/vc?q=0353 */
    dress(): void;
    /** Dismembers the character
    *
    * https://library.sannybuilder.com/#/vc?q=0321 */
    explodeHead(): void;
    /** Sets the character's follow path
    *
    * https://library.sannybuilder.com/#/vc?q=009E */
    followPath(x: float, y: float, z: float, radius: float, moveState: int): void;
    /** Sets whether the character's position remains unchanged
    *
    * https://library.sannybuilder.com/#/vc?q=04D7 */
    freezePosition(state: boolean): void;
    /** Returns the character's armor amount
    *
    * https://library.sannybuilder.com/#/vc?q=04DD */
    getArmor(): int;
    /** Returns the character's coordinates
    *
    * https://library.sannybuilder.com/#/vc?q=00A0 */
    getCoordinates(): {
        x: float;
        y: float;
        z: float;
    };
    /** Returns the type of weapon that the character is currently holding
    *
    * https://library.sannybuilder.com/#/vc?q=0470 */
    getCurrentWeapon(): int;
    /** Returns the character's heading (z-angle)
    *
    * https://library.sannybuilder.com/#/vc?q=0172 */
    getHeading(): float;
    /** Returns the character's health
    *
    * https://library.sannybuilder.com/#/vc?q=0226 */
    getHealth(): int;
    /** Returns the number of members which are in a group of the character (01DE)
    *
    * https://library.sannybuilder.com/#/vc?q=046D */
    getNumberOfFollowers(): int;
    /** Returns the coordinates of the character, with an offset
    *
    * https://library.sannybuilder.com/#/vc?q=04C4 */
    getOffsetInWorldCoords(xOffset: float, yOffset: float, zOffset: float): {
        x: float;
        y: float;
        z: float;
    };
    /** Returns the weapon type, ammo and model from the specified slot
    *
    * https://library.sannybuilder.com/#/vc?q=04B8 */
    getWeaponInSlot(weaponSlotId: int): {
        weaponType: int;
        weaponAmmo: int;
        weaponModel: int;
    };
    /** Gives the character the weapon with the specified amount of ammo
    *
    * https://library.sannybuilder.com/#/vc?q=01B2 */
    giveWeapon(weaponType: int, ammo: int): void;
    /** Checks if the distribution ped has been attracted
    *
    * https://library.sannybuilder.com/#/vc?q=0586 */
    hasAttemptedAttractor(): boolean;
    /** Returns true if the character has been hurt by the other character
    *
    * https://library.sannybuilder.com/#/vc?q=051A */
    hasBeenDamagedByChar(handle: Char): boolean;
    /** Returns true if the character has been hit by the specified weapon
    *
    * https://library.sannybuilder.com/#/vc?q=031D */
    hasBeenDamagedByWeapon(weaponType: int): boolean;
    /** Returns true if the character has been photographed
    *
    * https://library.sannybuilder.com/#/vc?q=04C5 */
    hasBeenPhotographed(): boolean;
    /** Returns true if the character has bought "ice cream"
    *
    * https://library.sannybuilder.com/#/vc?q=058B */
    hasBoughtIceCream(): boolean;
    /** Returns true if the character has seen the specified player
    *
    * https://library.sannybuilder.com/#/vc?q=0123 */
    hasSpottedPlayer(player: Player): boolean;
    /** Returns true if the character is holding the given type of weapon
    *
    * https://library.sannybuilder.com/#/vc?q=02D8 */
    isCurrentWeapon(weaponType: int): boolean;
    /** Returns true if the character is taking damage from ocean water while on foot
    *
    * https://library.sannybuilder.com/#/vc?q=0521 */
    isDrowningInWater(): boolean;
    /** Returns true if the specified character is crouching
    *
    * https://library.sannybuilder.com/#/vc?q=0597 */
    isDucking(): boolean;
    /** Returns true if the character's health is over the specified value
    *
    * https://library.sannybuilder.com/#/vc?q=0184 */
    isHealthGreater(health: int): boolean;
    /** Returns true if the character has a vehicle, even if they are not actually sat inside it (opening and closing the door)
    *
    * https://library.sannybuilder.com/#/vc?q=00DF */
    isInAnyCar(): boolean;
    /** Returns true if the character is driving a police vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=056C */
    isInAnyPoliceVehicle(): boolean;
    /** Returns true if the character is within the specified 2D area
    *
    * https://library.sannybuilder.com/#/vc?q=00A3 */
    isInArea2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the specified 3D area
    *
    * https://library.sannybuilder.com/#/vc?q=00A4 */
    isInArea3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the specified 2D area in a vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=01A2 */
    isInAreaInCar2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the specified 3D area in a vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=01A7 */
    isInAreaInCar3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the specified 2D area on foot
    *
    * https://library.sannybuilder.com/#/vc?q=01A1 */
    isInAreaOnFoot2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the specified 3D area on foot
    *
    * https://library.sannybuilder.com/#/vc?q=01A6 */
    isInAreaOnFoot3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, drawSphere: boolean): boolean;
    /** Returns true if the character is in the specified vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=00DB */
    isInCar(vehicle: Car): boolean;
    /** Returns true if the character is part of the leader's group (01DE)
    *
    * https://library.sannybuilder.com/#/vc?q=031F */
    isInCharsGroup(leader: Char): boolean;
    /** Returns true if the character is driving a vehicle with the specified model
    *
    * https://library.sannybuilder.com/#/vc?q=00DD */
    isInModel(modelId: int): boolean;
    /** Returns true if the character is part of the leader's group (01DF)
    *
    * https://library.sannybuilder.com/#/vc?q=0320 */
    isInPlayersGroup(leader: Player): boolean;
    /** Returns true if the character is in water
    *
    * https://library.sannybuilder.com/#/vc?q=04AD */
    isInWater(): boolean;
    /** Returns true if the character is in the specified map zone
    *
    * https://library.sannybuilder.com/#/vc?q=0154 */
    isInZone(zone: string): boolean;
    isLeavingVehicleToDie(): boolean;
    /** Returns true if the character is male
    *
    * https://library.sannybuilder.com/#/vc?q=03A3 */
    isMale(): boolean;
    /** Returns true if the character's model ID is equivalent to the model ID passed
    *
    * https://library.sannybuilder.com/#/vc?q=02F2 */
    isModel(modelId: int): boolean;
    /** Returns true if the character has no objective (011C)
    *
    * https://library.sannybuilder.com/#/vc?q=04FF */
    isObjNoObj(): boolean;
    /** Returns true if the character has completed their objective
    *
    * https://library.sannybuilder.com/#/vc?q=0126 */
    isObjectivePassed(): boolean;
    /** Returns true if the character is driving a bike
    *
    * https://library.sannybuilder.com/#/vc?q=047A */
    isOnAnyBike(): boolean;
    /** Returns true if the character is on foot, and not occupying a vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=044B */
    isOnFoot(): boolean;
    /** Returns true if the character is visible
    *
    * https://library.sannybuilder.com/#/vc?q=02CB */
    isOnScreen(): boolean;
    /** Returns true if the character is firing a weapon
    *
    * https://library.sannybuilder.com/#/vc?q=02E0 */
    isShooting(): boolean;
    /** Returns true if the character is sitting in any vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=0449 */
    isSittingInAnyCar(): boolean;
    /** Returns true if the character is sitting in the specified vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=0448 */
    isSittingInCar(vehicle: Car): boolean;
    /** Returns true if the character stopped within the specified 2D area
    *
    * https://library.sannybuilder.com/#/vc?q=01A3 */
    isStoppedInArea2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, drawSphere: boolean): boolean;
    /** Returns true if the character stopped within the specified 3D area
    *
    * https://library.sannybuilder.com/#/vc?q=01A8 */
    isStoppedInArea3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, drawSphere: boolean): boolean;
    /** Returns true if the character stopped within the specified 2D area in a vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=01A5 */
    isStoppedInAreaInCar2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, drawSphere: boolean): boolean;
    /** Returns true if the character stopped within the specified 3D area in a vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=01AA */
    isStoppedInAreaInCar3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, drawSphere: boolean): boolean;
    /** Returns true if the character stopped within the specified 2D area on foot
    *
    * https://library.sannybuilder.com/#/vc?q=01A4 */
    isStoppedInAreaOnFoot2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, drawSphere: boolean): boolean;
    /** Returns true if the character stopped within the specified 3D area on foot
    *
    * https://library.sannybuilder.com/#/vc?q=01A9 */
    isStoppedInAreaOnFoot3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, drawSphere: boolean): boolean;
    isStuck(): boolean;
    isWaitingForWorldCollision(): boolean;
    isWanderPathClear(x: float, y: float, z: float, radius: float): boolean;
    /** Makes the character stop following the leader (01DE or 01DF)
    *
    * https://library.sannybuilder.com/#/vc?q=01E0 */
    leaveGroup(): void;
    /** Returns true if the character is within the 2D radius of the coordinates point
    *
    * https://library.sannybuilder.com/#/vc?q=00EC */
    locateAnyMeans2D(x: float, y: float, xRadius: float, yRadius: float, drawSphere: Sphere): boolean;
    /** Returns true if the character is within the 3D radius of the coordinates point
    *
    * https://library.sannybuilder.com/#/vc?q=00FE */
    locateAnyMeans3D(x: float, y: float, z: float, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 2D radius of the vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=0202 */
    locateAnyMeansCar2D(vehicle: Car, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 3D radius of the vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=0205 */
    locateAnyMeansCar3D(vehicle: Car, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 2D radius of the other character
    *
    * https://library.sannybuilder.com/#/vc?q=00F2 */
    locateAnyMeansChar2D(target: Char, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 3D radius of the other character
    *
    * https://library.sannybuilder.com/#/vc?q=0104 */
    locateAnyMeansChar3D(target: Char, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 2D radius of the object
    *
    * https://library.sannybuilder.com/#/vc?q=0471 */
    locateAnyMeansObject2D(object: ScriptObject, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 3D radius of the object
    *
    * https://library.sannybuilder.com/#/vc?q=0474 */
    locateAnyMeansObject3D(object: ScriptObject, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 2D radius of the coordinates point in a vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=00EE */
    locateInCar2D(x: float, y: float, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 3D radius of the coordinates point in a vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=0100 */
    locateInCar3D(x: float, y: float, z: float, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 2D radius of the vehicle in a vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=0204 */
    locateInCarCar2D(handle: Car, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 3D radius of the vehicle in a vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=0207 */
    locateInCarCar3D(vehicle: Car, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 2D radius of the other character in a vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=00F4 */
    locateInCarChar2D(otherChar: Char, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 3D radius of the other character in a vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=0106 */
    locateInCarChar3D(target: Char, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 2D radius of the object in a vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=0473 */
    locateInCarObject2D(object: ScriptObject, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 3D radius of the object in a vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=0476 */
    locateInCarObject3D(object: ScriptObject, xRadius: float, yRadius: float, zRadius: float, drawSphere: int): boolean;
    /** Returns true if the character is within the 2D radius of the coordinates point on foot
    *
    * https://library.sannybuilder.com/#/vc?q=00ED */
    locateOnFoot2D(x: float, y: float, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 3D radius of the coordinates point on foot
    *
    * https://library.sannybuilder.com/#/vc?q=00FF */
    locateOnFoot3D(x: float, y: float, z: float, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 2D radius of the vehicle on foot
    *
    * https://library.sannybuilder.com/#/vc?q=0203 */
    locateOnFootCar2D(vehicle: Car, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 3D radius of the vehicle on foot
    *
    * https://library.sannybuilder.com/#/vc?q=0206 */
    locateOnFootCar3D(vehicle: Car, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 2D radius of the other character on foot
    *
    * https://library.sannybuilder.com/#/vc?q=00F3 */
    locateOnFootChar2D(target: Char, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 3D radius of the other character on foot
    *
    * https://library.sannybuilder.com/#/vc?q=0105 */
    locateOnFootChar3D(target: Char, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 2D radius of the object on foot
    *
    * https://library.sannybuilder.com/#/vc?q=0472 */
    locateOnFootObject2D(object: ScriptObject, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 3D radius of the object on foot
    *
    * https://library.sannybuilder.com/#/vc?q=0475 */
    locateOnFootObject3D(object: ScriptObject, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character stopped within the 2D radius of the coordinates point
    *
    * https://library.sannybuilder.com/#/vc?q=00EF */
    locateStoppedAnyMeans2D(x: float, y: float, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character stopped within the 3D radius of the coordinates point
    *
    * https://library.sannybuilder.com/#/vc?q=0101 */
    locateStoppedAnyMeans3D(x: float, y: float, z: float, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character stopped within the 2D radius of the coordinates point in a vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=00F1 */
    locateStoppedInCar2D(x: float, y: float, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character stopped within the 3D radius of the coordinates point in a vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=0103 */
    locateStoppedInCar3D(x: float, y: float, z: float, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character stopped within the 2D radius of the coordinates point on foot
    *
    * https://library.sannybuilder.com/#/vc?q=00F0 */
    locateStoppedOnFoot2D(x: float, y: float, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character stopped within the 3D radius of the coordinates point on foot
    *
    * https://library.sannybuilder.com/#/vc?q=0102 */
    locateStoppedOnFoot3D(x: float, y: float, z: float, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Makes the character to keep looking at the direction of the other character
    *
    * https://library.sannybuilder.com/#/vc?q=022C */
    lookAtCharAlways(target: Char): void;
    /** Makes the character to keep looking at the direction of the player
    *
    * https://library.sannybuilder.com/#/vc?q=022D */
    lookAtPlayerAlways(target: Player): void;
    /** Allows the character to be deleted by the game if necessary, and also removes them from the mission cleanup list, if applicable
    *
    * https://library.sannybuilder.com/#/vc?q=01C2 */
    markAsNoLongerNeeded(): void;
    /** Sets the character to play a certain action
    *
    * https://library.sannybuilder.com/#/vc?q=0673 */
    playAnimation(groupId: int, animId: int, blend: float): void;
    /** Removes the characters weapons
    *
    * https://library.sannybuilder.com/#/vc?q=048F */
    removeAllWeapons(): void;
    /** Removes the character with a fade, freeing game memory
    *
    * https://library.sannybuilder.com/#/vc?q=034F */
    removeElegantly(): void;
    /** Affects how often the character will hit the target when attacking with a weapon
    *
    * https://library.sannybuilder.com/#/vc?q=02E2 */
    setAccuracy(accuracy: int): void;
    /** Sets the animation group for the character
    *
    * https://library.sannybuilder.com/#/vc?q=0245 */
    setAnimGroup(animGroup: int): void;
    setAnsweringMobile(state: boolean): void;
    /** Makes the character follow the leader player
    *
    * https://library.sannybuilder.com/#/vc?q=01DF */
    setAsLeader(leader: Player): void;
    /** Sets whether the character ignores the player's crimes
    *
    * https://library.sannybuilder.com/#/vc?q=04F5 */
    setAsPlayerFriend(player: Player, state: boolean): void;
    /** Makes a character bleed
    *
    * https://library.sannybuilder.com/#/vc?q=0332 */
    setBleeding(state: boolean): void;
    /** Sets the character be damageable by members of the gang
    *
    * https://library.sannybuilder.com/#/vc?q=0514 */
    setCanBeDamagedByMembersOfGang(gangId: int, state: boolean): void;
    /** Makes the character immune to a damage while in a vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=054A */
    setCanBeShotInVehicle(state: boolean): void;
    /** Locks the character while in a car
    *
    * https://library.sannybuilder.com/#/vc?q=039E */
    setCantBeDraggedOut(state: boolean): void;
    /** Sets the maximum time the character can withstand the damage
    *
    * https://library.sannybuilder.com/#/vc?q=0483 */
    setCeaseAttackTimer(timer: int): void;
    /** Puts the character at the specified location
    *
    * https://library.sannybuilder.com/#/vc?q=00A1 */
    setCoordinates(x: float, y: float, z: float): void;
    /** Makes the character crouch
    *
    * https://library.sannybuilder.com/#/vc?q=04EB */
    setCrouch(state: boolean, time: int): void;
    setCrouchWhenThreatened(state: boolean): void;
    /** Sets the character's currently held weapon
    *
    * https://library.sannybuilder.com/#/vc?q=01B9 */
    setCurrentWeapon(weaponType: int): void;
    /** Controls whether the character can drown in water
    *
    * https://library.sannybuilder.com/#/vc?q=04D8 */
    setDrownsInWater(state: boolean): void;
    setFrightenedInJackedCar(state: boolean): void;
    /** Sets the character's heading (z-angle)
    *
    * https://library.sannybuilder.com/#/vc?q=0173 */
    setHeading(heading: float): void;
    /** Sets the character's health
    *
    * https://library.sannybuilder.com/#/vc?q=0223 */
    setHealth(health: int): void;
    /** Makes the character attack whoever attacks them
    *
    * https://library.sannybuilder.com/#/vc?q=0291 */
    setHeedThreats(state: boolean): void;
    /** Sets the character's objective to stay idle
    *
    * https://library.sannybuilder.com/#/vc?q=009F */
    setIdle(): void;
    setIgnoreThreatsBehindObjects(state: boolean): void;
    /** Sets whether the char assists the player in attacking another character on foot
    *
    * https://library.sannybuilder.com/#/vc?q=053C */
    setInPlayersGroupCanFight(state: boolean): void;
    /** Sets whether the character is a psychotic killer or not
    *
    * https://library.sannybuilder.com/#/vc?q=0433 */
    setIsChrisCriminal(state: boolean): void;
    setLoadCollisionFlag(state: boolean): void;
    /** Sets the character's cash sum, setting how much cash they will drop when dead
    *
    * https://library.sannybuilder.com/#/vc?q=03FE */
    setMoney(amount: int): void;
    /** Sets whether the character won't be targeted by the autoaim system
    *
    * https://library.sannybuilder.com/#/vc?q=0568 */
    setNeverTargetted(state: boolean): void;
    /** Sets the character's objective to aim the current weapon at the target character
    *
    * https://library.sannybuilder.com/#/vc?q=04C6 */
    setObjAimGunAtChar(target: Char): void;
    /** Makes the character approach the distribution vehicle to buy "ice cream" and returns the status of this attempt
    *
    * https://library.sannybuilder.com/#/vc?q=0580 */
    setObjBuyIceCream(distributionCar: Car): int;
    /** Sets the character's objective to destroy the vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=01D9 */
    setObjDestroyCar(vehicle: Car): void;
    /** Sets the character's objective to destroy the object
    *
    * https://library.sannybuilder.com/#/vc?q=01D8 */
    setObjDestroyObject(handle: ScriptObject): void;
    /** Sets the character's objective to enter the vehicle as a driver
    *
    * https://library.sannybuilder.com/#/vc?q=01D5 */
    setObjEnterCarAsDriver(vehicle: Car): void;
    /** Sets the character's objective to enter the vehicle as a passenger
    *
    * https://library.sannybuilder.com/#/vc?q=01D4 */
    setObjEnterCarAsPassenger(vehicle: Car): void;
    /** Makes the character leave their car and run away from it
    *
    * https://library.sannybuilder.com/#/vc?q=046B */
    setObjFleeCar(vehicle: Car): void;
    /** Sets the character's objective to walk away forever and stay away from the target character
    *
    * https://library.sannybuilder.com/#/vc?q=01CF */
    setObjFleeCharOnFootAlways(target: Char): void;
    /** Sets the character's objective to run away
    *
    * https://library.sannybuilder.com/#/vc?q=0193 */
    setObjFleeOnFootTillSafe(): void;
    /** Sets the character's objective to walk away forever and stay away from the target player
    *
    * https://library.sannybuilder.com/#/vc?q=01D0 */
    setObjFleePlayerOnFootAlways(target: Player): void;
    /** Sets the character's objective to escape on foot and stay away from the target player until it is safe
    *
    * https://library.sannybuilder.com/#/vc?q=01CE */
    setObjFleePlayerOnFootTillSafe(target: Player): void;
    /** Sets the character's objective to follow along the specified route
    *
    * https://library.sannybuilder.com/#/vc?q=01E1 */
    setObjFollowRoute(routeId: int, mode: int): void;
    /** Sets the character's objective to walk towards the target character
    *
    * https://library.sannybuilder.com/#/vc?q=01D1 */
    setObjGotoCharOnFoot(target: Char): void;
    /** Sets the character's objective to walk at the specified location
    *
    * https://library.sannybuilder.com/#/vc?q=0211 */
    setObjGotoCoordOnFoot(x: float, y: float): void;
    /** Sets the character's objective to walk towards the target player
    *
    * https://library.sannybuilder.com/#/vc?q=01D2 */
    setObjGotoPlayerOnFoot(target: Player): void;
    /** Sets the character's objective to guard the specified location
    *
    * https://library.sannybuilder.com/#/vc?q=0194 */
    setObjGuardSpot(x: float, y: float, z: float): void;
    /** Sets the character's objective to hail a taxi
    *
    * https://library.sannybuilder.com/#/vc?q=0365 */
    setObjHailTaxi(): void;
    /** Sets the character's objective to attack the specified character
    *
    * https://library.sannybuilder.com/#/vc?q=01CB */
    setObjKillCharAnyMeans(target: Char): void;
    /** Sets the character's objective to attack the other character on foot
    *
    * https://library.sannybuilder.com/#/vc?q=01C9 */
    setObjKillCharOnFoot(target: Char): void;
    /** Sets the character's objective to attack the player
    *
    * https://library.sannybuilder.com/#/vc?q=01CC */
    setObjKillPlayerAnyMeans(target: Player): void;
    /** Sets the character's objective to attack the player on foot
    *
    * https://library.sannybuilder.com/#/vc?q=01CA */
    setObjKillPlayerOnFoot(target: Player): void;
    /** Sets the character's objective to leave the car they are in
    *
    * https://library.sannybuilder.com/#/vc?q=03E2 */
    setObjLeaveAnyCar(): void;
    /** Sets the character's objective to leave the vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=01D3 */
    setObjLeaveCar(vehicle: Car): void;
    /** Clears the character's current objective
    *
    * https://library.sannybuilder.com/#/vc?q=011C */
    setObjNoObj(): void;
    /** Sets the character's objective to run at the specified location
    *
    * https://library.sannybuilder.com/#/vc?q=0239 */
    setObjRunToCoord(x: float, y: float): void;
    /** Sets the character's objective to sprint at the location
    *
    * https://library.sannybuilder.com/#/vc?q=0502 */
    setObjSprintToCoord(x: float, y: float): void;
    /** Sets the character's objective to find any traffic vehicle nearby and take the driver's seat
    *
    * https://library.sannybuilder.com/#/vc?q=0377 */
    setObjStealAnyCar(): void;
    /** Sets the character's objective to stay idle on foot
    *
    * https://library.sannybuilder.com/#/vc?q=0192 */
    setObjWaitOnFoot(): void;
    /** Sets the character's objective to walk towards the target character
    *
    * https://library.sannybuilder.com/#/vc?q=04C2 */
    setObjWalkToChar(target: Char): void;
    /** Makes a character immune to everything except the player
    *
    * https://library.sannybuilder.com/#/vc?q=02A9 */
    setOnlyDamagedByPlayer(state: boolean): void;
    /** Sets the ped stat of the character
    *
    * https://library.sannybuilder.com/#/vc?q=0243 */
    setPersonality(pedstat: int): void;
    /** Sets the character's immunities
    *
    * https://library.sannybuilder.com/#/vc?q=02AB */
    setProofs(bulletProof: boolean, fireProof: boolean, explosionProof: boolean, collisionProof: boolean, meleeProof: boolean): void;
    /** Makes the character run
    *
    * https://library.sannybuilder.com/#/vc?q=0319 */
    setRunning(state: boolean): void;
    /** Moves the character from a passenger seat to the driver seat
    *
    * https://library.sannybuilder.com/#/vc?q=04F3 */
    setShuffleIntoDriversSeat(): void;
    /** Makes the character stay in the vehicle when it is jacked (characters let themselves get "kidnapped")
    *
    * https://library.sannybuilder.com/#/vc?q=0526 */
    setStayInCarWhenJacked(state: boolean): void;
    /** Makes the character maintain their position when attacked
    *
    * https://library.sannybuilder.com/#/vc?q=0350 */
    setStayInSamePlace(state: boolean): void;
    setStopShootDontSeekEntity(state: boolean): void;
    /** Sets whether the specified character is immune to headshots
    *
    * https://library.sannybuilder.com/#/vc?q=0446 */
    setSuffersCriticalHits(state: boolean): void;
    /** Sets the character's hostility to other ped types
    *
    * https://library.sannybuilder.com/#/vc?q=011A */
    setThreatSearch(pedThreat: int): void;
    /** Sets whether the character should follow paths set for pedestrians
    *
    * https://library.sannybuilder.com/#/vc?q=0411 */
    setUsePednodeSeek(state: boolean): void;
    /** Sets whether the character is visible or not
    *
    * https://library.sannybuilder.com/#/vc?q=0337 */
    setVisible(state: boolean): void;
    /** Puts the character in the idle state for the given period of time
    *
    * https://library.sannybuilder.com/#/vc?q=0372 */
    setWaitState(stateId: int, timeInMs: int): void;
    /** Sets the character ability to talk
    *
    * https://library.sannybuilder.com/#/vc?q=0489 */
    shutUp(state: boolean): void;
    /** Makes the character to stop looking at the other character (022C) or player (022D)
    *
    * https://library.sannybuilder.com/#/vc?q=022F */
    stopLooking(): void;
    /** Returns the current vehicle of the character and adds it to the mission cleanup list
    *
    * https://library.sannybuilder.com/#/vc?q=00D9 */
    storeCarIsIn(): Car;
    /** Returns the character's vehicle handle without marking it as used by the script, therefore allowing it to be deleted by the game at any time
    *
    * https://library.sannybuilder.com/#/vc?q=03C0 */
    storeCarIsInNoSave(): Car;
    /** Rotates the character to face the other character
    *
    * https://library.sannybuilder.com/#/vc?q=020E */
    turnToFaceChar(char: Char): void;
    /** Rotates the character to face the location
    *
    * https://library.sannybuilder.com/#/vc?q=01BE */
    turnToFaceCoord(x: float, y: float, z: float): void;
    /** Rotates the character to face the player
    *
    * https://library.sannybuilder.com/#/vc?q=020F */
    turnToFacePlayer(player: Player): void;
    /** Removes the character and requests a new special model to load
    *
    * https://library.sannybuilder.com/#/vc?q=0352 */
    undress(modelName: string): void;
    /** Sets the character's wander direction
    *
    * https://library.sannybuilder.com/#/vc?q=009C */
    wanderDir(direction: int): void;
    /** Pulls the character out of their car and places at the location
    *
    * https://library.sannybuilder.com/#/vc?q=0362 */
    warpFromCarToCoord(x: float, y: float, z: float): void;
    /** Puts the character in the specified vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=036A */
    warpIntoCar(vehicle: Car): void;
}
/** Basic operations to copy and paste data
 * 
 * https://library.sannybuilder.com/#/vc/classes/Clipboard */
interface Clipboard {
    ReadData(memory: int, size: int): void;
    WriteData(memory: int, size: int): void;
}
declare var Clipboard: Clipboard
/** Time Manipulation
 * 
 * https://library.sannybuilder.com/#/vc/classes/Clock */
interface Clock {
    /** Returns the time passed in milliseconds since the game started
    *
    * https://library.sannybuilder.com/#/vc?q=01BD */
    GetGameTimer(): int;
    /** Returns the number of minutes left until the clock matches the time specified
    *
    * https://library.sannybuilder.com/#/vc?q=00C1 */
    GetMinutesToTimeOfDay(hours: int, minutes: int): int;
    /** Returns the number of hours and minutes passed since midnight
    *
    * https://library.sannybuilder.com/#/vc?q=00BF */
    GetTimeOfDay(): {
        hours: int;
        minutes: int;
    };
    /** Restores the game time to the time when it was saved with 0253
    *
    * https://library.sannybuilder.com/#/vc?q=0254 */
    Restore(): void;
    /** Sets the current in-game time
    *
    * https://library.sannybuilder.com/#/vc?q=00C0 */
    SetTimeOfDay(hours: int, minutes: int): void;
    /** Sets the game to run at the specified speed
    *
    * https://library.sannybuilder.com/#/vc?q=015D */
    SetTimeScale(scale: float): void;
    /** Saves the current time in game
    *
    * https://library.sannybuilder.com/#/vc?q=0253 */
    Store(): void;
}
declare var Clock: Clock
/** End-Game Credits
 * 
 * https://library.sannybuilder.com/#/vc/classes/Credits */
interface Credits {
    /** Returns true if the credits have finished
    *
    * https://library.sannybuilder.com/#/vc?q=0436 */
    AreFinished(): boolean;
    /** Makes the credits scroll up the screen
    *
    * https://library.sannybuilder.com/#/vc?q=0434 */
    Start(): void;
    /** Stops the credits text from showing
    *
    * https://library.sannybuilder.com/#/vc?q=0435 */
    Stop(): void;
}
declare var Credits: Credits
/** Mission Cutscenes
 * 
 * https://library.sannybuilder.com/#/vc/classes/Cutscene */
interface Cutscene {
    /** Ends the current cutscene, freeing game memory
    *
    * https://library.sannybuilder.com/#/vc?q=02EA */
    Clear(): void;
    /** Creates an effect of a heli blowing up dust on the ground
    *
    * https://library.sannybuilder.com/#/vc?q=0598 */
    CreateDustEffectForHeli(heliObject: CutsceneObject, radius: float, density: int): void;
    DisableShadows(): void;
    /** Returns the time in milliseconds passed since the cutscene has started (02E7)
    *
    * https://library.sannybuilder.com/#/vc?q=02E8 */
    GetTime(): int;
    /** Returns true if the cutscene has finished
    *
    * https://library.sannybuilder.com/#/vc?q=02E9 */
    HasFinished(): boolean;
    /** Loads the data for the specified cutscene
    *
    * https://library.sannybuilder.com/#/vc?q=02E4 */
    Load(name: string): void;
    LoadUncompressedAnim(animation: string): void;
    /** Sets the cutscene animation to loop endlessly
    *
    * https://library.sannybuilder.com/#/vc?q=04BC */
    SetAnimToLoop(animName: string): void;
    /** Sets the position for a cutscene
    *
    * https://library.sannybuilder.com/#/vc?q=0244 */
    SetOffset(x: float, y: float, z: float): void;
    /** Starts the loaded cutscene (02E4)
    *
    * https://library.sannybuilder.com/#/vc?q=02E7 */
    Start(): void;
    /** Returns true if the cutscene was skipped
    *
    * https://library.sannybuilder.com/#/vc?q=056A */
    WasSkipped(): boolean;
}
declare var Cutscene: Cutscene
/** Cutscene Objects
 * 
 * https://library.sannybuilder.com/#/vc/classes/CutsceneObject */
declare class CutsceneObject {
    constructor(handle: number);
    /** Creates a new cutscene object with the model
    *
    * https://library.sannybuilder.com/#/vc?q=02E5 */
    static Create(modelId: int): CutsceneObject;
    /** Attaches the cutscene object to the cutscene character's bone
    *
    * https://library.sannybuilder.com/#/vc?q=0524 */
    attachToBone(char: CutsceneObject, boneId: int): void;
    /** Attaches the cutscene object to the cutscene character's frame
    *
    * https://library.sannybuilder.com/#/vc?q=0525 */
    attachToComponent(char: CutsceneObject, frameName: string): void;
    /** Attaches the cutscene object to the vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=054B */
    attachToVehicle(vehicle: Car): void;
    /** Sets the animation of the cutscene object
    *
    * https://library.sannybuilder.com/#/vc?q=02E6 */
    setAnim(animation: string): void;
}
/** Various Debugging Utilities
 * 
 * https://library.sannybuilder.com/#/vc/classes/Debugger */
interface Debugger {
    /** Disables the debug mode
    *
    * https://library.sannybuilder.com/#/vc?q=00C4 */
    Off(): void;
    /** Enables the debug mode
    *
    * https://library.sannybuilder.com/#/vc?q=00C3 */
    On(): void;
}
declare var Debugger: Debugger
/** Loading DLL files and finding exported functions
 * 
 * https://library.sannybuilder.com/#/vc/classes/DynamicLibrary */
declare class DynamicLibrary {
    constructor(handle: number);
    static Load(libraryFileName: string): DynamicLibrary;
    free(): void;
    getProcedure(procName: string): int;
}
/** Reading and writing files
 * 
 * https://library.sannybuilder.com/#/vc/classes/File */
declare class File {
    constructor(handle: number);
    /** Opens the file in the specified mode, sets the condition result to True if the open operation has been successful, or to False otherwise, and writes the file handle to the variable
    *
    * https://library.sannybuilder.com/#/vc?q=0A9A */
    static Open(filePathName: string, mode: int): File;
    /** Closes the file and frees the memory
    *
    * https://library.sannybuilder.com/#/vc?q=0A9B */
    close(): void;
    /** Gets the file size in bytes
    *
    * https://library.sannybuilder.com/#/vc?q=0A9C */
    getSize(): int;
    /** Returns true if the end of the specified file has been reached
    *
    * https://library.sannybuilder.com/#/vc?q=0AD6 */
    isEndReached(): boolean;
    /** Reads the specified number of bytes from the opened file and writes them to the memory region starting from the address of the destination variable
    *
    * https://library.sannybuilder.com/#/vc?q=0A9D */
    read(size: int): int;
    /** Reads data from the file into the buffer until either the end of buffer is reached, the newline character is read, or the end-of-file is reached, whichever comes first
    *
    * https://library.sannybuilder.com/#/vc?q=0AD7 */
    readString(buffer: string, size: int): boolean;
    scan(format: string, ...args: number[]): string;
    /** Sets the position of the file to the given offset from the origin
    *
    * https://library.sannybuilder.com/#/vc?q=0AD5 */
    seek(offset: int, origin: int): boolean;
    /** Copies the specified number of bytes of the memory region starting from the address of the source variable to the file
    *
    * https://library.sannybuilder.com/#/vc?q=0A9E */
    write(size: int, source: int): void;
    /** Writes a formatted string to the file
    *
    * https://library.sannybuilder.com/#/vc?q=0AD9 */
    writeFormattedString(format: string, ...args: number[]): void;
    /** Copies data from the source string to the file up to but not including the null character
    *
    * https://library.sannybuilder.com/#/vc?q=0AD8 */
    writeString(source: string): boolean;
}
/** File System operations such as copying or deleting files
 * 
 * https://library.sannybuilder.com/#/vc/classes/Fs */
interface Fs {
    /** Copies an existing directory to a new directory and returns true if the operation is successful
    *
    * https://library.sannybuilder.com/#/vc?q=0B05 */
    CopyDirectory(dirPath: string, newDirPath: string): boolean;
    /** Copies an existing file to a new file and returns true if the operation is successful
    *
    * https://library.sannybuilder.com/#/vc?q=0B04 */
    CopyFile(fileName: string, newFileName: string): boolean;
    /** Deletes a directory at the given path and returns true if the operation is successful
    *
    * https://library.sannybuilder.com/#/vc?q=0B01 */
    DeleteDirectory(dirPath: string, recursive: boolean): boolean;
    /** Deletes a file at the given path and returns true if the operation is successful
    *
    * https://library.sannybuilder.com/#/vc?q=0B00 */
    DeleteFile(fileName: string): boolean;
    /** Returns true if a file at the given path exists
    *
    * https://library.sannybuilder.com/#/vc?q=0AAB */
    DoesFileExist(path: string): boolean;
    /** Moves an existing directory and returns true if the operation is successful
    *
    * https://library.sannybuilder.com/#/vc?q=0B03 */
    MoveDirectory(dirPath: string, newDirPath: string): boolean;
    /** Moves an existing file and returns true if the operation is successful
    *
    * https://library.sannybuilder.com/#/vc?q=0B02 */
    MoveFile(fileName: string, newFileName: string): boolean;
    /** Sets the current working directory (cwd) to a predefined location with a value of 0 or 1, or to an arbitrary path with a string value
    *
    * https://library.sannybuilder.com/#/vc?q=0A99 */
    SetCurrentDirectory(path: int): void;
}
declare var Fs: Fs
/** Various 2D Effects (Shadows, Lights, Coronas, Particles)
 * 
 * https://library.sannybuilder.com/#/vc/classes/Fx */
interface Fx {
    /** Creates a gun flash particle effect
    *
    * https://library.sannybuilder.com/#/vc?q=058A */
    AddBigGunFlash(fromX: float, fromY: float, fromZ: float, toX: float, toY: float, toZ: float): void;
    /** Creates an explosion at the point
    *
    * https://library.sannybuilder.com/#/vc?q=020C */
    AddExplosion(x: float, y: float, z: float, type: int): void;
    /** Creates an explosion with no sound
    *
    * https://library.sannybuilder.com/#/vc?q=0565 */
    AddExplosionNoSound(x: float, y: float, z: float, type: int): void;
    /** Adds a moving particle effect
    *
    * https://library.sannybuilder.com/#/vc?q=039D */
    AddMovingParticleEffect(particle: int, x: float, y: float, z: float, strengthX: float, strengthY: float, strengthZ: float, scale: float, r: int, g: int, b: int, durationInMs: int): void;
    /** Creates a single particle at the specified coordinates
    *
    * https://library.sannybuilder.com/#/vc?q=0437 */
    CreateSingleParticle(type: int, x: float, y: float, z: float, strengthX: float, strengthY: float, strengthZ: float, scale: float): void;
    /** Displays a corona at the specified location
    *
    * https://library.sannybuilder.com/#/vc?q=024F */
    DrawCorona(x: float, y: float, z: float, size: float, coronaType: int, flareType: int, r: int, g: int, b: int): void;
    /** Draws a shadow in the current frame
    *
    * https://library.sannybuilder.com/#/vc?q=016F */
    DrawShadow(textureType: int, x: float, y: float, z: float, angle: float, size: float, intensity: int, r: int, g: int, b: int): void;
    /** Displays a corona with the lowered draw distance at the specified coordinates
    *
    * https://library.sannybuilder.com/#/vc?q=04D5 */
    DrawWeaponshopCorona(x: float, y: float, z: float, size: float, coronaType: int, flareType: int, r: int, g: int, b: int): void;
}
declare var Fx: Fx
/** Game State
 * 
 * https://library.sannybuilder.com/#/vc/classes/Game */
interface Game {
    /** Displays a screen prompting the player to save
    *
    * https://library.sannybuilder.com/#/vc?q=03D8 */
    ActivateSaveMenu(): void;
    /** Returns true if the player has used any of the cheats
    *
    * https://library.sannybuilder.com/#/vc?q=0445 */
    AreAnyCarCheatsActivated(): boolean;
    /** Returns true if the game uses metric measurements (meters instead of inches)
    *
    * https://library.sannybuilder.com/#/vc?q=0424 */
    AreMeasurementsInMeters(): boolean;
    /** Clears the ped type's hostility to other ped types
    *
    * https://library.sannybuilder.com/#/vc?q=03F2 */
    ClearThreatForPedType(type: int, threatMask: int): void;
    /** Creates a hidden package pickup at the location
    *
    * https://library.sannybuilder.com/#/vc?q=02EC */
    CreateCollectable(x: float, y: float, z: float): void;
    /** Terminates the active mission by executing its mission cleanup routine
    *
    * https://library.sannybuilder.com/#/vc?q=045C */
    FailCurrentMission(): void;
    /** Returns the number of hidden packages collected
    *
    * https://library.sannybuilder.com/#/vc?q=03E1 */
    GetCollectablesCollected(): int;
    /** Returns the version id of the game
    *
    * https://library.sannybuilder.com/#/vc?q=05E5 */
    GetVersion(): int;
    /** Returns true if the player has saved their game
    *
    * https://library.sannybuilder.com/#/vc?q=03D9 */
    HasSaveGameFinished(): boolean;
    /** Returns true if the current game is an Australian release
    *
    * https://library.sannybuilder.com/#/vc?q=059A */
    IsAustralian(): boolean;
    /** Returns true if the game language is set to French
    *
    * https://library.sannybuilder.com/#/vc?q=040B */
    IsFrench(): boolean;
    /** Returns true if the game language is set to German
    *
    * https://library.sannybuilder.com/#/vc?q=040C */
    IsGerman(): boolean;
    /** Returns true on PC versions of the game
    *
    * https://library.sannybuilder.com/#/vc?q=0485 */
    IsPcVersion(): boolean;
    /** Returns true if the game version is vanilla 1.0
    *
    * https://library.sannybuilder.com/#/vc?q=0AA9 */
    IsVersionOriginal(): boolean;
    /** Sets whether all cars receive damage
    *
    * https://library.sannybuilder.com/#/vc?q=03F4 */
    SetAllCarsCanBeDamaged(state: boolean): void;
    /** Toggles whether all taxis have nitrous
    *
    * https://library.sannybuilder.com/#/vc?q=0572 */
    SetAllTaxisHaveNitro(state: boolean): void;
    /** Makes the two characters chat for the specified period of time
    *
    * https://library.sannybuilder.com/#/vc?q=03F9 */
    SetCharsChatting(char1: Char, char2: Char, duration: int): void;
    /** Sets the total number of hidden packages to collect
    *
    * https://library.sannybuilder.com/#/vc?q=02ED */
    SetCollectableTotal(amount: int): void;
    /** Makes pedestrians pay no attention to the player
    *
    * https://library.sannybuilder.com/#/vc?q=03BF */
    SetEveryoneIgnorePlayer(handle: Player, state: boolean): void;
    /** Defines whether the player can respray their car for free
    *
    * https://library.sannybuilder.com/#/vc?q=0335 */
    SetFreeResprays(state: boolean): void;
    /** Greys out the radar
    *
    * https://library.sannybuilder.com/#/vc?q=057E */
    SetIsInStadium(state: boolean): void;
    /** Sets the maximum wanted level the player can receive
    *
    * https://library.sannybuilder.com/#/vc?q=01F0 */
    SetMaxWantedLevel(wantedLevel: int): void;
    /** Sets the riot sound volume level (0-127)
    *
    * https://library.sannybuilder.com/#/vc?q=0552 */
    SetRiotIntensity(level: int): void;
    /** Sets the ped type's hostility to other ped types
    *
    * https://library.sannybuilder.com/#/vc?q=03F1 */
    SetThreatForPedType(type: int, threatMask: int): void;
    /** Sets sensitivity to crime, changing how many crimes a player can commit before police begin to pursue
    *
    * https://library.sannybuilder.com/#/vc?q=03C7 */
    SetWantedMultiplier(multiplier: float): void;
}
declare var Game: Game
/** Gangs Configuration
 * 
 * https://library.sannybuilder.com/#/vc/classes/Gang */
interface Gang {
    /** Forces members of the specified gang to act as law enforcement towards the player
    *
    * https://library.sannybuilder.com/#/vc?q=0592 */
    SetAttackPlayerWithCops(gangId: int, state: boolean): void;
    /** Sets the car used by members of the specified gang
    *
    * https://library.sannybuilder.com/#/vc?q=0236 */
    SetCarModel(gangId: int, modelId: int): void;
    /** Sets the models used by members of the specified gang
    *
    * https://library.sannybuilder.com/#/vc?q=0235 */
    SetPedModels(gangId: int, modelId1: int, modelId2: int): void;
    /** Sets the weapons that the specified gang can use
    *
    * https://library.sannybuilder.com/#/vc?q=0237 */
    SetWeapons(gangId: int, weaponType1: int, weaponType2: int): void;
}
declare var Gang: Gang
/** Garages
 * 
 * https://library.sannybuilder.com/#/vc/classes/Garage */
declare class Garage {
    constructor(handle: number);
    /** Creates a garage at the specified coordinates
    *
    * https://library.sannybuilder.com/#/vc?q=0219 */
    static Create(leftBottomX: float, leftBottomY: float, leftBottomZ: float, frontX: float, frontY: float, rightTopX: float, rightTopY: float, rightTopZ: float, type: int): Garage;
    /** Sets the garage's type
    *
    * https://library.sannybuilder.com/#/vc?q=02FA */
    changeType(type: int): void;
    /** Closes the garage
    *
    * https://library.sannybuilder.com/#/vc?q=0361 */
    close(): void;
    /** Returns true if the player's car has been resprayed by the garage
    *
    * https://library.sannybuilder.com/#/vc?q=0329 */
    hasResprayHappened(): boolean;
    /** Returns true if the import garage has collected a vehicle from the predefined list
    *
    * https://library.sannybuilder.com/#/vc?q=03D4 */
    hasSlotBeenFilled(importSlot: int): boolean;
    /** Returns true if a vehicle is in the garage
    *
    * https://library.sannybuilder.com/#/vc?q=021C */
    isCarInMission(): boolean;
    /** Returns true if the garage's door is closed
    *
    * https://library.sannybuilder.com/#/vc?q=03B1 */
    isClosed(): boolean;
    /** Returns true if the garage's door is open
    *
    * https://library.sannybuilder.com/#/vc?q=03B0 */
    isOpen(): boolean;
    /** Disables special camera when in the garage
    *
    * https://library.sannybuilder.com/#/vc?q=03DA */
    noSpecialCameraForThisGarage(): void;
    /** Opens the garage
    *
    * https://library.sannybuilder.com/#/vc?q=0360 */
    open(): void;
    /** Sets the maximum number of vehicles for a save garage to open
    *
    * https://library.sannybuilder.com/#/vc?q=057A */
    setMaximumNumberOfCars(max: int): void;
    /** Sets the garage door to swing open instead of slide open
    *
    * https://library.sannybuilder.com/#/vc?q=03BB */
    setRotatingDoor(): void;
    /** Sets the garage to only accept the specified vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=021B */
    setTargetCarForMission(vehicle: Car): void;
}
/** Game UI
 * 
 * https://library.sannybuilder.com/#/vc/classes/Hud */
interface Hud {
    /** Returns true if the wanted stars are flashing (normally after visiting a Pay'n'Spray)
    *
    * https://library.sannybuilder.com/#/vc?q=057B */
    AreWantedStarsFlashing(): boolean;
    /** Removes the onscreen counter (0150 or 03C4)
    *
    * https://library.sannybuilder.com/#/vc?q=0151 */
    ClearCounter(counter: int): void;
    /** Removes the onscreen timer
    *
    * https://library.sannybuilder.com/#/vc?q=014F */
    ClearTimer(timer: int): void;
    /** Displays an onscreen counter, either shown in numbers or as a bar
    *
    * https://library.sannybuilder.com/#/vc?q=0150 */
    DisplayCounter(counter: int, display: int): void;
    /** Displays an onscreen counter with the text, either shown in numbers or as a bar
    *
    * https://library.sannybuilder.com/#/vc?q=03C4 */
    DisplayCounterWithString(counter: int, display: int, text: string): void;
    /** Displays an onscreen counter with the text in the specified slot, either shown in numbers or as a bar
    *
    * https://library.sannybuilder.com/#/vc?q=04F7 */
    DisplayNthCounterWithString(counter: int, direction: int, slot: int, text: string): void;
    /** Displays or hides the radar
    *
    * https://library.sannybuilder.com/#/vc?q=0581 */
    DisplayRadar(state: boolean): void;
    /** Creates a countdown or countup onscreen timer
    *
    * https://library.sannybuilder.com/#/vc?q=014E */
    DisplayTimer(timer: int, direction: int): void;
    /** Creates a countdown or countup onscreen timer with the text
    *
    * https://library.sannybuilder.com/#/vc?q=03C3 */
    DisplayTimerWithString(timer: int, direction: int, text: string): void;
    /** Draws a box at the specified screen X and Y position, with the specified size and RGBA colors
    *
    * https://library.sannybuilder.com/#/vc?q=038E */
    DrawRect(x: float, y: float, width: float, height: float, r: int, g: int, b: int, a: int): void;
    /** Draws a loaded texture (038F) at the specified on-screen X and Y coordinates, with the specified size and RGBA color
    *
    * https://library.sannybuilder.com/#/vc?q=038D */
    DrawSprite(memorySlot: int, offsetLeft: float, offsetTop: float, width: float, height: float, r: int, g: int, b: int, a: int): void;
    /** Makes a specific part of the HUD disappear and reappear several times
    *
    * https://library.sannybuilder.com/#/vc?q=03E7 */
    FlashObject(object: int): void;
    /** Makes the on-screen timer stop updating
    *
    * https://library.sannybuilder.com/#/vc?q=0396 */
    FreezeTimer(state: boolean): void;
    /** Loads the specified splash screen
    *
    * https://library.sannybuilder.com/#/vc?q=044D */
    LoadSplash(txdName: string): void;
    /** Causes the next texture to be drawn (038D) before the fade is drawn
    *
    * https://library.sannybuilder.com/#/vc?q=03E3 */
    SetSpritesDrawBeforeFade(state: boolean): void;
    /** Enables widescreen
    *
    * https://library.sannybuilder.com/#/vc?q=02A3 */
    SwitchWidescreen(state: boolean): void;
}
declare var Hud: Hud
/** Reading and writing .ini files
 * 
 * https://library.sannybuilder.com/#/vc/classes/IniFile */
interface IniFile {
    /** Reads a floating-point value from the ini file
    *
    * https://library.sannybuilder.com/#/vc?q=0AF2 */
    ReadFloat(path: string, section: string, key: string): float;
    /** Reads an integer value from the ini file
    *
    * https://library.sannybuilder.com/#/vc?q=0AF0 */
    ReadInt(path: string, section: string, key: string): int;
    /** Reads a string value from the ini file
    *
    * https://library.sannybuilder.com/#/vc?q=0AF4 */
    ReadString(path: string, section: string, key: string): string;
    /** Writes the floating-point value to the ini file
    *
    * https://library.sannybuilder.com/#/vc?q=0AF3 */
    WriteFloat(value: float, path: string, section: string, key: string): void;
    /** Writes the integer value to the ini file
    *
    * https://library.sannybuilder.com/#/vc?q=0AF1 */
    WriteInt(value: int, path: string, section: string, key: string): void;
    /** Writes the string value to the ini file
    *
    * https://library.sannybuilder.com/#/vc?q=0AF5 */
    WriteString(value: string, path: string, section: string, key: string): void;
}
declare var IniFile: IniFile
/** Rampages Logic
 * 
 * https://library.sannybuilder.com/#/vc/classes/KillFrenzy */
interface KillFrenzy {
    /** Returns the status of the current rampage
    *
    * https://library.sannybuilder.com/#/vc?q=01FA */
    ReadStatus(): int;
    /** Starts a rampage
    *
    * https://library.sannybuilder.com/#/vc?q=01F9 */
    Start(text: string, weaponType: int, timeInMs: int, targetsNum: int, targetModel1: int, targetModel2: int, targetModel3: int, targetModel4: int, betaSoundsAndMessages: boolean): void;
}
declare var KillFrenzy: KillFrenzy
/** Math and Conversion Utilities
 * 
 * https://library.sannybuilder.com/#/vc/classes/Math */
interface Math {
    // https://github.com/microsoft/TypeScript/blob/f3cc8684997d2c5708c344d909691636c355612b/lib/lib.es5.d.ts#L617
    // Copyright (c) Microsoft Corporation. All rights reserved.
    /** The mathematical constant e. This is Euler's number, the base of natural logarithms. */
    readonly E: number;
    /** The natural logarithm of 10. */
    readonly LN10: number;
    /** The natural logarithm of 2. */
    readonly LN2: number;
    /** The base-2 logarithm of e. */
    readonly LOG2E: number;
    /** The base-10 logarithm of e. */
    readonly LOG10E: number;
    /** Pi. This is the ratio of the circumference of a circle to its diameter. */
    readonly PI: number;
    /** The square root of 0.5, or, equivalently, one divided by the square root of 2. */
    readonly SQRT1_2: number;
    /** The square root of 2. */
    readonly SQRT2: number;
    /**
    * Returns the absolute value of a number (the value without regard to whether it is positive or negative).
    * For example, the absolute value of -5 is the same as the absolute value of 5.
    * @param x A numeric expression for which the absolute value is needed.
    */
    abs(x: number): number;
    /**
    * Returns the arc cosine (or inverse cosine) of a number.
    * @param x A numeric expression.
    */
    acos(x: number): number;
    /**
    * Returns the arcsine of a number.
    * @param x A numeric expression.
    */
    asin(x: number): number;
    /**
    * Returns the arctangent of a number.
    * @param x A numeric expression for which the arctangent is needed.
    */
    atan(x: number): number;
    /**
    * Returns the angle (in radians) from the X axis to a point.
    * @param y A numeric expression representing the cartesian y-coordinate.
    * @param x A numeric expression representing the cartesian x-coordinate.
    */
    atan2(y: number, x: number): number;
    /**
    * Returns the smallest integer greater than or equal to its numeric argument.
    * @param x A numeric expression.
    */
    ceil(x: number): number;
    /**
    * Returns the cosine of a number.
    * @param x A numeric expression that contains an angle measured in radians.
    */
    cos(x: number): number;
    /**
    * Returns e (the base of natural logarithms) raised to a power.
    * @param x A numeric expression representing the power of e.
    */
    exp(x: number): number;
    /**
    * Returns the greatest integer less than or equal to its numeric argument.
    * @param x A numeric expression.
    */
    floor(x: number): number;
    /**
    * Returns the natural logarithm (base e) of a number.
    * @param x A numeric expression.
    */
    log(x: number): number;
    /**
    * Returns the larger of a set of supplied numeric expressions.
    * @param values Numeric expressions to be evaluated.
    */
    max(...values: number[]): number;
    /**
    * Returns the smaller of a set of supplied numeric expressions.
    * @param values Numeric expressions to be evaluated.
    */
    min(...values: number[]): number;
    /**
    * Returns the value of a base expression taken to a specified power.
    * @param x The base value of the expression.
    * @param y The exponent value of the expression.
    */
    pow(x: number, y: number): number;
    /** Returns a pseudorandom number between 0 and 1. */
    random(): number;
    /**
    * Returns a supplied numeric expression rounded to the nearest integer.
    * @param x The value to be rounded to the nearest integer.
    */
    round(x: number): number;
    /**
    * Returns the sine of a number.
    * @param x A numeric expression that contains an angle measured in radians.
    */
    sin(x: number): number;
    /**
    * Returns the square root of a number.
    * @param x A numeric expression.
    */
    sqrt(x: number): number;
    /**
    * Returns the tangent of a number.
    * @param x A numeric expression that contains an angle measured in radians.
    */
    tan(x: number): number;
    /** Returns the result of converting meters to feet
    *
    * https://library.sannybuilder.com/#/vc?q=042D */
    ConvertMetersToFeet(meters: int): int;
    /** Gets the distance between two points
    *
    * https://library.sannybuilder.com/#/vc?q=0509 */
    GetDistanceBetweenCoords2D(fromX: float, fromY: float, toX: float, toZ: float): float;
    /** Gets the distance between two points
    *
    * https://library.sannybuilder.com/#/vc?q=050A */
    GetDistanceBetweenCoords3D(fromX: float, fromY: float, fromZ: float, toX: float, toY: float, toZ: float): float;
    /** Returns a random float between the specified ranges
    *
    * https://library.sannybuilder.com/#/vc?q=0208 */
    RandomFloatInRange(min: float, max: float): float;
    /** Returns a random integer between the specified ranges
    *
    * https://library.sannybuilder.com/#/vc?q=0209 */
    RandomIntInRange(min: int, max: int): int;
}
declare var Math: Math
/** Process Memory Manipulation
 * 
 * https://library.sannybuilder.com/#/vc/classes/Memory */
interface Memory {
    /** Reads a floating-point value (IEEE 754) from the game memory 
    *
    * https://github.com/cleolibrary/CLEO-Redux/blob/master/using-memory.md */
    ReadFloat(address: int, vp: boolean): float;
    /** Writes a floating-point value (IEEE 754) to the game memory 
    *
    * https://github.com/cleolibrary/CLEO-Redux/blob/master/using-memory.md */
    WriteFloat(address: int, value: float, vp: boolean): void;
    /** Reads a 8-bit signed integer value from the game memory 
    *
    * https://github.com/cleolibrary/CLEO-Redux/blob/master/using-memory.md */
    ReadI8(address: int, vp: boolean): int;
    /** Reads a 16-bit signed integer value from the game memory 
    *
    * https://github.com/cleolibrary/CLEO-Redux/blob/master/using-memory.md */
    ReadI16(address: int, vp: boolean): int;
    /** Reads a 32-bit signed integer value from the game memory 
    *
    * https://github.com/cleolibrary/CLEO-Redux/blob/master/using-memory.md */
    ReadI32(address: int, vp: boolean): int;
    /** Reads a 8-bit unsigned integer value from the game memory 
    *
    * https://github.com/cleolibrary/CLEO-Redux/blob/master/using-memory.md */
    ReadU8(address: int, vp: boolean): int;
    /** Reads a 16-bit unsigned integer value from the game memory 
    *
    * https://github.com/cleolibrary/CLEO-Redux/blob/master/using-memory.md */
    ReadU16(address: int, vp: boolean): int;
    /** Reads a 32-bit unsigned integer value from the game memory 
    *
    * https://github.com/cleolibrary/CLEO-Redux/blob/master/using-memory.md */
    ReadU32(address: int, vp: boolean): int;
    /** Writes a 8-bit signed integer value to the game memory 
    *
    * https://github.com/cleolibrary/CLEO-Redux/blob/master/using-memory.md */
    WriteI8(address: int, value: int, vp: boolean): void;
    /** Writes a 16-bit signed integer value to the game memory 
    *
    * https://github.com/cleolibrary/CLEO-Redux/blob/master/using-memory.md */
    WriteI16(address: int, value: int, vp: boolean): void;
    /** Writes a 32-bit signed integer value to the game memory 
    *
    * https://github.com/cleolibrary/CLEO-Redux/blob/master/using-memory.md */
    WriteI32(address: int, value: int, vp: boolean): void;
    /** Writes a 8-bit unsigned integer value to the game memory 
    *
    * https://github.com/cleolibrary/CLEO-Redux/blob/master/using-memory.md */
    WriteU8(address: int, value: int, vp: boolean): void;
    /** Writes a 16-bit unsigned integer value to the game memory 
    *
    * https://github.com/cleolibrary/CLEO-Redux/blob/master/using-memory.md */
    WriteU16(address: int, value: int, vp: boolean): void;
    /** Writes a 32-bit unsigned integer value to the game memory 
    *
    * https://github.com/cleolibrary/CLEO-Redux/blob/master/using-memory.md */
    WriteU32(address: int, value: int, vp: boolean): void;

    /** Cast 32-bit signed integer value to floating-point value (IEEE 754) 
    *
    * https://github.com/cleolibrary/CLEO-Redux/blob/master/using-memory.md */
    ToFloat(value: int): float;
    /** Cast floating-point value (IEEE 754) to 32-bit signed integer value 
    *
    * https://github.com/cleolibrary/CLEO-Redux/blob/master/using-memory.md */
    FromFloat(value: float): int;
    /** Cast 8-bit signed integer value to unsigned integer value 
    *
    * https://github.com/cleolibrary/CLEO-Redux/blob/master/using-memory.md */
    ToU8(value: int): int;
    /** Cast 16-bit signed integer value to unsigned integer value 
    *
    * https://github.com/cleolibrary/CLEO-Redux/blob/master/using-memory.md */
    ToU16(value: int): int;
    /** Cast 32-bit signed integer value to unsigned integer value 
    *
    * https://github.com/cleolibrary/CLEO-Redux/blob/master/using-memory.md */
    ToU32(value: int): int;
    /** Cast 8-bit unsigned integer value to signed integer value 
    *
    * https://github.com/cleolibrary/CLEO-Redux/blob/master/using-memory.md */
    ToI8(value: int): int;
    /** Cast 16-bit unsigned integer value to signed integer value 
    *
    * https://github.com/cleolibrary/CLEO-Redux/blob/master/using-memory.md */
    ToI16(value: int): int;
    /** Cast 32-bit unsigned integer value to signed integer value 
    *
    * https://github.com/cleolibrary/CLEO-Redux/blob/master/using-memory.md */
    ToI32(value: int): int;
    /** Returns address of a function or variable, or 0 otherwise
    *
    * https://github.com/cleolibrary/CLEO-Redux/blob/master/using-memory.md */
    Translate(symbol: string): int;

    /** Convenience methods for invoking different types of functions */
    Fn: {
        /** Creates a new function to be called using "cdecl" calling convention
         * https://en.wikipedia.org/wiki/X86_calling_conventions#cdecl
         * @param address global address of the function
         * @returns a function accepting arguments and returning a 32-bit signed integer value as a result */
        Cdecl(address: int): (...funcParams: int[]) => int;
        /** Creates a new function to be called using "cdecl" calling convention
         * https://en.wikipedia.org/wiki/X86_calling_conventions#cdecl
         * @param address global address of the function
         * @returns a function accepting arguments and returning a floating-point value as a result */
        CdeclFloat(address: int): (...funcParams: int[]) => float;
        /** Creates a new function to be called using "cdecl" calling convention
         * https://en.wikipedia.org/wiki/X86_calling_conventions#cdecl
         * @param address global address of the function
         * @returns a function accepting arguments and returning a 8-bit signed integer value as a result */
        CdeclI8(address: int): (...funcParams: int[]) => int;
        /** Creates a new function to be called using "cdecl" calling convention
         * https://en.wikipedia.org/wiki/X86_calling_conventions#cdecl
         * @param address global address of the function
         * @returns a function accepting arguments and returning a 16-bit signed integer value as a result */
        CdeclI16(address: int): (...funcParams: int[]) => int;
        /** Creates a new function to be called using "cdecl" calling convention
         * https://en.wikipedia.org/wiki/X86_calling_conventions#cdecl
         * @param address global address of the function
         * @returns a function accepting arguments and returning a 32-bit signed integer value as a result */
        CdeclI32(address: int): (...funcParams: int[]) => int;
        /** Creates a new function to be called using "cdecl" calling convention
         * https://en.wikipedia.org/wiki/X86_calling_conventions#cdecl
         * @param address global address of the function
         * @returns a function accepting arguments and returning a 8-bit unsigned integer value as a result */
        CdeclU8(address: int): (...funcParams: int[]) => int;
        /** Creates a new function to be called using "cdecl" calling convention
         * https://en.wikipedia.org/wiki/X86_calling_conventions#cdecl
         * @param address global address of the function
         * @returns a function accepting arguments and returning a 16-bit unsigned integer value as a result */
        CdeclU16(address: int): (...funcParams: int[]) => int;
        /** Creates a new function to be called using "cdecl" calling convention
         * https://en.wikipedia.org/wiki/X86_calling_conventions#cdecl
         * @param address global address of the function
         * @returns a function accepting arguments and returning a 32-bit unsigned integer value as a result */
        CdeclU32(address: int): (...funcParams: int[]) => int;

        /** Creates a new function to be called using "stdcall"  calling convention
         * https://en.wikipedia.org/wiki/X86_calling_conventions#stdcall
         * @param address global address of the function
         * @returns a function accepting arguments and returning a 32-bit signed integer value as a result */
        Stdcall(address: int): (...funcParams: int[]) => int;
        /** Creates a new function to be called using "stdcall"  calling convention
         * https://en.wikipedia.org/wiki/X86_calling_conventions#stdcall
         * @param address global address of the function
         * @returns a function accepting arguments and returning a floating-point value as a result */
        StdcallFloat(address: int): (...funcParams: int[]) => float;
        /** Creates a new function to be called using "stdcall"  calling convention
         * https://en.wikipedia.org/wiki/X86_calling_conventions#stdcall
         * @param address global address of the function
         * @returns a function accepting arguments and returning a 8-bit signed integer value as a result */
        StdcallI8(address: int): (...funcParams: int[]) => int;
        /** Creates a new function to be called using "stdcall"  calling convention
         * https://en.wikipedia.org/wiki/X86_calling_conventions#stdcall
         * @param address global address of the function
         * @returns a function accepting arguments and returning a 16-bit signed integer value as a result */
        StdcallI16(address: int): (...funcParams: int[]) => int;
        /** Creates a new function to be called using "stdcall"  calling convention
         * https://en.wikipedia.org/wiki/X86_calling_conventions#stdcall
         * @param address global address of the function
         * @returns a function accepting arguments and returning a 32-bit signed integer value as a result */
        StdcallI32(address: int): (...funcParams: int[]) => int;
        /** Creates a new function to be called using "stdcall"  calling convention
         * https://en.wikipedia.org/wiki/X86_calling_conventions#stdcall
         * @param address global address of the function
         * @returns a function accepting arguments and returning a 8-bit unsigned integer value as a result */
        StdcallU8(address: int): (...funcParams: int[]) => int;
        /** Creates a new function to be called using "stdcall"  calling convention
         * https://en.wikipedia.org/wiki/X86_calling_conventions#stdcall
         * @param address global address of the function
         * @returns a function accepting arguments and returning a 16-bit unsigned integer value as a result */
        StdcallU16(address: int): (...funcParams: int[]) => int;
        /** Creates a new function to be called using "stdcall"  calling convention
         * https://en.wikipedia.org/wiki/X86_calling_conventions#stdcall
         * @param address global address of the function
         * @returns a function accepting arguments and returning a 32-bit unsigned integer value as a result */
        StdcallU32(address: int): (...funcParams: int[]) => int;

        /** Creates a new function to be called using "thiscall" calling convention
         * https://en.wikipedia.org/wiki/X86_calling_conventions#thiscall
         * It's also known as a class method call
         * @param address global address of the method
         * @param struct global address of the object whose method is being called
         * @returns a function accepting arguments and returning a 32-bit signed integer value as a result */
        Thiscall(address: int, struct: int): (...funcParams: int[]) => int;
        /** Creates a new function to be called using "thiscall" calling convention
         * https://en.wikipedia.org/wiki/X86_calling_conventions#thiscall
         * It's also known as a class method call
         * @param address global address of the method
         * @param struct global address of the object whose method is being called
         * @returns a function accepting arguments and returning a floating-point value as a result */
        ThiscallFloat(address: int, struct: int): (...funcParams: int[]) => float;
        /** Creates a new function to be called using "thiscall" calling convention
         * https://en.wikipedia.org/wiki/X86_calling_conventions#thiscall
         * It's also known as a class method call
         * @param address global address of the method
         * @param struct global address of the object whose method is being called
         * @returns a function accepting arguments and returning a 8-bit signed integer value as a result */
        ThiscallI8(address: int, struct: int): (...funcParams: int[]) => int;
        /** Creates a new function to be called using "thiscall" calling convention
         * https://en.wikipedia.org/wiki/X86_calling_conventions#thiscall
         * It's also known as a class method call
         * @param address global address of the method
         * @param struct global address of the object whose method is being called
         * @returns a function accepting arguments and returning a 16-bit signed integer value as a result */
        ThiscallI16(address: int, struct: int): (...funcParams: int[]) => int;
        /** Creates a new function to be called using "thiscall" calling convention
         * https://en.wikipedia.org/wiki/X86_calling_conventions#thiscall
         * It's also known as a class method call
         * @param address global address of the method
         * @param struct global address of the object whose method is being called
         * @returns a function accepting arguments and returning a 32-bit signed integer value as a result */
        ThiscallI32(address: int, struct: int): (...funcParams: int[]) => int;
        /** Creates a new function to be called using "thiscall" calling convention
         * https://en.wikipedia.org/wiki/X86_calling_conventions#thiscall
         * It's also known as a class method call
         * @param address global address of the method
         * @param struct global address of the object whose method is being called
         * @returns a function accepting arguments and returning a 8-bit unsigned integer value as a result */
        ThiscallU8(address: int, struct: int): (...funcParams: int[]) => int;
        /** Creates a new function to be called using "thiscall" calling convention
         * https://en.wikipedia.org/wiki/X86_calling_conventions#thiscall
         * It's also known as a class method call
         * @param address global address of the method
         * @param struct global address of the object whose method is being called
         * @returns a function accepting arguments and returning a 16-bit unsigned integer value as a result */
        ThiscallU16(address: int, struct: int): (...funcParams: int[]) => int;
        /** Creates a new function to be called using "thiscall" calling convention
         * https://en.wikipedia.org/wiki/X86_calling_conventions#thiscall
         * It's also known as a class method call
         * @param address global address of the method
         * @param struct global address of the object whose method is being called
         * @returns a function accepting arguments and returning a 32-bit unsigned integer value as a result */
        ThiscallU32(address: int, struct: int): (...funcParams: int[]) => int;
    }
    /** Allocates a chunk of memory of the given size and stores its address to the variable
    *
    * https://library.sannybuilder.com/#/vc?q=0AC8 */
    Allocate(size: int): int;
    /** Calls a function at the address with the given arguments and the calling convention defined by the pop parameter where 0 means 'stdcall' and a value equal to numParams means  'cdecl'
    *
    * https://library.sannybuilder.com/#/vc?q=0AA5 */
    CallFunction(address: int, numParams: int, pop: int, ...funcParams: number[]): void;
    /** Calls a function similarly to 0AA5 and writes the result into the variable following the arguments list
    *
    * https://library.sannybuilder.com/#/vc?q=0AA7 */
    CallFunctionReturn(address: int, numParams: int, pop: int, ...funcParams: number[]): int;
    /** Calls a method of the object (struct) with the given arguments and the 'thiscall' calling convention (pop is always 0)
    *
    * https://library.sannybuilder.com/#/vc?q=0AA6 */
    CallMethod(address: int, struct: int, numParams: int, pop: int, ...funcParams: number[]): void;
    /** Calls a method of the object (struct) similarly to 0AA6 and writes the result into the variable following the arguments list
    *
    * https://library.sannybuilder.com/#/vc?q=0AA8 */
    CallMethodReturn(address: int, struct: int, numParams: int, pop: int, ...funcParams: number[]): int;
    /** Frees the memory allocated with 0AC8
    *
    * https://library.sannybuilder.com/#/vc?q=0AC9 */
    Free(address: int): void;
    /** Stores the absolute address of a code location marked with the label
    *
    * https://library.sannybuilder.com/#/vc?q=0AC6 */
    GetLabelPointer(_: int): int;
    /** Gets the address of the object struct in the game memory by its handle
    *
    * https://library.sannybuilder.com/#/vc?q=0A98 */
    GetObjectPointer(object: ScriptObject): int;
    /** Gets the corresponding handle of the object located at the given address in memory
    *
    * https://library.sannybuilder.com/#/vc?q=0AEC */
    GetObjectRef(address: int): ScriptObject;
    /** Gets the address of the ped struct in the game memory by its handle
    *
    * https://library.sannybuilder.com/#/vc?q=0A96 */
    GetPedPointer(char: Char): int;
    /** Gets the corresponding handle of the char located at the given address in memory
    *
    * https://library.sannybuilder.com/#/vc?q=0AEA */
    GetPedRef(address: int): Char;
    /** Gets the address of a running script which name matches the given string or 0 otherwise
    *
    * https://library.sannybuilder.com/#/vc?q=0AAA */
    GetScriptStructNamed(scriptName: string): int;
    /** Gets the address of the current script structure in the game memory
    *
    * https://library.sannybuilder.com/#/vc?q=0A9F */
    GetThisScriptStruct(): int;
    /** Stores the absolute address of the variable
    *
    * https://library.sannybuilder.com/#/vc?q=0AC7 */
    GetVarPointer(_: int): int;
    /** Gets the address of the vehicle struct in the game memory by its handle
    *
    * https://library.sannybuilder.com/#/vc?q=0A97 */
    GetVehiclePointer(vehicle: Car): int;
    /** Gets the corresponding handle of the vehicle located at the given address in memory
    *
    * https://library.sannybuilder.com/#/vc?q=0AEB */
    GetVehicleRef(address: int): Car;
    PopFloat(): float;
    /** Reads a value from the game memory
    *
    * https://library.sannybuilder.com/#/vc?q=0A8D */
    Read(address: int, size: int, vp: boolean): int;
    SetOffset(address1: int, address2: int, vp: boolean): void;
    /** Writes a value to the game memory
    *
    * https://library.sannybuilder.com/#/vc?q=0A8C */
    Write(address: int, size: int, value: int, vp: boolean): void;
}
declare var Memory: Memory
/** Working with DLL files already loaded in memory
 * 
 * https://library.sannybuilder.com/#/vc/classes/MemoryLibrary */
declare class MemoryLibrary {
    constructor(handle: number);
    static Load(address: int): MemoryLibrary;
    free(): void;
    getProcedure(procName: string): int;
}
/** Pre-recorded script paths
 * 
 * https://library.sannybuilder.com/#/vc/classes/ObjectPath */
declare class ObjectPath {
    constructor(handle: number);
    /** Initialises a script path
    *
    * https://library.sannybuilder.com/#/vc?q=049C */
    static Initialise(pathId: int, width: float): ObjectPath;
    /** Removes the script path
    *
    * https://library.sannybuilder.com/#/vc?q=04A1 */
    clear(): void;
    /** Sets the distance along the script path
    *
    * https://library.sannybuilder.com/#/vc?q=049F */
    setPosition(position: float): void;
    /** Sets the speed of objects on the script path
    *
    * https://library.sannybuilder.com/#/vc?q=049E */
    setSpeed(speed: float): void;
    /** Attaches the object to the script path
    *
    * https://library.sannybuilder.com/#/vc?q=049D */
    start(object: ScriptObject): void;
}
/** Input Controls
 * 
 * https://library.sannybuilder.com/#/vc/classes/Pad */
interface Pad {
    /** Sets emulate and press pad's button
    *
    * https://library.sannybuilder.com/#/vc?q=0602 */
    EmulateButtonPressWithSensitivity(buttonId: int, sensitivity: int): void;
    /** Returns the controller mode
    *
    * https://library.sannybuilder.com/#/vc?q=0293 */
    GetControllerMode(): int;
    /** Returns the offset of the specified Left/Right, Up/Down, Look Left/Look Right and Look Up/Look Down keys
    *
    * https://library.sannybuilder.com/#/vc?q=0494 */
    GetPositionOfAnalogueSticks(pad: Pad): {
        leftStickX: int;
        leftStickY: int;
        rightStickX: int;
        rightStickY: int;
    };
    /** Returns true if the pad's button has been pressed
    *
    * https://library.sannybuilder.com/#/vc?q=00E1 */
    IsButtonPressed(pad: Pad, buttonId: int): boolean;
    /** Returns true if the pad's button is pressed with a certain sensitivity
    *
    * https://library.sannybuilder.com/#/vc?q=0601 */
    IsButtonPressedWithSensitivity(buttonId: int, sensitivity: int): boolean;
    /** Returns true if the attack button is being pressed
    *
    * https://library.sannybuilder.com/#/vc?q=0585 */
    IsInCarFireButtonPressed(): boolean;
    /** Returns true if the player is pressing a keyboard button with the specified code
    *
    * https://library.sannybuilder.com/#/vc?q=0AB0 */
    IsKeyPressed(keyCode: int): boolean;
    /** Affects the delay to the left and right steering while driving
    *
    * https://library.sannybuilder.com/#/vc?q=03FD */
    SetDrunkInputDelay(pad: Pad, delay: int): void;
    /** Returns true if the specified string of letters has been typed on the keyboard
    *
    * https://library.sannybuilder.com/#/vc?q=0ADC */
    TestCheat(input: string): boolean;
}
declare var Pad: Pad
/** Path Configuration And Lookup
 * 
 * https://library.sannybuilder.com/#/vc/classes/Path */
interface Path {
    /** Adds a new waypoint to the route with the specified id
    *
    * https://library.sannybuilder.com/#/vc?q=01E2 */
    AddRoutePoint(routeId: int, x: float, y: float, z: float): void;
    /** Returns the nearest path note from the specified coordinates that a vehicle can drive on
    *
    * https://library.sannybuilder.com/#/vc?q=02C1 */
    GetClosestCarNode(x: float, y: float, z: float): {
        nodeX: float;
        nodeY: float;
        nodeZ: float;
    };
    /** Returns the position and heading of the closest vehicle path node to the specified position
    *
    * https://library.sannybuilder.com/#/vc?q=03D3 */
    GetClosestCarNodeWithHeading(x: float, y: float, z: float): {
        nodeX: float;
        nodeY: float;
        nodeZ: float;
        angle: float;
    };
    /** Returns the nearest path node from the specified coordinates that a pedestrian can walk on
    *
    * https://library.sannybuilder.com/#/vc?q=02C0 */
    GetClosestCharNode(x: float, y: float, z: float): {
        nodeX: float;
        nodeY: float;
        nodeZ: float;
    };
    /** Gets two closest path nodes within the specified distance range
    *
    * https://library.sannybuilder.com/#/vc?q=04B9 */
    GetClosestStraightRoad(x: float, y: float, z: float, minDist: float, maxDist: float): {
        node1X: float;
        node1Y: float;
        node1Z: float;
        node2X: float;
        node2Y: float;
        node2Z: float;
        angle: float;
    };
    /** Gets the coordinates of the nth car path node closest to the given coordinates
    *
    * https://library.sannybuilder.com/#/vc?q=04D3 */
    GetNthClosestCarNode(fromX: float, fromY: float, fromZ: float, n: int): {
        x: float;
        y: float;
        z: float;
    };
    /** Clears all waypoints in the route with the specified id
    *
    * https://library.sannybuilder.com/#/vc?q=03AC */
    RemoveRoute(routeId: int): void;
    /** Forbids pedestrians to walk into the specified area
    *
    * https://library.sannybuilder.com/#/vc?q=022B */
    SwitchPedRoadsOff(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float): void;
    /** Allows pedestrians to walk into the specified area
    *
    * https://library.sannybuilder.com/#/vc?q=022A */
    SwitchPedRoadsOn(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float): void;
    /** Prevents cars from driving on roads in the specified 3D area
    *
    * https://library.sannybuilder.com/#/vc?q=01E8 */
    SwitchRoadsOff(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float): void;
    /** Allows cars to drive in the specified 3D area
    *
    * https://library.sannybuilder.com/#/vc?q=01E7 */
    SwitchRoadsOn(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float): void;
}
declare var Path: Path
/** Phone Booth Calls and Messages
 * 
 * https://library.sannybuilder.com/#/vc/classes/Phone */
declare class Phone {
    constructor(handle: number);
    /** Gets the phone at the specified X and Y coordinates
    *
    * https://library.sannybuilder.com/#/vc?q=024A */
    static Grab(x: float, y: float): Phone;
    /** Disables the phone from ringing
    *
    * https://library.sannybuilder.com/#/vc?q=024E */
    turnOff(): void;
    /** Makes the phone ringing
    *
    * https://library.sannybuilder.com/#/vc?q=0405 */
    turnOn(): void;
}
/** Interactive Script Objects
 * 
 * https://library.sannybuilder.com/#/vc/classes/Pickup */
declare class Pickup {
    constructor(handle: number);
    /** Creates a pickup with the given model and type
    *
    * https://library.sannybuilder.com/#/vc?q=0213 */
    static Create(modelId: int, pickupType: int, x: float, y: float, z: float): Pickup;
    /** Creates a clothing pickup at the location
    *
    * https://library.sannybuilder.com/#/vc?q=055B */
    static CreateClothes(x: float, y: float, z: float, type: int): Pickup;
    /** Creates an asset pickup for an asset which can be bought
    *
    * https://library.sannybuilder.com/#/vc?q=0518 */
    static CreateForSaleProperty(x: float, y: float, z: float, price: int, message: string): Pickup;
    /** Creates an asset icon for an asset that is not for sale
    *
    * https://library.sannybuilder.com/#/vc?q=0517 */
    static CreateLockedProperty(x: float, y: float, z: float, message: string): Pickup;
    /** Creates a money pickup with the specified cash value
    *
    * https://library.sannybuilder.com/#/vc?q=02E1 */
    static CreateMoney(x: float, y: float, z: float, cashAmount: int): Pickup;
    /** Creates an asset revenue pickup
    *
    * https://library.sannybuilder.com/#/vc?q=04A6 */
    static CreateProtection(x: float, y: float, z: float, revenueLimit: int, revenueRate: int): Pickup;
    /** Creates a weapon pickup, giving the player the specified amount of ammo when they pick it up
    *
    * https://library.sannybuilder.com/#/vc?q=032B */
    static CreateWithAmmo(modelId: int, pickupType: int, ammo: int, x: float, y: float, z: float): Pickup;
    /** Returns true if specified pickup has been collected
    *
    * https://library.sannybuilder.com/#/vc?q=0214 */
    hasBeenCollected(): boolean;
    /** Destroys the specified pickup, freeing game memory
    *
    * https://library.sannybuilder.com/#/vc?q=0215 */
    remove(): void;
}
/** The Main Character Controlled by a Player
 * 
 * https://library.sannybuilder.com/#/vc/classes/Player */
declare class Player {
    constructor(handle: number);
    /** Creates a player at the specified location
    *
    * https://library.sannybuilder.com/#/vc?q=0053 */
    static Create(modelId: int, x: float, y: float, z: float): Player;
    /** Returns the amount of times the player has destroyed a specific model
    *
    * https://library.sannybuilder.com/#/vc?q=0298 */
    static GetNumOfModelsKilled(modelId: int): int;
    /** Returns true if the handle is an invalid player handle or the player is dead (wasted)
    *
    * https://library.sannybuilder.com/#/vc?q=0117 */
    static IsDead(handle: int): boolean;
    /** Resets the count of how many times the player has destroyed a certain model (0298)
    *
    * https://library.sannybuilder.com/#/vc?q=0297 */
    static ResetNumOfModelsKilled(): void;
    static SetHasMetDebbieHarry(state: boolean): void;
    /** Increases the character's armour by the specified value to the maximum of 100.0
    *
    * https://library.sannybuilder.com/#/vc?q=035E */
    addArmour(amount: int): void;
    /** Adds to the player's money
    *
    * https://library.sannybuilder.com/#/vc?q=0109 */
    addScore(money: int): void;
    /** Sets the player's wanted level
    *
    * https://library.sannybuilder.com/#/vc?q=010D */
    alterWantedLevel(wantedLevel: int): void;
    /** Sets the player's wanted level if the specified level is higher than the current one
    *
    * https://library.sannybuilder.com/#/vc?q=010E */
    alterWantedLevelNoDrop(wantedLevel: int): void;
    /** Applies brakes to the player's car
    *
    * https://library.sannybuilder.com/#/vc?q=0221 */
    applyBrakesToCar(state: boolean): void;
    /** Returns true if the player can move
    *
    * https://library.sannybuilder.com/#/vc?q=03EE */
    canStartMission(): boolean;
    /** Clears the player's wanted level
    *
    * https://library.sannybuilder.com/#/vc?q=0110 */
    clearWantedLevel(): void;
    /** Sets the amount of ammo a player has during a driveby
    *
    * https://library.sannybuilder.com/#/vc?q=0563 */
    ensureHasDriveByWeapon(ammo: int): void;
    /** Kills the player
    *
    * https://library.sannybuilder.com/#/vc?q=0322 */
    explodeHead(): void;
    /** Gets the amount of ammo in the specified weapon of the player
    *
    * https://library.sannybuilder.com/#/vc?q=0419 */
    getAmmoInWeapon(weaponType: int): int;
    /** Gets the bus fares collected by the player
    *
    * https://library.sannybuilder.com/#/vc?q=057F */
    getBusFaresCollected(): int;
    /** Gets the character handle for the specified player
    *
    * https://library.sannybuilder.com/#/vc?q=01F5 */
    getChar(): Char;
    /** Returns the player's coordinates
    *
    * https://library.sannybuilder.com/#/vc?q=0054 */
    getCoordinates(): {
        x: float;
        y: float;
        z: float;
    };
    /** Returns the type of weapon that the player is currently holding
    *
    * https://library.sannybuilder.com/#/vc?q=046F */
    getCurrentWeapon(): int;
    /** Returns the level of chaos inflicted by the player since the last reset (04BE)
    *
    * https://library.sannybuilder.com/#/vc?q=04BF */
    getHavoc(): int;
    /** Returns the player's heading (z-angle)
    *
    * https://library.sannybuilder.com/#/vc?q=0170 */
    getHeading(): float;
    /** Returns the player's health
    *
    * https://library.sannybuilder.com/#/vc?q=0225 */
    getHealth(): int;
    /** Returns the stats of the most recent wheelie or stoppie attempt
    *
    * https://library.sannybuilder.com/#/vc?q=04FC */
    getWheelieStats(): {
        twoWheelsTime: int;
        twoWheelsDistance: float;
        wheelieTime: int;
        wheelieDistance: float;
        stoppieTime: int;
        stoppieDistance: float;
    };
    /** Gives the player the weapon with the specified amount of ammo
    *
    * https://library.sannybuilder.com/#/vc?q=01B1 */
    giveWeapon(weaponType: int, ammo: int): void;
    /** Returns true if the player has the specified weapon
    *
    * https://library.sannybuilder.com/#/vc?q=0490 */
    hasGotWeapon(weaponId: int): boolean;
    /** Increases the players armor by the specified amount
    *
    * https://library.sannybuilder.com/#/vc?q=055F */
    increaseMaxArmor(value: int): void;
    /** Increases the players maximum health by the specified amount
    *
    * https://library.sannybuilder.com/#/vc?q=055E */
    increaseMaxHealth(value: int): void;
    /** Returns true if the player is holding the given type of weapon
    *
    * https://library.sannybuilder.com/#/vc?q=02D7 */
    isCurrentWeapon(weaponType: int): boolean;
    /** Returns true if the player's health is over the specified value
    *
    * https://library.sannybuilder.com/#/vc?q=0183 */
    isHealthGreater(health: int): boolean;
    isInAngledArea2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, angle: float, drawSphere: boolean): boolean;
    isInAngledArea3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, angle: float, drawSphere: boolean): boolean;
    isInAngledAreaInCar2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, angle: float, drawSphere: boolean): boolean;
    isInAngledAreaInCar3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, angle: float, drawSphere: boolean): boolean;
    isInAngledAreaOnFoot2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, angle: float, drawSphere: boolean): boolean;
    isInAngledAreaOnFoot3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, angle: float, drawSphere: boolean): boolean;
    /** Returns true if the player is on a boat
    *
    * https://library.sannybuilder.com/#/vc?q=04A8 */
    isInAnyBoat(): boolean;
    /** Returns true if the player has a vehicle, even if they are not actually sat inside it (opening and closing the door)
    *
    * https://library.sannybuilder.com/#/vc?q=00E0 */
    isInAnyCar(): boolean;
    /** Returns true if the player is in a helicopter
    *
    * https://library.sannybuilder.com/#/vc?q=04AA */
    isInAnyHeli(): boolean;
    /** Returns true if the player is on a plane
    *
    * https://library.sannybuilder.com/#/vc?q=04AC */
    isInAnyPlane(): boolean;
    /** Returns true if the player is within the specified 2D area
    *
    * https://library.sannybuilder.com/#/vc?q=0056 */
    isInArea2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, drawSphere: boolean): boolean;
    /** Returns true if the player is within the specified 3D area
    *
    * https://library.sannybuilder.com/#/vc?q=0057 */
    isInArea3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, drawSphere: boolean): boolean;
    /** Returns true if the player is within the specified 2D area in a vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=0198 */
    isInAreaInCar2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, drawSphere: boolean): boolean;
    /** Returns true if the player is within the specified 3D area in a vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=019D */
    isInAreaInCar3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, drawSphere: boolean): boolean;
    /** Returns true if the player is within the specified 2D area on foot
    *
    * https://library.sannybuilder.com/#/vc?q=0197 */
    isInAreaOnFoot2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, drawSphere: boolean): boolean;
    /** Returns true if the player is within the specified 3D area on foot
    *
    * https://library.sannybuilder.com/#/vc?q=019C */
    isInAreaOnFoot3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, drawSphere: boolean): boolean;
    /** Returns true if the player is in the specified vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=00DC */
    isInCar(vehicle: Car): boolean;
    /** Returns true if the player is flying in a plane or a helicopter
    *
    * https://library.sannybuilder.com/#/vc?q=04C9 */
    isInFlyingVehicle(): boolean;
    /** Returns true if the player is in the specified zone
    *
    * https://library.sannybuilder.com/#/vc?q=0583 */
    isInInfoZone(infoZone: string): boolean;
    /** Returns true if the player is driving a vehicle with the specified model
    *
    * https://library.sannybuilder.com/#/vc?q=00DE */
    isInModel(modelId: int): boolean;
    /** Returns true if the player is controlling a remote-control vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=0241 */
    isInRemoteMode(): boolean;
    /** Returns true if the player is entering a shortcut taxi (0556)
    *
    * https://library.sannybuilder.com/#/vc?q=0596 */
    isInShortcutTaxi(): boolean;
    /** Returns true if the player vehicle's model is Taxi (110), Cabbie (128), or Borgnine (148)
    *
    * https://library.sannybuilder.com/#/vc?q=02DE */
    isInTaxi(): boolean;
    /** Returns true if the player is in the specified map zone
    *
    * https://library.sannybuilder.com/#/vc?q=0121 */
    isInZone(zone: string): boolean;
    /** Returns true if the player is driving a bike
    *
    * https://library.sannybuilder.com/#/vc?q=047E */
    isOnAnyBike(): boolean;
    /** Returns true if the player is on foot, and not occupying a vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=044A */
    isOnFoot(): boolean;
    /** Returns true if the player hasn't been wasted or busted (the player is still playing)
    *
    * https://library.sannybuilder.com/#/vc?q=0256 */
    isPlaying(): boolean;
    /** Returns true if the player is honking the horn in a car
    *
    * https://library.sannybuilder.com/#/vc?q=0122 */
    isPressingHorn(): boolean;
    /** Returns true if the player's money is over the specified value
    *
    * https://library.sannybuilder.com/#/vc?q=010A */
    isScoreGreater(money: int): boolean;
    /** Returns true if the player is firing a weapon
    *
    * https://library.sannybuilder.com/#/vc?q=02DF */
    isShooting(): boolean;
    /** Returns true if the player fired a weapon within the specified 2D area
    *
    * https://library.sannybuilder.com/#/vc?q=02D5 */
    isShootingInArea(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, drawSphere: boolean): boolean;
    /** Returns true if the player is sitting in any vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=0443 */
    isSittingInAnyCar(): boolean;
    /** Returns true if the player is in the specified vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=0442 */
    isSittingInCar(vehicle: Car): boolean;
    /** Returns true if the player is not moving
    *
    * https://library.sannybuilder.com/#/vc?q=029F */
    isStopped(): boolean;
    isStoppedInAngledArea2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, angle: float, drawSphere: boolean): boolean;
    isStoppedInAngledArea3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, angle: float, drawSphere: boolean): boolean;
    isStoppedInAngledAreaInCar2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, angle: float, drawSphere: boolean): boolean;
    isStoppedInAngledAreaInCar3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, angle: float, drawSphere: boolean): boolean;
    isStoppedInAngledAreaOnFoot2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, angle: float, drawSphere: boolean): boolean;
    isStoppedInAngledAreaOnFoot3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, angle: float, drawSphere: boolean): boolean;
    /** Returns true if the player stopped within the specified 2D area
    *
    * https://library.sannybuilder.com/#/vc?q=0199 */
    isStoppedInArea2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, drawSphere: boolean): boolean;
    /** Returns true if the player stopped within the specified 3D area
    *
    * https://library.sannybuilder.com/#/vc?q=019E */
    isStoppedInArea3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, drawSphere: boolean): boolean;
    /** Returns true if the player stopped within the specified 2D area in a vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=019B */
    isStoppedInAreaInCar2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, drawSphere: boolean): boolean;
    /** Returns true if the player stopped within the specified 3D area in a vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=01A0 */
    isStoppedInAreaInCar3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, drawSphere: boolean): boolean;
    /** Returns true if the player stopped within the specified 2D area on foot
    *
    * https://library.sannybuilder.com/#/vc?q=019A */
    isStoppedInAreaOnFoot2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, drawSphere: boolean): boolean;
    /** Returns true if the player stopped within the specified 3D area on foot
    *
    * https://library.sannybuilder.com/#/vc?q=019F */
    isStoppedInAreaOnFoot3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, drawSphere: boolean): boolean;
    /** Returns true if the player is aiming at the specified character
    *
    * https://library.sannybuilder.com/#/vc?q=0457 */
    isTargettingChar(handle: Char): boolean;
    /** Returns true if the player is colliding with the vehicle either on foot or while driving
    *
    * https://library.sannybuilder.com/#/vc?q=0546 */
    isTouchingVehicle(vehicle: Car): boolean;
    /** Returns true if the player's wanted level is over the specified value
    *
    * https://library.sannybuilder.com/#/vc?q=010F */
    isWantedLevelGreater(wantedLevel: int): boolean;
    /** Returns true if the player has the specified model (0352)
    *
    * https://library.sannybuilder.com/#/vc?q=0500 */
    isWearing(modelName: string): boolean;
    /** Returns true if the player is within the 2D radius of the coordinates point
    *
    * https://library.sannybuilder.com/#/vc?q=00E3 */
    locateAnyMeans2D(x: float, y: float, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the player is within the specified 3D area
    *
    * https://library.sannybuilder.com/#/vc?q=00F5 */
    locateAnyMeans3D(x: float, y: float, z: float, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    locateAnyMeansCar2D(handle: Car, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    locateAnyMeansCar3D(handle: Car, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the player is within the 2D radius of the specified character
    *
    * https://library.sannybuilder.com/#/vc?q=00E9 */
    locateAnyMeansChar2D(target: Char, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the player is nearby the specified character
    *
    * https://library.sannybuilder.com/#/vc?q=00FB */
    locateAnyMeansChar3D(target: Char, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the player is within the 2D radius of the coordinates point in a vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=00E5 */
    locateInCar2D(x: float, y: float, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the player is within the specified 3D area in a vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=00F7 */
    locateInCar3D(x: float, y: float, z: float, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    locateInCarCar2D(handle: Car, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    locateInCarCar3D(handle: Car, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the player is within the 2D radius of the specified character in a vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=00EB */
    locateInCarChar2D(target: Char, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the player is nearby the specified character in a vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=00FD */
    locateInCarChar3D(target: Char, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the player is within the 2D radius of the coordinates point on foot
    *
    * https://library.sannybuilder.com/#/vc?q=00E4 */
    locateOnFoot2D(x: float, y: float, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the player is within the specified 3D area on foot
    *
    * https://library.sannybuilder.com/#/vc?q=00F6 */
    locateOnFoot3D(x: float, y: float, z: float, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    locateOnFootCar2D(handle: Car, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    locateOnFootCar3D(handle: Car, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the player is within the 2D radius of the specified character on foot
    *
    * https://library.sannybuilder.com/#/vc?q=00EA */
    locateOnFootChar2D(target: Char, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the player is nearby the specified character on foot
    *
    * https://library.sannybuilder.com/#/vc?q=00FC */
    locateOnFootChar3D(target: Char, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the player stopped within the 2D radius of the coordinates point
    *
    * https://library.sannybuilder.com/#/vc?q=00E6 */
    locateStoppedAnyMeans2D(x: float, y: float, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the player stopped within the specified 3D area
    *
    * https://library.sannybuilder.com/#/vc?q=00F8 */
    locateStoppedAnyMeans3D(x: float, y: float, z: float, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the player stopped within the 2D radius of the coordinates point in a vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=00E8 */
    locateStoppedInCar2D(x: float, y: float, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the player stopped within the specified 3D area in a vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=00FA */
    locateStoppedInCar3D(x: float, y: float, z: float, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the player stopped within the 2D radius of the coordinates point on foot
    *
    * https://library.sannybuilder.com/#/vc?q=00E7 */
    locateStoppedOnFoot2D(x: float, y: float, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the player stopped within the specified 3D area on foot
    *
    * https://library.sannybuilder.com/#/vc?q=00F9 */
    locateStoppedOnFoot3D(x: float, y: float, z: float, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Makes the player to keep looking at the direction of the character
    *
    * https://library.sannybuilder.com/#/vc?q=022E */
    lookAtCharAlways(target: Char): void;
    /** Makes the player immune to fire
    *
    * https://library.sannybuilder.com/#/vc?q=055D */
    makeFireProof(state: boolean): void;
    /** Makes the player safe, putting the character in a safe location
    *
    * https://library.sannybuilder.com/#/vc?q=03EF */
    makeSafeForCutscene(): void;
    /** Takes all weapons away from the player
    *
    * https://library.sannybuilder.com/#/vc?q=03B8 */
    removeAllWeapons(): void;
    /** Resets the level of chaos inflicted by the player
    *
    * https://library.sannybuilder.com/#/vc?q=04BE */
    resetHavoc(): void;
    /** Sets the amount of ammo the player has in the specified weapon
    *
    * https://library.sannybuilder.com/#/vc?q=017A */
    setAmmo(weaponType: int, ammo: int): void;
    setAutoAim(state: boolean): void;
    /** Sets the players driveby mode
    *
    * https://library.sannybuilder.com/#/vc?q=0501 */
    setCanDoDriveBy(state: boolean): void;
    /** Sets whether player's control is enabled
    *
    * https://library.sannybuilder.com/#/vc?q=01B4 */
    setControl(state: boolean): void;
    /** Puts the player at the specified location
    *
    * https://library.sannybuilder.com/#/vc?q=0055 */
    setCoordinates(x: float, y: float, z: float): void;
    /** Sets the player's currently held weapon
    *
    * https://library.sannybuilder.com/#/vc?q=01B8 */
    setCurrentWeapon(weaponType: int): void;
    /** Makes the camera start moving around in a swirling motion with the specified intensity as if drunk
    *
    * https://library.sannybuilder.com/#/vc?q=052C */
    setDrunkenness(intensity: int): void;
    /** Defines whether the player have to reload their gun
    *
    * https://library.sannybuilder.com/#/vc?q=0331 */
    setFastReload(state: boolean): void;
    /** Sets whether the player loses the cash when gets wasted (works once)
    *
    * https://library.sannybuilder.com/#/vc?q=0414 */
    setFreeHealthCare(state: boolean): void;
    /** Sets the player's heading (z-angle)
    *
    * https://library.sannybuilder.com/#/vc?q=0171 */
    setHeading(heading: float): void;
    /** Sets the player's health
    *
    * https://library.sannybuilder.com/#/vc?q=0222 */
    setHealth(health: int): void;
    /** Makes the character act as the player's hooker
    *
    * https://library.sannybuilder.com/#/vc?q=043E */
    setHooker(hooker: Char): void;
    /** Sets whether cops should ignore the player regardless of wanted level
    *
    * https://library.sannybuilder.com/#/vc?q=01F7 */
    setIgnorePolice(state: boolean): void;
    /** Sets the players mood, affecting the dialogue spoken by the player
    *
    * https://library.sannybuilder.com/#/vc?q=04E3 */
    setMood(mood: int, time: int): void;
    /** Defines whether the player can run fast forever
    *
    * https://library.sannybuilder.com/#/vc?q=0330 */
    setNeverGetsTired(state: boolean): void;
    /** Sets whether the player is visible or not
    *
    * https://library.sannybuilder.com/#/vc?q=0336 */
    setVisible(state: boolean): void;
    /** Shuts the player up
    *
    * https://library.sannybuilder.com/#/vc?q=04E2 */
    shutUp(state: boolean): void;
    /** Makes the player to stop looking at the character (022E)
    *
    * https://library.sannybuilder.com/#/vc?q=0230 */
    stopLooking(): void;
    /** Returns the current vehicle of the player and adds it to the mission cleanup list
    *
    * https://library.sannybuilder.com/#/vc?q=00DA */
    storeCarIsIn(): Car;
    /** Returns the player's vehicle handle without marking it as used by the script, therefore allowing it to be deleted by the game at any time
    *
    * https://library.sannybuilder.com/#/vc?q=03C1 */
    storeCarIsInNoSave(): Car;
    /** Returns the player's money
    *
    * https://library.sannybuilder.com/#/vc?q=010B */
    storeScore(): int;
    /** Returns the player's current wanted level
    *
    * https://library.sannybuilder.com/#/vc?q=01C0 */
    storeWantedLevel(): int;
    /** Rotates the player to face the character
    *
    * https://library.sannybuilder.com/#/vc?q=0210 */
    turnToFaceChar(char: Char): void;
    /** Puts the player at the specified location, removing them from any vehicle they're in
    *
    * https://library.sannybuilder.com/#/vc?q=012A */
    warpFromCarToCoord(x: float, y: float, z: float): void;
    /** Puts the player in the specified vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=0369 */
    warpIntoCar(vehicle: Car): void;
}
/** Remote-Controlled Cars
 * 
 * https://library.sannybuilder.com/#/vc/classes/Rc */
interface Rc {
    /** Destroys the remote-control vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=0409 */
    BlowUpBuggy(): void;
    /** Returns the players radio-controlled vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=0484 */
    GetCar(player: Player): Car;
    /** Gives control of the remote-control vehicle to the player
    *
    * https://library.sannybuilder.com/#/vc?q=010C */
    GiveCarToPlayer(player: Player, x: float, y: float, z: float, angle: float): void;
    /** Puts the player in control of a remote-control vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=046E */
    GiveModelToPlayer(handle: Player, x: float, y: float, z: float, angle: float, modelId: int): void;
    /** Exits remote-control mode
    *
    * https://library.sannybuilder.com/#/vc?q=04DB */
    RemoveBuggy(): void;
    /** Enables a remote-control vehicle detonation
    *
    * https://library.sannybuilder.com/#/vc?q=048A */
    SetEnableDetonate(state: boolean): void;
    /** Sets whether RC Bandits detonate on contact with the wheels of any four-wheeled vehicles
    *
    * https://library.sannybuilder.com/#/vc?q=04D6 */
    SetEnableDetonateOnContact(state: boolean): void;
}
declare var Rc: Rc
/** Configuration of Respawn Points
 * 
 * https://library.sannybuilder.com/#/vc/classes/Restart */
interface Restart {
    /** Adds a new location where the player can respawn after death
    *
    * https://library.sannybuilder.com/#/vc?q=016C */
    AddHospital(x: float, y: float, z: float, heading: float): void;
    /** Adds a new location where the player can respawn after arrest
    *
    * https://library.sannybuilder.com/#/vc?q=016D */
    AddPolice(x: float, y: float, z: float, heading: float): void;
    /** Stops the player from spawning at the override location (016E)
    *
    * https://library.sannybuilder.com/#/vc?q=01F6 */
    CancelOverride(): void;
    /** Forces this location to be the next respawn location
    *
    * https://library.sannybuilder.com/#/vc?q=016E */
    OverrideNext(x: float, y: float, z: float, heading: float): void;
}
declare var Restart: Restart
/** Script Fires
 * 
 * https://library.sannybuilder.com/#/vc/classes/ScriptFire */
declare class ScriptFire {
    constructor(handle: number);
    /** Creates a script fire at the location
    *
    * https://library.sannybuilder.com/#/vc?q=02CF */
    static Create(x: float, y: float, z: float): ScriptFire;
    /** Creates a script fire on the vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=0325 */
    static CreateCarFire(vehicle: Car): ScriptFire;
    /** Creates a script fire on the character
    *
    * https://library.sannybuilder.com/#/vc?q=0326 */
    static CreateCharFire(char: Char): ScriptFire;
    /** Returns true if the script fire has been put out
    *
    * https://library.sannybuilder.com/#/vc?q=02D0 */
    isExtinguished(): boolean;
    /** Removes the script fire
    *
    * https://library.sannybuilder.com/#/vc?q=02D1 */
    remove(): void;
}
/** Script Objects
 * 
 * https://library.sannybuilder.com/#/vc/classes/ScriptObject */
declare class ScriptObject {
    constructor(handle: number);
    /** Creates an object at the specified location, with the specified model
    *
    * https://library.sannybuilder.com/#/vc?q=0107 */
    static Create(modelId: int, x: float, y: float, z: float): ScriptObject;
    /** Creates an object without offset at the location
    *
    * https://library.sannybuilder.com/#/vc?q=029B */
    static CreateNoOffset(modelId: int, x: float, y: float, z: float): ScriptObject;
    /** Returns true if the handle is a valid object handle
    *
    * https://library.sannybuilder.com/#/vc?q=03CA */
    static DoesExist(handle: int): boolean;
    /** Adds the given vector to the object's velocity (0381)
    *
    * https://library.sannybuilder.com/#/vc?q=038C */
    addToVelocity(x: float, y: float, z: float): void;
    /** Destroys the object, freeing game memory
    *
    * https://library.sannybuilder.com/#/vc?q=0108 */
    delete(): void;
    /** Removes the object from the mission cleanup list, preventing it from being deleted when the mission ends
    *
    * https://library.sannybuilder.com/#/vc?q=01C7 */
    dontRemove(): void;
    /** Keeps the object in the games memory
    *
    * https://library.sannybuilder.com/#/vc?q=0550 */
    freezePosition(state: boolean): void;
    /** Returns the object's coordinates
    *
    * https://library.sannybuilder.com/#/vc?q=01BB */
    getCoordinates(): {
        x: float;
        y: float;
        z: float;
    };
    /** Returns the object's heading (z-angle)
    *
    * https://library.sannybuilder.com/#/vc?q=0176 */
    getHeading(): float;
    /** Returns the object's coordinates with an offset
    *
    * https://library.sannybuilder.com/#/vc?q=0400 */
    getOffsetInWorldCoords(xOffset: float, yOffset: float, zOffset: float): {
        x: float;
        y: float;
        z: float;
    };
    /** Returns true if the object is damaged
    *
    * https://library.sannybuilder.com/#/vc?q=0366 */
    hasBeenDamaged(): boolean;
    /** Returns true if the object has collided
    *
    * https://library.sannybuilder.com/#/vc?q=04DA */
    hasCollidedWithAnything(): boolean;
    /** Returns true if object is in the specified area
    *
    * https://library.sannybuilder.com/#/vc?q=04E9 */
    isInArea2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, drawSphere: boolean): boolean;
    /** Returns true if the object is in the specified area
    *
    * https://library.sannybuilder.com/#/vc?q=04EA */
    isInArea3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, drawSphere: boolean): boolean;
    /** Returns true if the object is in water
    *
    * https://library.sannybuilder.com/#/vc?q=04E7 */
    isInWater(): boolean;
    /** Returns true if the object is visible
    *
    * https://library.sannybuilder.com/#/vc?q=02CC */
    isOnScreen(): boolean;
    /** Returns true if the object is near the specified coordinates
    *
    * https://library.sannybuilder.com/#/vc?q=04E5 */
    locate2D(x: float, y: float, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the object is near the specified point
    *
    * https://library.sannybuilder.com/#/vc?q=04E6 */
    locate3D(x: float, y: float, z: float, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Makes the object targettable (ability to be auto-aimed)
    *
    * https://library.sannybuilder.com/#/vc?q=035D */
    makeTargettable(): void;
    /** Allows the object to be deleted by the game if necessary, and also removes it from the mission cleanup list, if applicable
    *
    * https://library.sannybuilder.com/#/vc?q=01C4 */
    markAsNoLongerNeeded(): void;
    /** Places the object at an offset from the car
    *
    * https://library.sannybuilder.com/#/vc?q=035C */
    placeRelativeToCar(vehicle: Car, xOffset: float, yOffset: float, zOffset: float): void;
    /** Rotates the object from one angle to another, optionally accounting for a collision during the rotation
    *
    * https://library.sannybuilder.com/#/vc?q=034D */
    rotate(fromAngle: float, toAngle: float, collisionCheck: boolean): boolean;
    /** Sets the visibility of the object to the specified interior
    *
    * https://library.sannybuilder.com/#/vc?q=0566 */
    setAreaVisible(areaId: int): void;
    /** Sets the object's collision detection
    *
    * https://library.sannybuilder.com/#/vc?q=0382 */
    setCollision(state: boolean): void;
    /** Puts the object at the specified location
    *
    * https://library.sannybuilder.com/#/vc?q=01BC */
    setCoordinates(x: float, y: float, z: float): void;
    /** Sets the specified object to always draw on top of other objects
    *
    * https://library.sannybuilder.com/#/vc?q=0418 */
    setDrawLast(state: boolean): void;
    /** Makes the object moveable
    *
    * https://library.sannybuilder.com/#/vc?q=0392 */
    setDynamic(state: boolean): void;
    /** Sets the object's heading (z-angle)
    *
    * https://library.sannybuilder.com/#/vc?q=0177 */
    setHeading(heading: float): void;
    /** Enables the use of collision checking for the object
    *
    * https://library.sannybuilder.com/#/vc?q=04D9 */
    setRecordsCollisions(state: boolean): void;
    /** Sets the object rotation along X, Y and Z axis
    *
    * https://library.sannybuilder.com/#/vc?q=0453 */
    setRotation(x: float, y: float, z: float): void;
    /** Sets the object's velocity
    *
    * https://library.sannybuilder.com/#/vc?q=0381 */
    setVelocity(xSpeed: float, ySpeed: float, zSpeed: float): void;
    /** Returns true if the object has finished moving
    *
    * https://library.sannybuilder.com/#/vc?q=034E */
    slide(fromX: float, fromY: float, fromZ: float, xSpeed: float, ySpeed: float, zSpeed: float, collisionCheck: boolean): boolean;
    /** Makes the specified car have no collision with the specified object
    *
    * https://library.sannybuilder.com/#/vc?q=050E */
    sortOutCollisionWithCar(handle: Car): void;
}
/** Mission Shortcut Taxi
 * 
 * https://library.sannybuilder.com/#/vc/classes/Shortcut */
interface Shortcut {
    /** Clears any taxi shortcut that is set up by 0556 or 058E
    *
    * https://library.sannybuilder.com/#/vc?q=0557 */
    ClearTaxi(): void;
    /** Sets the taxi shortcut pick-up point for mission
    *
    * https://library.sannybuilder.com/#/vc?q=058E */
    SetDropoffPointForMission(x: float, y: float, z: float, angle: float): void;
    /** Sets the taxi shortcut pick-up point for mission
    *
    * https://library.sannybuilder.com/#/vc?q=058D */
    SetPickupPoint(x: float, y: float, z: float, angle: float): void;
    /** Sets up both the pick-up (058D) and drop-off (058E) points of the taxi shortcut
    *
    * https://library.sannybuilder.com/#/vc?q=0556 */
    SetUpTaxi(pickUpX: float, pickUpY: float, pickUpZ: float, pickUpAngle: float, dropoffX: float, dropoffY: float, dropoffZ: float, dropoffAngle: float): void;
}
declare var Shortcut: Shortcut
/** Positionable Audio Effects
 * 
 * https://library.sannybuilder.com/#/vc/classes/Sound */
declare class Sound {
    constructor(handle: number);
    /** Creates a continuous sound at the location
    *
    * https://library.sannybuilder.com/#/vc?q=018D */
    static AddContinuous(x: float, y: float, z: float, soundId: int): Sound;
    /** Plays a sound with the specified ID at the location
    *
    * https://library.sannybuilder.com/#/vc?q=018C */
    static AddOneOffSound(x: float, y: float, z: float, soundId: int): void;
    /** Stops the sound
    *
    * https://library.sannybuilder.com/#/vc?q=018E */
    remove(): void;
}
/** Cylinder Markers
 * 
 * https://library.sannybuilder.com/#/vc/classes/Sphere */
declare class Sphere {
    constructor(handle: number);
    /** Creates a static sphere at the location, with the specified radius
    *
    * https://library.sannybuilder.com/#/vc?q=03BC */
    static Create(x: float, y: float, z: float, radius: float): Sphere;
    /** Displays a red cylinder sphere
    *
    * https://library.sannybuilder.com/#/vc?q=03A1 */
    static Draw(x: float, y: float, z: float, radius: float): void;
    /** Destroys a static sphere
    *
    * https://library.sannybuilder.com/#/vc?q=03BD */
    remove(): void;
}
/** Game Statistics
 * 
 * https://library.sannybuilder.com/#/vc/classes/Stat */
interface Stat {
    /** Adds to the number of Bloodring kills stat
    *
    * https://library.sannybuilder.com/#/vc?q=0543 */
    AddBloodRingKills(num: int): void;
    /** Adds to the "ice cream" sold stat
    *
    * https://library.sannybuilder.com/#/vc?q=0536 */
    AddIceCreamsSold(num: int): void;
    /** Adds to the fashion budget stat
    *
    * https://library.sannybuilder.com/#/vc?q=04CF */
    AddMoneySpentOnClothes(amount: int): void;
    /** Adds to the property budget stat
    *
    * https://library.sannybuilder.com/#/vc?q=0529 */
    AddMoneySpentOnProperty(amount: int): void;
    /** Adds to the weapon budget stat
    *
    * https://library.sannybuilder.com/#/vc?q=0528 */
    AddMoneySpentOnWeapons(amount: int): void;
    /** Adds to the assassination contracts stat
    *
    * https://library.sannybuilder.com/#/vc?q=0533 */
    AddNumberOfAssassinations(num: int): void;
    /** Adds to the pizzas delivered stat
    *
    * https://library.sannybuilder.com/#/vc?q=0534 */
    AddPizzasDelivered(num: int): void;
    /** Adds to the stores knocked off stat
    *
    * https://library.sannybuilder.com/#/vc?q=0531 */
    AddStoresKnockedOff(num: int): void;
    /** Gets the progress of completion as a percentage
    *
    * https://library.sannybuilder.com/#/vc?q=058C */
    GetProgressPercentage(): float;
    /** Increases the progress made stat by the specified amount
    *
    * https://library.sannybuilder.com/#/vc?q=030C */
    PlayerMadeProgress(progress: int): void;
    /** Saves the highest paramedic mission level stat
    *
    * https://library.sannybuilder.com/#/vc?q=0403 */
    RegisterAmbulanceLevel(highestLevel: int): void;
    /** Updates the race best position
    *
    * https://library.sannybuilder.com/#/vc?q=0582 */
    RegisterBestPosition(statId: int, position: int): void;
    /** Increments the number of criminals killed on Vigilante mission stat by 1
    *
    * https://library.sannybuilder.com/#/vc?q=0402 */
    RegisterCriminalCaught(): void;
    /** Updates the stat if the value is lower than the current stat value
    *
    * https://library.sannybuilder.com/#/vc?q=042E */
    RegisterFastestTime(statId: int, value: int): void;
    /** Increments the number of fires extinguished stat by 1
    *
    * https://library.sannybuilder.com/#/vc?q=0404 */
    RegisterFireExtinguished(): void;
    /** Saves the highest firefighter level stat
    *
    * https://library.sannybuilder.com/#/vc?q=0599 */
    RegisterFireLevel(highestLevel: int): void;
    /** Updates the stat if the value is higher than the current stat value
    *
    * https://library.sannybuilder.com/#/vc?q=042F */
    RegisterHighestScore(statId: int, value: int): void;
    /** Saves the highest insane jump distance stat
    *
    * https://library.sannybuilder.com/#/vc?q=030E */
    RegisterJumpDistance(distance: float): void;
    /** Saves the highest insane jump flips stat
    *
    * https://library.sannybuilder.com/#/vc?q=0310 */
    RegisterJumpFlips(flips: int): void;
    /** Saves the highest insane jump height stat
    *
    * https://library.sannybuilder.com/#/vc?q=030F */
    RegisterJumpHeight(height: float): void;
    /** Saves the highest insane jump rotation stat
    *
    * https://library.sannybuilder.com/#/vc?q=0311 */
    RegisterJumpSpins(spins: int): void;
    /** Saves the best insane stunt stat
    *
    * https://library.sannybuilder.com/#/vc?q=0312 */
    RegisterJumpStunt(stunt: int): void;
    /** Increments the number of people saved in an ambulance stat by 1
    *
    * https://library.sannybuilder.com/#/vc?q=0401 */
    RegisterLifeSaved(): void;
    /** Increments the number of mission attempts stat by 1
    *
    * https://library.sannybuilder.com/#/vc?q=0317 */
    RegisterMissionGiven(): void;
    /** Sets the GXT of the last mission passed
    *
    * https://library.sannybuilder.com/#/vc?q=0318 */
    RegisterMissionPassed(key: string): void;
    /** Adds the value to the cash made in taxi stat
    *
    * https://library.sannybuilder.com/#/vc?q=0316 */
    RegisterMoneyMadeTaxi(cashAmount: int): void;
    /** Sets the latest odd job mission passed
    *
    * https://library.sannybuilder.com/#/vc?q=0595 */
    RegisterOddjobMissionPassed(): void;
    /** Increments the number of passengers dropped off stat by 1
    *
    * https://library.sannybuilder.com/#/vc?q=0315 */
    RegisterPassengerDroppedOffTaxi(): void;
    /** Increments the completed number of unique stunt jumps stat by 1
    *
    * https://library.sannybuilder.com/#/vc?q=0313 */
    RegisterUniqueJumpFound(): void;
    /** Saves the highest vigilante level stat
    *
    * https://library.sannybuilder.com/#/vc?q=0578 */
    RegisterVigilanteLevel(highestLevel: int): void;
    /** Sets the longest time in Bloodring stat
    *
    * https://library.sannybuilder.com/#/vc?q=0544 */
    SetLongestTimeInBloodRing(timeInSec: int): void;
    /** Sets the maximum progress the player can reach
    *
    * https://library.sannybuilder.com/#/vc?q=030D */
    SetProgressTotal(maxProgress: int): void;
    /** Adds the property to the property owned stat
    *
    * https://library.sannybuilder.com/#/vc?q=0542 */
    SetPropertyAsOwned(propertyIndex: int): void;
    /** Sets the total number of rampages passed stat
    *
    * https://library.sannybuilder.com/#/vc?q=0408 */
    SetTotalNumberOfKillFrenzies(total: int): void;
    /** Sets the total number of missions that can be completed
    *
    * https://library.sannybuilder.com/#/vc?q=042C */
    SetTotalNumberOfMissions(numMissions: int): void;
    /** Sets the total number of unique stunt jumps stat
    *
    * https://library.sannybuilder.com/#/vc?q=0314 */
    SetUniqueJumpsTotal(total: int): void;
}
declare var Stat: Stat
/** Loading Game Assets
 * 
 * https://library.sannybuilder.com/#/vc/classes/Streaming */
interface Streaming {
    GetNameOfVehicleModel(modelId: int): string;
    /** Returns true if the specified IFP file is loaded
    *
    * https://library.sannybuilder.com/#/vc?q=04EE */
    HasAnimationLoaded(animationFile: string): boolean;
    /** Returns true if the model is available for creation
    *
    * https://library.sannybuilder.com/#/vc?q=0248 */
    HasModelLoaded(modelId: int): boolean;
    /** Returns true if the special character's model (023C) is available for creation
    *
    * https://library.sannybuilder.com/#/vc?q=023D */
    HasSpecialCharacterLoaded(slotId: int): boolean;
    /** Returns true if the specified model exists in the loaded 
    *
    * https://library.sannybuilder.com/#/vc?q=0488 */
    IsModelAvailable(modelId: int): boolean;
    /** Loads any requested models (0247 or 0353) synchronously
    *
    * https://library.sannybuilder.com/#/vc?q=038B */
    LoadAllModelsNow(): void;
    /** Starts loading a specific location, just like if the player was there, removing LOD textures
    *
    * https://library.sannybuilder.com/#/vc?q=03CB */
    LoadScene(x: float, y: float, z: float): void;
    /** Requests a special character's model to be loaded into the specified slot
    *
    * https://library.sannybuilder.com/#/vc?q=023C */
    LoadSpecialCharacter(slotId: int, modelName: string): void;
    /** Loads a model with the given name as a cutscene model id (GTA III: 185-189, VC: 295-299)
    *
    * https://library.sannybuilder.com/#/vc?q=02F3 */
    LoadSpecialModel(cutsceneModelId: int, modelName: string): void;
    /** Releases the specified model, freeing game memory
    *
    * https://library.sannybuilder.com/#/vc?q=0249 */
    MarkModelAsNoLongerNeeded(modelId: int): void;
    /** Releases the specified IFP file, freeing game memory
    *
    * https://library.sannybuilder.com/#/vc?q=04EF */
    RemoveAnimation(animationFile: string): void;
    /** Loads the specified IFP File
    *
    * https://library.sannybuilder.com/#/vc?q=04ED */
    RequestAnimation(animationFile: string): void;
    /** Reloads the area at the specified coordinates
    *
    * https://library.sannybuilder.com/#/vc?q=04E4 */
    RequestCollision(x: float, y: float): void;
    /** Requests a new model to load
    *
    * https://library.sannybuilder.com/#/vc?q=0247 */
    RequestModel(modelId: int): void;
    /** Sets the visibility of an interior area
    *
    * https://library.sannybuilder.com/#/vc?q=04BB */
    SetAreaVisible(areaId: int): void;
    /** Sets the streaming of additional models like peds, cars, and maps
    *
    * https://library.sannybuilder.com/#/vc?q=03AF */
    Switch(state: boolean): void;
    /** Releases the special character (023C), freeing game memory
    *
    * https://library.sannybuilder.com/#/vc?q=0296 */
    UnloadSpecialCharacter(slotId: int): void;
}
declare var Streaming: Streaming
/** Stuck Cars Check
 * 
 * https://library.sannybuilder.com/#/vc/classes/StuckCarCheck */
interface StuckCarCheck {
    /** Adds the vehicle to the stuck cars array
    *
    * https://library.sannybuilder.com/#/vc?q=03CC */
    Add(vehicle: Car, speed: float, duration: int): void;
    /** Returns true if the car is stuck
    *
    * https://library.sannybuilder.com/#/vc?q=03CE */
    IsCarStuck(vehicle: Car): boolean;
    /** Removes the vehicle from the stuck cars array
    *
    * https://library.sannybuilder.com/#/vc?q=03CD */
    Remove(vehicle: Car): void;
}
declare var StuckCarCheck: StuckCarCheck
/** Text Messages
 * 
 * https://library.sannybuilder.com/#/vc/classes/Text */
interface Text {
    AddLabel(dynamicKey: string, text: string): void;
    /** Removes the text box from the screen
    *
    * https://library.sannybuilder.com/#/vc?q=03E6 */
    ClearHelp(): void;
    /** Clears all priority text and some styles of big texts
    *
    * https://library.sannybuilder.com/#/vc?q=00BE */
    ClearPrints(): void;
    /** Clears small messages from the screen
    *
    * https://library.sannybuilder.com/#/vc?q=03EB */
    ClearSmallPrints(): void;
    /** Removes the styled text from the screen
    *
    * https://library.sannybuilder.com/#/vc?q=03D6 */
    ClearThisBigPrint(key: string): void;
    /** Removes the priority text from the screen
    *
    * https://library.sannybuilder.com/#/vc?q=03D5 */
    ClearThisPrint(key: string): void;
    /** Draws text at the specified on-screen position
    *
    * https://library.sannybuilder.com/#/vc?q=033E */
    Display(offsetLeft: float, offsetTop: float, key: string): void;
    DisplayFormatted(screenX: float, screenY: float, text: string, _: number[]): void;
    DisplayString(screenX: float, screenY: float, text: string): void;
    /** Draws text with 2 numbers
    *
    * https://library.sannybuilder.com/#/vc?q=045B */
    DisplayWith2Numbers(offsetLeft: float, offsetTop: float, key: string, num1: int, num2: int): void;
    /** Draws text with 1 number
    *
    * https://library.sannybuilder.com/#/vc?q=045A */
    DisplayWithNumber(offsetLeft: float, offsetTop: float, key: string, num: int): void;
    GetLabelString(key: string): string;
    /** Makes the game use GXT Entries from the specified GXT Table
    *
    * https://library.sannybuilder.com/#/vc?q=054C */
    LoadMissionText(tableName: string): void;
    /** Displays a message positioned on the bottom of the screen for the specified time
    *
    * https://library.sannybuilder.com/#/vc?q=00BB */
    Print(key: string, time: int, flag: int): void;
    /** Displays a styled message for the specified time
    *
    * https://library.sannybuilder.com/#/vc?q=00BA */
    PrintBig(key: string, time: int, style: int): void;
    /** Displays a styled message for the specified time respecting the format of the String entered
    *
    * https://library.sannybuilder.com/#/vc?q=0ACF */
    PrintBigFormatted(text: string, time: int, style: int, ...args: number[]): void;
    /** Displays a low-priority styled message for the specified time
    *
    * https://library.sannybuilder.com/#/vc?q=0217 */
    PrintBigQ(key: string, duration: int, style: int): void;
    PrintBigString(text: string, time: int, style: int): void;
    PrintFormatted(text: string, time: int, ...arg: number[]): void;
    PrintFormattedNow(text: string, time: int, ...arg: number[]): void;
    /** Displays a black text box for a few seconds
    *
    * https://library.sannybuilder.com/#/vc?q=03E5 */
    PrintHelp(key: string): void;
    /** Shows a text box which stays on screen until it is removed by another command
    *
    * https://library.sannybuilder.com/#/vc?q=0512 */
    PrintHelpForever(key: string): void;
    /** Displays a black text box for a few seconds respecting the format of the String entered
    *
    * https://library.sannybuilder.com/#/vc?q=0ACE */
    PrintHelpFormatted(text: string, ...args: number[]): void;
    PrintHelpString(text: string): void;
    /** Displays a message positioned on the bottom of the screen for the specified time
    *
    * https://library.sannybuilder.com/#/vc?q=00BC */
    PrintNow(key: string, time: int, flag: int): void;
    /** Displays the text (provided as a string literal or an address) similarly to 00BB
    *
    * https://library.sannybuilder.com/#/vc?q=0ACC */
    PrintString(text: string, time: int): void;
    /** Displays a styled message in which the first string token ~a~ is substituted with the specified text
    *
    * https://library.sannybuilder.com/#/vc?q=0384 */
    PrintStringInStringNow(templateKey: string, replacementKey: string, duration: int, style: int): void;
    PrintStringNow(text: string, time: int): void;
    /** Displays a styled message in which the first two ~1~ tokens are substituted with the specified numbers
    *
    * https://library.sannybuilder.com/#/vc?q=036D */
    PrintWith2NumbersBig(key: string, num1: int, num2: int, duration: int, style: int): void;
    /** Displays a styled message in which the first two ~1~ tokens are substituted with the specified numbers
    *
    * https://library.sannybuilder.com/#/vc?q=02FD */
    PrintWith2NumbersNow(key: string, num1: int, num2: int, duration: int, style: int): void;
    /** Displays a styled message in which the first three ~1~ tokens are substituted with the specified numbers
    *
    * https://library.sannybuilder.com/#/vc?q=02FF */
    PrintWith3Numbers(key: string, num1: int, num2: int, num3: int, duration: int, style: int): void;
    /** Displays a styled message in which the first four ~1~ tokens are substituted with the specified numbers
    *
    * https://library.sannybuilder.com/#/vc?q=0302 */
    PrintWith4Numbers(key: string, num1: int, num2: int, num3: int, num4: int, duration: int, style: int): void;
    /** Displays a styled message in which the first six ~1~ tokens are substituted with the specified numbers
    *
    * https://library.sannybuilder.com/#/vc?q=0308 */
    PrintWith6Numbers(key: string, num1: int, num2: int, num3: int, num4: int, num5: int, num6: int, duration: int, style: int): void;
    /** Displays a styled message in which the first string token ~1~ is substituted with the specified number
    *
    * https://library.sannybuilder.com/#/vc?q=01E4 */
    PrintWithNumber(key: string, num: int, duration: int, flag: int): void;
    /** Displays a styled message in which the first string token~1~ is substituted with the specified number
    *
    * https://library.sannybuilder.com/#/vc?q=01E3 */
    PrintWithNumberBig(key: string, num: int, duration: int, style: int): void;
    /** Displays a styled message in which the first string token ~1~ is substituted with the specified number
    *
    * https://library.sannybuilder.com/#/vc?q=01E5 */
    PrintWithNumberNow(key: string, num: int, duration: int, flag: int): void;
    RemoveLabel(dynamicKey: string): void;
    ScanString(str: string, format: string, ...args: number[]): string;
    /** Gives the text a background (0346)
    *
    * https://library.sannybuilder.com/#/vc?q=0345 */
    SetBackground(state: boolean): void;
    /** Centers the text
    *
    * https://library.sannybuilder.com/#/vc?q=0342 */
    SetCenter(state: boolean): void;
    /** Sets the color of the text letters
    *
    * https://library.sannybuilder.com/#/vc?q=0340 */
    SetColor(red: int, green: int, blue: int, alpha: int): void;
    /** Sets the text draw font
    *
    * https://library.sannybuilder.com/#/vc?q=0349 */
    SetFont(font: int): void;
    /** Sets the text to be drawn justified, which means the text will wrap in order to fill an even rectangle of space
    *
    * https://library.sannybuilder.com/#/vc?q=0341 */
    SetJustify(state: boolean): void;
    /** Makes the text size proportionate
    *
    * https://library.sannybuilder.com/#/vc?q=0348 */
    SetProportional(state: boolean): void;
    /** Sets the text draw to be aligned to the right
    *
    * https://library.sannybuilder.com/#/vc?q=03E4 */
    SetRightJustify(state: boolean): void;
    /** Scales the width and height of the text letters
    *
    * https://library.sannybuilder.com/#/vc?q=033F */
    SetScale(widthScale: float, heightScale: float): void;
    /** Sets the line width of the text
    *
    * https://library.sannybuilder.com/#/vc?q=0343 */
    SetWrapX(width: float): void;
    StringFormat(format: string, ...args: number[]): string;
    /** Enables text and texture drawing
    *
    * https://library.sannybuilder.com/#/vc?q=03F0 */
    UseCommands(state: boolean): void;
}
declare var Text: Text
/** Texture Dictionaries
 * 
 * https://library.sannybuilder.com/#/vc/classes/Txd */
interface Txd {
    /** Loads the texture dictionary for use in drawing sprites (038D) on the screen
    *
    * https://library.sannybuilder.com/#/vc?q=0390 */
    LoadDictionary(name: string): void;
    /** Loads a sprite from the most recently loaded texture dictionary (0390)
    *
    * https://library.sannybuilder.com/#/vc?q=038F */
    LoadSprite(memorySlot: int, spriteName: string): void;
    /** Unloads all currently loaded textures (038F), as well as texture dictionaries (0390), freeing game memory
    *
    * https://library.sannybuilder.com/#/vc?q=0391 */
    Remove(): void;
}
declare var Txd: Txd
/** Weapons
 * 
 * https://library.sannybuilder.com/#/vc/classes/Weapon */
interface Weapon {
    /** Gets the model ID of the weapon according to the weapon type
    *
    * https://library.sannybuilder.com/#/vc?q=0604 */
    GetModel(weaponType: int): int;
    /** Gets the type of weapon according to the model ID of the weapon
    *
    * https://library.sannybuilder.com/#/vc?q=0605 */
    GetTypeForModel(modelId: int): int;
}
declare var Weapon: Weapon
/** Weather Control
 * 
 * https://library.sannybuilder.com/#/vc/classes/Weather */
interface Weather {
    /** Forces the game weather to the specified type
    *
    * https://library.sannybuilder.com/#/vc?q=01B5 */
    Force(type: int): void;
    /** Forces the upcoming weather to the specified type
    *
    * https://library.sannybuilder.com/#/vc?q=01B6 */
    ForceNow(type: int): void;
    /** Gets the current weather ID
    *
    * https://library.sannybuilder.com/#/vc?q=0607 */
    GetCurrent(): int;
    /** Allows the game to continue its usual weather pattern after using 01B5
    *
    * https://library.sannybuilder.com/#/vc?q=01B7 */
    Release(): void;
    /** Allows hurricane weather
    *
    * https://library.sannybuilder.com/#/vc?q=057C */
    SetAllowHurricanes(state: boolean): void;
}
declare var Weather: Weather
/** Traffic, Population and other Physical Entities
 * 
 * https://library.sannybuilder.com/#/vc/classes/World */
interface World {
    /** Returns the handle of a random car with the specified model in the specified 2D area, or -1 otherwise
    *
    * https://library.sannybuilder.com/#/vc?q=0327 */
    GetRandomCarOfTypeInArea(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, modelId: int): Car;
    /** Returns the handle of the next ped in the given area who has not bought "ice cream" yet, or -1 otherwise
    *
    * https://library.sannybuilder.com/#/vc?q=058F */
    GetRandomIceCreamCustomerInArea(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, allowCivilian: int, allowGangMember: int, allowCriminal: int): Char;
    /** Sets visibility of secondary rubbish (03AD)
    *
    * https://library.sannybuilder.com/#/vc?q=055A */
    AddPornLeafletToRubbish(state: boolean): void;
    /** Creates a trigger zone for police to appear during chases
    *
    * https://library.sannybuilder.com/#/vc?q=04F8 */
    AddSetPiece(type: int, fromX: float, fromY: float, toX: float, toY: float, spawnPoliceAAtX: float, spawnPoliceAAtY: float, headedTowardsAAtX: float, headedTowardsAAtY: float, spawnPoliceBAtX: float, spawnPoliceBAtY: float, headedTowardsBAtX: float, headedTowardsBAtY: float): void;
    /** Returns true if there is a pedestrian of the given model in the specified area around the player
    *
    * https://library.sannybuilder.com/#/vc?q=0548 */
    CheckForPedModelAroundPlayer(player: Player, offsetX: float, offsetY: float, offsetZ: float, modelId1: int, modelId2: int): boolean;
    /** Removes references to all created roadblocks, freeing game memory
    *
    * https://library.sannybuilder.com/#/vc?q=04C1 */
    ClearAllScriptRoadblocks(): void;
    /** Clears the area, removing all vehicles and pedestrians
    *
    * https://library.sannybuilder.com/#/vc?q=0395 */
    ClearArea(x: float, y: float, z: float, radius: float, clearParticles: boolean): void;
    /** Clears all cars in the specified 3D area
    *
    * https://library.sannybuilder.com/#/vc?q=03BA */
    ClearAreaOfCars(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float): void;
    /** Clears all pedestrians from the given area
    *
    * https://library.sannybuilder.com/#/vc?q=042B */
    ClearAreaOfChars(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float): void;
    /** Clears the extra color of the sky
    *
    * https://library.sannybuilder.com/#/vc?q=04FA */
    ClearExtraColors(withFade: boolean): void;
    /** Starts spawning random cars at the specified location
    *
    * https://library.sannybuilder.com/#/vc?q=03C5 */
    CreateRandomCarForCarPark(x: float, y: float, z: float, heading: float): void;
    /** Creates a roadblock in the specified area
    *
    * https://library.sannybuilder.com/#/vc?q=04C0 */
    CreateScriptRoadblock(leftBottomX: float, leftBottomY: float, leftBottomZ: float, topRightX: float, topRightY: float, topRightZ: float): void;
    /** Creates a SWAT character coming down from a rope at the coordinates
    *
    * https://library.sannybuilder.com/#/vc?q=0503 */
    CreateSwatRope(x: float, y: float, z: float): void;
    /** Forces the game to spawn only pedestrians of the given type
    *
    * https://library.sannybuilder.com/#/vc?q=03DF */
    ForceRandomPedType(pedType: int): void;
    /** Returns appropriate coordinates for creating a pickup by a dead character
    *
    * https://library.sannybuilder.com/#/vc?q=04A5 */
    GetDeadCharPickupCoords(char: Char): {
        x: float;
        y: float;
        z: float;
    };
    /** Stores the ground position at the location
    *
    * https://library.sannybuilder.com/#/vc?q=02CE */
    GetGroundZFor3DCoord(x: float, y: float, z: float): float;
    GetRandomCarInSphereNoSaveRecursive(x: float, y: float, z: float, radius: float, findNext: boolean, skipWrecked: boolean): Car;
    /** Loops through the pool of vehicles to retrieve one that matches the specified model in the specified 2D area
    *
    * https://library.sannybuilder.com/#/vc?q=053E */
    GetRandomCarOfTypeInAreaNoSave(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, modelId: int): Car;
    GetRandomCharInSphereNoSaveRecursive(x: float, y: float, z: float, radius: float, findNext: boolean, skipDead: boolean): Char;
    /** Gets a random law enforcement ped of any of the specified types in the 2D area
    *
    * https://library.sannybuilder.com/#/vc?q=0469 */
    GetRandomCopInArea(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, cop: boolean, swat: boolean, fbi: boolean, army: boolean, vice: boolean): Char;
    GetRandomObjectInSphereNoSaveRecursive(x: float, y: float, z: float, radius: float, findNext: boolean): ScriptObject;
    /** Checks if glass has been shattered near the specified location
    *
    * https://library.sannybuilder.com/#/vc?q=0523 */
    HasGlassBeenShatteredNearby(x: float, y: float, z: float): boolean;
    /** Returns true if the pickup at the specified coordinates is available to be picked up
    *
    * https://library.sannybuilder.com/#/vc?q=048C */
    IsAnyPickupAtCoords(x: float, y: float, z: float): boolean;
    /** Returns true if there is anything with the specified properties within the 3D area
    *
    * https://library.sannybuilder.com/#/vc?q=0339 */
    IsAreaOccupied(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, solid: boolean, car: boolean, char: boolean, object: boolean, particle: boolean): boolean;
    /** Returns true if there is a vehicle in the specified area
    *
    * https://library.sannybuilder.com/#/vc?q=038A */
    IsPointObscuredByAMissionEntity(x: float, y: float, z: float, radiusX: float, radiusY: float, radiusZ: float): boolean;
    /** Returns true if a sniper bullet is in the specified area
    *
    * https://library.sannybuilder.com/#/vc?q=037E */
    IsSniperBulletInArea(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float): boolean;
    /** Removes all script fires (02CF)
    *
    * https://library.sannybuilder.com/#/vc?q=031A */
    RemoveAllScriptFires(): void;
    /** Stops processing of everything in the world to free up the game memory
    *
    * https://library.sannybuilder.com/#/vc?q=0545 */
    RemoveEverythingForHugeCutscene(): void;
    /** Removes all particle effects (02A2 or 039D) in the specified area
    *
    * https://library.sannybuilder.com/#/vc?q=03AE */
    RemoveParticleEffectsInArea(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float): void;
    /** Sets the quantity of traffic that will spawn in the game
    *
    * https://library.sannybuilder.com/#/vc?q=01EB */
    SetCarDensityMultiplier(multiplier: float): void;
    /** Sets the extra color of the sky
    *
    * https://library.sannybuilder.com/#/vc?q=04F9 */
    SetExtraColors(color: int, fade: boolean): void;
    /** Sets the quantity of pedestrians to spawn in the game
    *
    * https://library.sannybuilder.com/#/vc?q=03DE */
    SetPedDensityMultiplier(multiplier: float): void;
    /** Sets the scrollbar message at Hyman Memorial Stadium
    *
    * https://library.sannybuilder.com/#/vc?q=054D */
    SetTonightsEvent(scrollbarMessage: int): void;
    /** Sets the visibility of the object closest to the specified coordinates, matching the specified model
    *
    * https://library.sannybuilder.com/#/vc?q=0363 */
    SetVisibilityOfClosestObjectOfType(x: float, y: float, z: float, radius: float, modelId: int, state: boolean): void;
    /** Creates a vehicle with the model (no pre-loading needed) in front of the player
    *
    * https://library.sannybuilder.com/#/vc?q=0ADD */
    SpawnVehicleByCheating(modelId: int): void;
    /** Swaps a map model with another map model nearest to the center of the search area
    *
    * https://library.sannybuilder.com/#/vc?q=03B6 */
    SwapNearestBuildingModel(x: float, y: float, z: float, radius: float, fromModelId: int, toModelId: int): void;
    /** Sets whether the game should render the world or only the cutscene objects
    *
    * https://library.sannybuilder.com/#/vc?q=03B7 */
    SwitchProcessing(state: boolean): void;
    /** Toggles garbage on the streets
    *
    * https://library.sannybuilder.com/#/vc?q=03AD */
    SwitchRubbish(state: boolean): void;
    /** Unlocks all car doors in the specified rectangular area
    *
    * https://library.sannybuilder.com/#/vc?q=0591 */
    UnlockAllCarDoorsInArea(leftBottomX: float, leftBottomY: float, topRightX: float, topRightY: float): void;
}
declare var World: World
/** Game Map Areas Configuration
 * 
 * https://library.sannybuilder.com/#/vc/classes/Zone */
interface Zone {
    /** Gets a random character in the specified zone whose pedtype matches the specified values
    *
    * https://library.sannybuilder.com/#/vc?q=02DD */
    GetRandomChar(zone: string, civilian: boolean, gang: boolean, criminalOrProstitute: boolean): Char;
    /** Sets the zone's peds, gangs, and cops spawn density in car
    *
    * https://library.sannybuilder.com/#/vc?q=0152 */
    SetCarInfo(zone: string, dayOrNight: int, density: int, cuban: int, haitian: int, street: int, diaz: int, security: int, biker: int, player: int, golfer: int, gang9: int, cop: int): void;
    /** Sets the traffic density of cars and boats in the zone
    *
    * https://library.sannybuilder.com/#/vc?q=04EC */
    SetCivilianCarInfo(zone: string, dayOrNight: int, normal: int, poor: int, rich: int, exec: int, worker: int, big: int, taxi: int, moped: int, motorbike: int, leisureBoat: int, workerBoat: int): void;
    /** Assigns one of the ped groups defined in pedgrp.dat to the map zone
    *
    * https://library.sannybuilder.com/#/vc?q=0324 */
    SetGroup(zone: string, dayOrNight: int, pedGroup: int): void;
    /** Sets the zone's peds, gangs, and cops spawn density on foot
    *
    * https://library.sannybuilder.com/#/vc?q=015C */
    SetPedInfo(zone: string, dayOrNight: int, density: int, cuban: int, haitian: int, street: int, diaz: int, security: int, biker: int, player: int, golfer: int, gang9: int, cop: int): void;
}
declare var Zone: Zone
/** Boats
 * 
 * https://library.sannybuilder.com/#/vc/classes/Boat */
declare class Boat extends Car {
    constructor(handle: number);
    /** Makes the boat stay motionless in the water
    *
    * https://library.sannybuilder.com/#/vc?q=0323 */
    anchor(state: boolean): void;
    /** Makes the boat sail to the location
    *
    * https://library.sannybuilder.com/#/vc?q=02D3 */
    goto(x: float, y: float, z: float): void;
    /** Sets the boat's max speed
    *
    * https://library.sannybuilder.com/#/vc?q=02DB */
    setCruiseSpeed(maxSpeed: float): void;
    /** Turns off the car's engine
    *
    * https://library.sannybuilder.com/#/vc?q=02D4 */
    stop(): void;
}
/** Choppers
 * 
 * https://library.sannybuilder.com/#/vc/classes/Heli */
declare class Heli extends Car {
    constructor(handle: number);
    /** Resets the heli rotation set with 04D0
    *
    * https://library.sannybuilder.com/#/vc?q=04D1 */
    clearOrientation(): void;
    /** Makes the Hunter helicopter fire cannon gun
    *
    * https://library.sannybuilder.com/#/vc?q=0541 */
    fireHunterGun(): void;
    /** Makes the helicopter fly to the specified location, keeping a specific Z height/altitude
    *
    * https://library.sannybuilder.com/#/vc?q=04A2 */
    gotoCoords(x: float, y: float, z: float, speed: int): void;
    /** Makes helicopter simulate crash landing, exploding on the way if high up
    *
    * https://library.sannybuilder.com/#/vc?q=0564 */
    makeComeCrashingDown(): void;
    /** Forces the heli rotation relative to the north
    *
    * https://library.sannybuilder.com/#/vc?q=04D0 */
    setOrientation(angle: float): void;
    /** Limits the amount a helicopter can tilt
    *
    * https://library.sannybuilder.com/#/vc?q=04DF */
    setStabiliser(state: boolean): void;
}
/** Planes
 * 
 * https://library.sannybuilder.com/#/vc/classes/Plane */
declare class Plane extends Car {
    constructor(handle: number);
    /** Makes the AI fly the plane to the specified location
    *
    * https://library.sannybuilder.com/#/vc?q=04D2 */
    gotoCoords(x: float, y: float, z: float, speed: int): void;
}
/** Tanks
 * 
 * https://library.sannybuilder.com/#/vc/classes/Tank */
declare class Tank extends Car {
    constructor(handle: number);
    /** Sets the tank's ability to detonate vehicles on contact
    *
    * https://library.sannybuilder.com/#/vc?q=0493 */
    setDetonateCars(state: boolean): void;
}
