// Sanny Builder Library v0.99
/// <reference no-default-lib="true"/>
/// <reference lib="es5" />
/** Integer value */
type int = number & { _int: never };
/** Floating-point value */
type float = number & { _float: never };
/** Current host name */
declare var GAME: "re3" | "reVC" | "gta3" | "vc" | "sa";
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


/** Audio Effects
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Audio */
interface Audio {
    /** Unloads the mission audio (03CF), freeing game memory
    *
    * https://library.sannybuilder.com/#/gta3?q=040D */
    ClearMissionAudio(): void;
    /** Returns true if the audio (03CF) is no longer playing
    *
    * https://library.sannybuilder.com/#/gta3?q=03D2 */
    HasMissionAudioFinished(): boolean;
    /** Returns true if the mission audio has loaded (03CF)
    *
    * https://library.sannybuilder.com/#/gta3?q=03D0 */
    HasMissionAudioLoaded(): boolean;
    /** Loads the end of game music
    *
    * https://library.sannybuilder.com/#/gta3?q=0451 */
    LoadEndOfGameTune(): void;
    /** Loads the file from the audio directory
    *
    * https://library.sannybuilder.com/#/gta3?q=03CF */
    LoadMissionAudio(name: string): void;
    /** Plays the theme tune
    *
    * https://library.sannybuilder.com/#/gta3?q=043F */
    PlayEndOfGameTune(): void;
    /** Plays the loaded sound (03CF)
    *
    * https://library.sannybuilder.com/#/gta3?q=03D1 */
    PlayMissionAudio(): void;
    /** Plays an audio file with the specified ID from the Audio directory
    *
    * https://library.sannybuilder.com/#/gta3?q=0394 */
    PlayMissionPassedTune(soundId: int): void;
    /** Plays police radio message audio reporting the suspect has last been seen at the specified location
    *
    * https://library.sannybuilder.com/#/gta3?q=03AA */
    PoliceRadioMessage(x: float, y: float, z: float): void;
    /** Sets the location of the mission audio (03CF) where it can be heard
    *
    * https://library.sannybuilder.com/#/gta3?q=03D7 */
    SetMissionAudioPosition(x: float, y: float, z: float): void;
    /** Sets whether sounds should fade along with the screen
    *
    * https://library.sannybuilder.com/#/gta3?q=043C */
    SetMusicDoesFade(state: boolean): void;
    /** Sets the current radio station that is playing, if the player is in a vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=041E */
    SetRadioChannel(channel: int, startFromMs: int): void;
    /** Stops the theme tune
    *
    * https://library.sannybuilder.com/#/gta3?q=0440 */
    StopEndOfGameTune(): void;
}
declare var Audio: Audio
/** Markers and Radar Icons
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Blip */
declare class Blip {
    constructor(handle: number);
    /** Adds a blip and a marker to the vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=0186 */
    static AddForCar(vehicle: Car): Blip;
    /** Adds a blip with properties to the vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=0161 */
    static AddForCarOld(vehicle: Car, color: int, display: int): Blip;
    /** Adds a blip and a marker to the character
    *
    * https://library.sannybuilder.com/#/gta3?q=0187 */
    static AddForChar(char: Char): Blip;
    /** Adds a blip with properties to the character
    *
    * https://library.sannybuilder.com/#/gta3?q=0162 */
    static AddForCharOld(char: Char, color: int, display: int): Blip;
    /** Adds a blip to the contact point
    *
    * https://library.sannybuilder.com/#/gta3?q=0189 */
    static AddForContactPoint(x: float, y: float, z: float): Blip;
    /** Adds a blip to the location
    *
    * https://library.sannybuilder.com/#/gta3?q=018A */
    static AddForCoord(x: float, y: float, z: float): Blip;
    /** Adds a blip with properties at the location
    *
    * https://library.sannybuilder.com/#/gta3?q=0167 */
    static AddForCoordOld(x: float, y: float, z: float, colour: int, display: int): Blip;
    /** Adds a blip and a marker to the object
    *
    * https://library.sannybuilder.com/#/gta3?q=0188 */
    static AddForObject(object: ScriptObject): Blip;
    /** Adds a blip with properties to the object
    *
    * https://library.sannybuilder.com/#/gta3?q=0163 */
    static AddForObjectOld(object: ScriptObject, color: int, display: int): Blip;
    /** Adds a blip and a marker to the pickup
    *
    * https://library.sannybuilder.com/#/gta3?q=03DC */
    static AddForPickup(pickup: Pickup): Blip;
    /** Adds a blip with properties to the pickup
    *
    * https://library.sannybuilder.com/#/gta3?q=03DB */
    static AddForPickupOld(pickup: Pickup, color: int, display: int): Blip;
    /** Adds a sprite blip and a marker to the vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=02A4 */
    static AddSpriteForCar(vehicle: Car, sprite: int): Blip;
    /** Adds a sprite blip and a marker to the character
    *
    * https://library.sannybuilder.com/#/gta3?q=02A5 */
    static AddSpriteForChar(char: Char, sprite: int): Blip;
    /** Adds a sprite blip to the contact point
    *
    * https://library.sannybuilder.com/#/gta3?q=02A7 */
    static AddSpriteForContactPoint(x: float, y: float, z: float, sprite: int): Blip;
    /** Adds a sprite blip to the location
    *
    * https://library.sannybuilder.com/#/gta3?q=02A8 */
    static AddSpriteForCoord(x: float, y: float, z: float, sprite: int): Blip;
    /** Adds a sprite blip and a marker to the object
    *
    * https://library.sannybuilder.com/#/gta3?q=02A6 */
    static AddSpriteForObject(object: ScriptObject, sprite: int): Blip;
    /** Adds a sprite blip and a marker to the pickup
    *
    * https://library.sannybuilder.com/#/gta3?q=03DD */
    static AddSpriteForPickup(pickup: Pickup, sprite: int): Blip;
    /** Sets the blip's color
    *
    * https://library.sannybuilder.com/#/gta3?q=0165 */
    changeColor(color: int): void;
    /** Changes the display of the specified blip
    *
    * https://library.sannybuilder.com/#/gta3?q=018B */
    changeDisplay(display: int): void;
    /** Sets the blip's size
    *
    * https://library.sannybuilder.com/#/gta3?q=0168 */
    changeScale(size: int): void;
    /** Sets whether the blip should appear dimmed
    *
    * https://library.sannybuilder.com/#/gta3?q=0166 */
    dim(state: boolean): void;
    /** Removes the blip
    *
    * https://library.sannybuilder.com/#/gta3?q=0164 */
    remove(): void;
}
/** Camera/View Manipulation
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Camera */
interface Camera {
    /** Fades the screen for the specified time
    *
    * https://library.sannybuilder.com/#/gta3?q=016A */
    DoFade(time: int, direction: int): void;
    /** Gives camera control to the player
    *
    * https://library.sannybuilder.com/#/gta3?q=0452 */
    EnablePlayerControl(): void;
    /** Returns the debug camera position
    *
    * https://library.sannybuilder.com/#/gta3?q=0454 */
    GetDebugCoordinates(): {
        x: float;
        y: float;
        z: float;
    };
    /** Stores the debug camera front vector
    *
    * https://library.sannybuilder.com/#/gta3?q=0455 */
    GetDebugFrontVector(): {
        x: float;
        y: float;
        z: float;
    };
    /** Stores the location the debug camera is pointing to
    *
    * https://library.sannybuilder.com/#/gta3?q=0463 */
    GetDebugPointAt(): {
        x: float;
        y: float;
        z: float;
    };
    /** Returns true if the screen is fading (016A)
    *
    * https://library.sannybuilder.com/#/gta3?q=016B */
    GetFadingStatus(): boolean;
    /** Returns true if the camera is in widescreen mode
    *
    * https://library.sannybuilder.com/#/gta3?q=0603 */
    IsInWidescreenMode(): boolean;
    /** Returns true if any part of the radius of the specified point is visible on screen
    *
    * https://library.sannybuilder.com/#/gta3?q=00C2 */
    IsPointOnScreen(x: float, y: float, z: float, radius: float): boolean;
    /** Attaches the camera to the specified vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=0158 */
    PointAtCar(vehicle: Car, mode: int, switchStyle: int): void;
    /** Attaches the camera to the specified character
    *
    * https://library.sannybuilder.com/#/gta3?q=0159 */
    PointAtChar(char: Char, mode: int, switchStyle: int): void;
    /** Attaches the camera to the specified player
    *
    * https://library.sannybuilder.com/#/gta3?q=0157 */
    PointAtPlayer(player: Player, mode: int, switchStyle: int): void;
    /** Points the camera at the specified location and applies the position set by 0159
    *
    * https://library.sannybuilder.com/#/gta3?q=0160 */
    PointAtPoint(x: float, y: float, z: float, switchStyle: int): void;
    /** Restores the camera to its usual position
    *
    * https://library.sannybuilder.com/#/gta3?q=015A */
    Restore(): void;
    /** Restores the camera, putting it back behind the player
    *
    * https://library.sannybuilder.com/#/gta3?q=02EB */
    RestoreJumpcut(): void;
    /** Puts the camera behind the player
    *
    * https://library.sannybuilder.com/#/gta3?q=0373 */
    SetBehindPlayer(): void;
    /** Sets the RGB color of the fade command (016A)
    *
    * https://library.sannybuilder.com/#/gta3?q=0169 */
    SetFadingColor(r: int, g: int, b: int): void;
    /** Sets the camera's position and rotation
    *
    * https://library.sannybuilder.com/#/gta3?q=015F */
    SetFixedPosition(x: float, y: float, z: float, xRotation: float, yRotation: float, zRotation: float): void;
    /** Enables traffic spawn at the camera position, otherwise at the player position (default)
    *
    * https://library.sannybuilder.com/#/gta3?q=03EA */
    SetGenerateCarsAround(state: boolean): void;
    /** Puts the camera in front of the player, pointing towards the player
    *
    * https://library.sannybuilder.com/#/gta3?q=03C8 */
    SetInFrontOfPlayer(): void;
    /** Sets how long the camera transition will last
    *
    * https://library.sannybuilder.com/#/gta3?q=0460 */
    SetInterpolationParameters(_p1: float, time: int): void;
    /** Sets the motion blur (camera overlay color)
    *
    * https://library.sannybuilder.com/#/gta3?q=0374 */
    SetMotionBlur(type: int): void;
    /** Sets the near clip
    *
    * https://library.sannybuilder.com/#/gta3?q=041D */
    SetNearClip(value: float): void;
    /** Sets how far behind the camera is from the player
    *
    * https://library.sannybuilder.com/#/gta3?q=032A */
    SetZoom(zoom: int): void;
    /** Shakes the camera with the given intensity
    *
    * https://library.sannybuilder.com/#/gta3?q=0003 */
    Shake(intensity: int): void;
    /** Shakes the in-game camera if the camera's location is nearby the specified location
    *
    * https://library.sannybuilder.com/#/gta3?q=0136 */
    ShakeWithPoint(intensity: int, x: float, y: float, z: float): void;
}
declare var Camera: Camera
/** Script Vehicles
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Car */
declare class Car {
    constructor(handle: number);
    /** Creates a vehicle at the specified location, with the specified model
    *
    * https://library.sannybuilder.com/#/gta3?q=00A5 */
    static Create(modelId: int, x: float, y: float, z: float): Car;
    /** Returns the number of seats in the vehicle model
    *
    * https://library.sannybuilder.com/#/gta3?q=047D */
    static GetNumberOfSeatsInModel(modelId: int): int;
    /** Returns true if the handle is an invalid vehicle handle or the vehicle has been destroyed (wrecked)
    *
    * https://library.sannybuilder.com/#/gta3?q=0119 */
    static IsDead(handle: int): boolean;
    /** Returns true if the handle is a valid vehicle handle that is still alive (opposite of 0119)
    *
    * https://library.sannybuilder.com/#/gta3?q=00AC */
    static IsStillAlive(handle: int): boolean;
    /** Activates upside-down car check for the car
    *
    * https://library.sannybuilder.com/#/gta3?q=0190 */
    addUpsidedownCheck(): void;
    /** Arms the vehicle with a bomb of the given type (In SA, this command only supports the mobile version)
    *
    * https://library.sannybuilder.com/#/gta3?q=0242 */
    armWithBomb(bombType: int): void;
    /** Sets the car's primary and secondary colors
    *
    * https://library.sannybuilder.com/#/gta3?q=0229 */
    changeColor(primaryColor: int, secondaryColor: int): void;
    /** Sets the locked status of the car's doors (same as 020A)
    *
    * https://library.sannybuilder.com/#/gta3?q=0135 */
    changeLock(lockStatus: int): void;
    /** Clears the vehicle's last weapon damage (see 031E)
    *
    * https://library.sannybuilder.com/#/gta3?q=0468 */
    clearLastWeaponDamage(): void;
    /** Removes the vehicle from the game
    *
    * https://library.sannybuilder.com/#/gta3?q=00A6 */
    delete(): void;
    /** Removes the vehicle from the mission cleanup list, preventing it from being deleted when the mission ends
    *
    * https://library.sannybuilder.com/#/gta3?q=01C6 */
    dontRemove(): void;
    /** Makes the vehicle explode
    *
    * https://library.sannybuilder.com/#/gta3?q=020B */
    explode(): void;
    flash(state: boolean): void;
    /** Returns the handle of a character sitting in the specified car seat
    *
    * https://library.sannybuilder.com/#/gta3?q=0432 */
    getCharInPassengerSeat(seatIndex: int): Char;
    /** Gets the car's primary and secondary colors
    *
    * https://library.sannybuilder.com/#/gta3?q=03F3 */
    getColors(): {
        primaryColour: int;
        secondaryColour: int;
    };
    /** Returns the vehicle's coordinates
    *
    * https://library.sannybuilder.com/#/gta3?q=00AA */
    getCoordinates(): {
        x: float;
        y: float;
        z: float;
    };
    /** Returns the car's driver handle
    *
    * https://library.sannybuilder.com/#/gta3?q=046C */
    getDriver(): Char;
    /** Returns the X coord of the vehicle's angle
    *
    * https://library.sannybuilder.com/#/gta3?q=02F8 */
    getForwardX(): float;
    /** Returns the Y coord of the vehicle's angle
    *
    * https://library.sannybuilder.com/#/gta3?q=02F9 */
    getForwardY(): float;
    /** Returns the vehicle's heading (z-angle)
    *
    * https://library.sannybuilder.com/#/gta3?q=0174 */
    getHeading(): float;
    /** Returns the vehicle's health
    *
    * https://library.sannybuilder.com/#/gta3?q=0227 */
    getHealth(): int;
    /** Returns the maximum number of passengers that could sit in the car
    *
    * https://library.sannybuilder.com/#/gta3?q=01EA */
    getMaximumNumberOfPassengers(): int;
    /** Returns the car's model id
    *
    * https://library.sannybuilder.com/#/gta3?q=0441 */
    getModel(): int;
    /** Returns the number of passengers sitting in the car
    *
    * https://library.sannybuilder.com/#/gta3?q=01E9 */
    getNumberOfPassengers(): int;
    /** Returns the coordinates of an offset of the vehicle's position, depending on the vehicle's rotation
    *
    * https://library.sannybuilder.com/#/gta3?q=04C3 */
    getOffsetInWorldCoords(xOffset: float, yOffset: float, zOffset: float): {
        x: float;
        y: float;
        z: float;
    };
    /** Gets the car's speed
    *
    * https://library.sannybuilder.com/#/gta3?q=02E3 */
    getSpeed(): float;
    /** Makes the AI drive to the specified location by any means
    *
    * https://library.sannybuilder.com/#/gta3?q=00A7 */
    gotoCoordinates(x: float, y: float, z: float): void;
    /** Makes the AI drive to the specified location obeying the traffic rules
    *
    * https://library.sannybuilder.com/#/gta3?q=02C2 */
    gotoCoordinatesAccurate(x: float, y: float, z: float): void;
    /** Returns true if the vehicle has been hit by the specified weapon
    *
    * https://library.sannybuilder.com/#/gta3?q=031E */
    hasBeenDamagedByWeapon(weaponType: int): boolean;
    /** Returns true if the specified vehicle has a car bomb installed
    *
    * https://library.sannybuilder.com/#/gta3?q=0220 */
    isArmedWithAnyBomb(): boolean;
    /** Returns true if the vehicle is armed with a bomb of the specified status
    *
    * https://library.sannybuilder.com/#/gta3?q=0228 */
    isArmedWithBomb(status: int): boolean;
    /** Returns true if the vehicle is a boat
    *
    * https://library.sannybuilder.com/#/gta3?q=029C */
    isBoat(): boolean;
    /** Returns true if the specified vehicle has been crushed by the car crusher
    *
    * https://library.sannybuilder.com/#/gta3?q=0149 */
    isCrushed(): boolean;
    /** Returns true if the vehicle is wrecked and located within the specified 2D area
    *
    * https://library.sannybuilder.com/#/gta3?q=013B */
    isDeadInArea2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, drawSphere: boolean): boolean;
    /** Returns true if the vehicle is wrecked and located within the specified 3D area
    *
    * https://library.sannybuilder.com/#/gta3?q=013C */
    isDeadInArea3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, drawSphere: boolean): boolean;
    /** Returns true if the vehicle's door is present and closed
    *
    * https://library.sannybuilder.com/#/gta3?q=0415 */
    isDoorClosed(door: int): boolean;
    /** Returns true if the vehicle's primary color matches the specified color
    *
    * https://library.sannybuilder.com/#/gta3?q=031B */
    isFirstColor(color: int): boolean;
    /** Returns true if the car's health is over the specified value
    *
    * https://library.sannybuilder.com/#/gta3?q=0185 */
    isHealthGreater(health: int): boolean;
    /** Returns true if the vehicle's siren is on
    *
    * https://library.sannybuilder.com/#/gta3?q=0383 */
    isIcecreamJingleOn(): boolean;
    /** Returns true if the car is in the air
    *
    * https://library.sannybuilder.com/#/gta3?q=015E */
    isInAir(): boolean;
    /** Returns true if the vehicle is in the air
    *
    * https://library.sannybuilder.com/#/gta3?q=01F3 */
    isInAirProper(): boolean;
    /** Returns true if the vehicle is located within the specified 2D area
    *
    * https://library.sannybuilder.com/#/gta3?q=00B0 */
    isInArea2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, drawSphere: boolean): boolean;
    /** Returns true if the vehicle is located within the specified 3D area
    *
    * https://library.sannybuilder.com/#/gta3?q=00B1 */
    isInArea3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, drawSphere: boolean): boolean;
    /** Returns true if the vehicle is submerged in water
    *
    * https://library.sannybuilder.com/#/gta3?q=02BF */
    isInWater(): boolean;
    /** Returns true if the vehicle has the specified model
    *
    * https://library.sannybuilder.com/#/gta3?q=0137 */
    isModel(modelId: int): boolean;
    /** Returns true if the car is visible
    *
    * https://library.sannybuilder.com/#/gta3?q=02CA */
    isOnScreen(): boolean;
    /** Returns true if the specified car seat is empty
    *
    * https://library.sannybuilder.com/#/gta3?q=0431 */
    isPassengerSeatFree(seatIndex: int): boolean;
    /** Returns true if the vehicle's secondary color matches the specified color
    *
    * https://library.sannybuilder.com/#/gta3?q=031C */
    isSecondColor(color: int): boolean;
    /** Returns true if the vehicle is not moving
    *
    * https://library.sannybuilder.com/#/gta3?q=01C1 */
    isStopped(): boolean;
    isStoppedInArea2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, drawSphere: boolean): boolean;
    isStoppedInArea3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, drawSphere: boolean): boolean;
    /** Returns true if the car has been upside down for more than 2 seconds (requires 0190)
    *
    * https://library.sannybuilder.com/#/gta3?q=018F */
    isStuckOnRoof(): boolean;
    /** Returns true if the vehicle's model is Taxi (110), Cabbie (128), or Borgnine (148)
    *
    * https://library.sannybuilder.com/#/gta3?q=0295 */
    isTaxi(): boolean;
    /** Returns true if the vehicle is in the normal position (upright)
    *
    * https://library.sannybuilder.com/#/gta3?q=020D */
    isUpright(): boolean;
    /** Returns true if the car is upside down
    *
    * https://library.sannybuilder.com/#/gta3?q=01F4 */
    isUpsidedown(): boolean;
    /** Returns true if any of the car components is visibly damaged or lost
    *
    * https://library.sannybuilder.com/#/gta3?q=03C9 */
    isVisiblyDamaged(): boolean;
    locate2D(x: float, y: float, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    locate3D(x: float, y: float, z: float, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    locateStopped2D(x: float, y: float, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the car is stopped in the radius of the specified point
    *
    * https://library.sannybuilder.com/#/gta3?q=01B0 */
    locateStopped3D(x: float, y: float, z: float, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Sets the locked status of the car's doors
    *
    * https://library.sannybuilder.com/#/gta3?q=020A */
    lockDoors(lockStatus: int): void;
    /** Makes the car more resistant to physical damage
    *
    * https://library.sannybuilder.com/#/gta3?q=044F */
    makeABitStronger(state: boolean): void;
    /** Allows the vehicle to be deleted by the game if necessary, and also removes it from the mission cleanup list, if applicable
    *
    * https://library.sannybuilder.com/#/gta3?q=01C3 */
    markAsNoLongerNeeded(): void;
    /** Deactivates upside-down car check (0190) for the car
    *
    * https://library.sannybuilder.com/#/gta3?q=0191 */
    removeUpsidedownCheck(): void;
    /** Sets the driver and all passengers' objective to leave the vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=045F */
    setAllOccupantsLeave(): void;
    /** Sets whether the vehicle will avoid paths between levels (0426)
    *
    * https://library.sannybuilder.com/#/gta3?q=0428 */
    setAvoidLevelTransitions(state: boolean): void;
    /** Sets the car's big wheels property (unused)
    *
    * https://library.sannybuilder.com/#/gta3?q=0334 */
    setBigWheels(state: boolean): void;
    /** Set's the AI driver's mission to obstruct another's car pathway (similar to 00AF with BlockCarFaraway)
    *
    * https://library.sannybuilder.com/#/gta3?q=032D */
    setBlockCar(target: Car): void;
    /** Sets whether the car receives damage
    *
    * https://library.sannybuilder.com/#/gta3?q=03F5 */
    setCanBeDamaged(state: boolean): void;
    /** Enables or disables the ability to Pay'n'Spray the car
    *
    * https://library.sannybuilder.com/#/gta3?q=0294 */
    setCanRespray(state: boolean): void;
    /** Set's whether the AI driver will occupy the fast (left) lane on a two-way road
    *
    * https://library.sannybuilder.com/#/gta3?q=0466 */
    setChangeLane(state: boolean): void;
    /** Makes the vehicle harder to control
    *
    * https://library.sannybuilder.com/#/gta3?q=02D2 */
    setComedyControls(state: boolean): void;
    /** Puts the vehicle at the specified location
    *
    * https://library.sannybuilder.com/#/gta3?q=00AB */
    setCoordinates(x: float, y: float, z: float): void;
    /** Sets the vehicle's max speed
    *
    * https://library.sannybuilder.com/#/gta3?q=00AD */
    setCruiseSpeed(maxSpeed: float): void;
    /** Sets the behavior of the vehicle's AI driver
    *
    * https://library.sannybuilder.com/#/gta3?q=00AE */
    setDrivingStyle(drivingStyle: int): void;
    /** Makes the AI driver in the vehicle brake for the specified period of time
    *
    * https://library.sannybuilder.com/#/gta3?q=0479 */
    setHandbrakeStop(timeInMs: int): void;
    /** Makes the AI driver in the vehicle turn hard left and brake for the specified period of time
    *
    * https://library.sannybuilder.com/#/gta3?q=0477 */
    setHandbrakeTurnLeft(timeInMs: int): void;
    /** Makes the AI driver in the vehicle turn hard right and brake for the specified period of time
    *
    * https://library.sannybuilder.com/#/gta3?q=0478 */
    setHandbrakeTurnRight(timeInMs: int): void;
    /** Sets the vehicle's heading (z-angle)
    *
    * https://library.sannybuilder.com/#/gta3?q=0175 */
    setHeading(heading: float): void;
    /** Sets the vehicle's health
    *
    * https://library.sannybuilder.com/#/gta3?q=0224 */
    setHealth(health: int): void;
    /** Sets whether the car is heavy
    *
    * https://library.sannybuilder.com/#/gta3?q=01EC */
    setHeavy(state: boolean): void;
    /** Sets the car's mission to idle (MISSION_NONE), stopping any driving activity
    *
    * https://library.sannybuilder.com/#/gta3?q=00A9 */
    setIdle(): void;
    /** Prevents the vehicle from being despawned when the current level (island) changes
    *
    * https://library.sannybuilder.com/#/gta3?q=044E */
    setIgnoreLevelTransitions(state: boolean): void;
    /** Sets the mission of the vehicle's AI driver
    *
    * https://library.sannybuilder.com/#/gta3?q=00AF */
    setMission(carMission: int): void;
    /** Teleports the vehicle nearby the player's location
    *
    * https://library.sannybuilder.com/#/gta3?q=0450 */
    setOnPathToPlayer(): void;
    /** Makes a vehicle immune to everything except the player
    *
    * https://library.sannybuilder.com/#/gta3?q=02AA */
    setOnlyDamagedByPlayer(state: boolean): void;
    /** Sets the vehicle's immunities
    *
    * https://library.sannybuilder.com/#/gta3?q=02AC */
    setProofs(bulletProof: boolean, fireProof: boolean, explosionProof: boolean, collisionProof: boolean, meleeProof: boolean): void;
    /** Sets the AI driver's mission to ram another car (similar to 00AF with RamCarFaraway)
    *
    * https://library.sannybuilder.com/#/gta3?q=032C */
    setRamCar(target: Car): void;
    /** Sets the car's status
    *
    * https://library.sannybuilder.com/#/gta3?q=03A2 */
    setStatus(status: int): void;
    /** Forces the AI-controlled vehicle to stay on the current island
    *
    * https://library.sannybuilder.com/#/gta3?q=03FB */
    setStaysInCurrentLevel(state: boolean): void;
    /** Makes the car more resistant to collisions
    *
    * https://library.sannybuilder.com/#/gta3?q=03AB */
    setStrong(state: boolean): void;
    /** Sets whether the taxi's roof light is on
    *
    * https://library.sannybuilder.com/#/gta3?q=0216 */
    setTaxiLights(state: boolean): void;
    /** Overrides the default vehicle traction value of 1.0
    *
    * https://library.sannybuilder.com/#/gta3?q=0423 */
    setTraction(traction: float): void;
    /** Disables the car from exploding when it is upside down, as long as the player is not in the vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=03ED */
    setUpsidedownNotDamaged(state: boolean): void;
    /** Sets whether the vehicle is visible or not
    *
    * https://library.sannybuilder.com/#/gta3?q=0338 */
    setVisible(state: boolean): void;
    /** Makes the vehicle watertight, meaning characters inside will not be harmed if the vehicle is submerged in water
    *
    * https://library.sannybuilder.com/#/gta3?q=039C */
    setWatertight(state: boolean): void;
    /** Sets whether the car's alarm can be activated
    *
    * https://library.sannybuilder.com/#/gta3?q=0397 */
    switchSiren(state: boolean): void;
    /** Enables or disabled guns on the vehicle that has them (e.g. boats)
    *
    * https://library.sannybuilder.com/#/gta3?q=0412 */
    switchWeapons(state: boolean): void;
    /** Sets the car's heading so that it is facing the 2D coordinate
    *
    * https://library.sannybuilder.com/#/gta3?q=039F */
    turnToFaceCoord(x: float, y: float): void;
    /** Clears any current tasks the vehicle has and makes it drive around aimlessly
    *
    * https://library.sannybuilder.com/#/gta3?q=00A8 */
    wanderRandomly(): void;
}
/** Parking Lots
 * 
 * https://library.sannybuilder.com/#/gta3/classes/CarGenerator */
declare class CarGenerator {
    constructor(handle: number);
    /** Initializes a parked car generator
    *
    * https://library.sannybuilder.com/#/gta3?q=014B */
    static Create(x: float, y: float, z: float, heading: float, modelId: int, primaryColor: int, secondaryColor: int, forceSpawn: boolean, alarmChance: int, doorLockChance: int, minDelay: int, maxDelay: int): CarGenerator;
    /** Specifies the number of times the car generator spawns a car (101 - infinite)
    *
    * https://library.sannybuilder.com/#/gta3?q=014C */
    switch(amount: int): void;
}
/** Hardcoded Catalina's Heli from the Final Mission
 * 
 * https://library.sannybuilder.com/#/gta3/classes/CatalinaHeli */
interface CatalinaHeli {
    /** Returns the handle of the heli created with 03B2
    *
    * https://library.sannybuilder.com/#/gta3?q=03B9 */
    Grab(): Car;
    /** Makes the heli in the 'The Exchange' mission fly high in the sky
    *
    * https://library.sannybuilder.com/#/gta3?q=03BE */
    FlyAway(): void;
    /** Returns true if the player damaged the heli flying in the 'The Exchange' mission
    *
    * https://library.sannybuilder.com/#/gta3?q=03B5 */
    HasBeenShotDown(): boolean;
    /** Deletes the heli flying in the 'The Exchange' mission
    *
    * https://library.sannybuilder.com/#/gta3?q=03B4 */
    Remove(): void;
    /** Creates a heli flying in the 'The Exchange' mission 
    *
    * https://library.sannybuilder.com/#/gta3?q=03B2 */
    Start(): void;
    /** Makes the heli in the 'The Exchange' mission take off
    *
    * https://library.sannybuilder.com/#/gta3?q=03B3 */
    TakeOff(): void;
}
declare var CatalinaHeli: CatalinaHeli
/** Script Characters (Actors)
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Char */
declare class Char {
    constructor(handle: number);
    /** Creates a character at the specified location, with the specified model and pedtype
    *
    * https://library.sannybuilder.com/#/gta3?q=009A */
    static Create(pedType: int, modelId: int, x: float, y: float, z: float): Char;
    /** Creates a character with the specified model in the passenger seat of the vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=01C8 */
    static CreateAsPassenger(vehicle: Car, pedType: int, modelId: int, seatId: int): Char;
    /** Creates a character in the driver's seat of the vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=0129 */
    static CreateInsideCar(vehicle: Car, pedType: int, modelId: int): Char;
    /** Creates a character with a randomised model and pedtype at the specified coordinates
    *
    * https://library.sannybuilder.com/#/gta3?q=0376 */
    static CreateRandom(x: float, y: float, z: float): Char;
    /** Returns true if the handle is an invalid character handle or the character is dead (wasted)
    *
    * https://library.sannybuilder.com/#/gta3?q=0118 */
    static IsDead(handle: int): boolean;
    /** Returns true if the handle is a valid character handle who is still alive (opposite of 0118)
    *
    * https://library.sannybuilder.com/#/gta3?q=00A2 */
    static IsStillAlive(handle: int): boolean;
    /** Sets a multiplier for the range of a character's ability to go and occupy a vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=0481 */
    static SetEnterCarRangeMultiplier(value: float): void;
    /** Sets a multiplier for the range of a character's ability to react on deadly events around
    *
    * https://library.sannybuilder.com/#/gta3?q=0482 */
    static SetThreatReactionRangeMultiplier(value: float): void;
    /** Adds the specified amount of ammo to the character's weapon, if the character has the weapon
    *
    * https://library.sannybuilder.com/#/gta3?q=0114 */
    addAmmo(weaponType: int, ammo: int): void;
    /** Increases the character's armor by the specified value to the maximum of 100.0
    *
    * https://library.sannybuilder.com/#/gta3?q=035F */
    addArmor(amount: int): void;
    /** Puts character into a turret on the vehicle, allowing them to shoot
    *
    * https://library.sannybuilder.com/#/gta3?q=0464 */
    attachToCar(vehicle: Car, xOffset: float, yOffset: float, zOffset: float, position: int, angleLimit: float, weaponType: int): void;
    /** Returns true if the character sees a dead body of the given type
    *
    * https://library.sannybuilder.com/#/gta3?q=0480 */
    canSeeDeadChar(pedType: int): boolean;
    /** Clears the character's last weapon damage (see 031D)
    *
    * https://library.sannybuilder.com/#/gta3?q=0467 */
    clearLastWeaponDamage(): void;
    /** Resets character's hostility to other ped types (011A)
    *
    * https://library.sannybuilder.com/#/gta3?q=01ED */
    clearThreatSearch(): void;
    /** Removes the character from the game and mission cleanup list, freeing game memory
    *
    * https://library.sannybuilder.com/#/gta3?q=009B */
    delete(): void;
    /** Removes the character from turret mode (0464)
    *
    * https://library.sannybuilder.com/#/gta3?q=0465 */
    detachFromCar(): void;
    /** Removes the character from the mission cleanup list, preventing it from being deleted when the mission ends
    *
    * https://library.sannybuilder.com/#/gta3?q=01C5 */
    dontRemove(): void;
    /** Respawns the character using the model requested with 0352
    *
    * https://library.sannybuilder.com/#/gta3?q=0353 */
    dress(): void;
    /** Dismembers the character
    *
    * https://library.sannybuilder.com/#/gta3?q=0321 */
    explodeHead(): void;
    flash(state: boolean): void;
    /** Sets the character's follow path
    *
    * https://library.sannybuilder.com/#/gta3?q=009E */
    followPath(x: float, y: float, z: float): void;
    /** Gets the amount of ammo in the specified weapon of the character
    *
    * https://library.sannybuilder.com/#/gta3?q=041A */
    getAmmoInWeapon(weaponType: int): int;
    /** Returns the character's armor amount
    *
    * https://library.sannybuilder.com/#/gta3?q=04DD */
    getArmour(): int;
    /** Returns the character's coordinates
    *
    * https://library.sannybuilder.com/#/gta3?q=00A0 */
    getCoordinates(): {
        x: float;
        y: float;
        z: float;
    };
    /** Returns the type of weapon that the character is currently holding
    *
    * https://library.sannybuilder.com/#/gta3?q=0470 */
    getCurrentWeapon(): int;
    /** Returns the character's heading (z-angle)
    *
    * https://library.sannybuilder.com/#/gta3?q=0172 */
    getHeading(): float;
    /** Returns the character's health
    *
    * https://library.sannybuilder.com/#/gta3?q=0226 */
    getHealth(): int;
    /** Returns the number of members which are in a group of the character (01DE)
    *
    * https://library.sannybuilder.com/#/gta3?q=046D */
    getNumberOfFollowers(): int;
    /** Returns the coordinates of the character, with an offset
    *
    * https://library.sannybuilder.com/#/gta3?q=04C4 */
    getOffsetInWorldCoords(xOffset: float, yOffset: float, zOffset: float): {
        x: float;
        y: float;
        z: float;
    };
    /** Gives the character the weapon with the specified amount of ammo
    *
    * https://library.sannybuilder.com/#/gta3?q=01B2 */
    giveWeapon(weaponType: int, ammo: int): void;
    /** Returns true if the character has been hit by the specified weapon
    *
    * https://library.sannybuilder.com/#/gta3?q=031D */
    hasBeenDamagedByWeapon(weaponType: int): boolean;
    /** Returns true if the character can see the target character
    *
    * https://library.sannybuilder.com/#/gta3?q=0364 */
    hasSpottedChar(target: Char): boolean;
    /** Returns true if the character has seen the specified player
    *
    * https://library.sannybuilder.com/#/gta3?q=0123 */
    hasSpottedPlayer(player: Player): boolean;
    /** Returns true if the character is holding the given type of weapon
    *
    * https://library.sannybuilder.com/#/gta3?q=02D8 */
    isCurrentWeapon(weaponType: int): boolean;
    /** Returns true if the character's health is over the specified value
    *
    * https://library.sannybuilder.com/#/gta3?q=0184 */
    isHealthGreater(health: int): boolean;
    /** Returns true if the character has a vehicle, even if they are not actually sat inside it (opening and closing the door)
    *
    * https://library.sannybuilder.com/#/gta3?q=00DF */
    isInAnyCar(): boolean;
    /** Returns true if the character is within the specified 2D area
    *
    * https://library.sannybuilder.com/#/gta3?q=00A3 */
    isInArea2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the specified 3D area
    *
    * https://library.sannybuilder.com/#/gta3?q=00A4 */
    isInArea3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the specified 2D area in a vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=01A2 */
    isInAreaInCar2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the specified 3D area in a vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=01A7 */
    isInAreaInCar3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the specified 2D area on foot
    *
    * https://library.sannybuilder.com/#/gta3?q=01A1 */
    isInAreaOnFoot2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the specified 3D area on foot
    *
    * https://library.sannybuilder.com/#/gta3?q=01A6 */
    isInAreaOnFoot3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, drawSphere: boolean): boolean;
    /** Returns true if the character is in the specified vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=00DB */
    isInCar(vehicle: Car): boolean;
    /** Returns true if the character is part of the leader's group (01DE)
    *
    * https://library.sannybuilder.com/#/gta3?q=031F */
    isInCharsGroup(leader: Char): boolean;
    /** Returns true if the character can move
    *
    * https://library.sannybuilder.com/#/gta3?q=03E9 */
    isInControl(): boolean;
    /** Returns true if the character is driving a vehicle with the specified model
    *
    * https://library.sannybuilder.com/#/gta3?q=00DD */
    isInModel(modelId: int): boolean;
    /** Returns true if the character is part of the leader's group (01DF)
    *
    * https://library.sannybuilder.com/#/gta3?q=0320 */
    isInPlayersGroup(leader: Player): boolean;
    /** Returns true if the character is in the specified map zone
    *
    * https://library.sannybuilder.com/#/gta3?q=0154 */
    isInZone(zone: string): boolean;
    /** Returns true if the character has fallen
    *
    * https://library.sannybuilder.com/#/gta3?q=047F */
    isLyingDown(): boolean;
    /** Returns true if the character is male
    *
    * https://library.sannybuilder.com/#/gta3?q=03A3 */
    isMale(): boolean;
    /** Returns true if the character's model ID is equivalent to the model ID passed
    *
    * https://library.sannybuilder.com/#/gta3?q=02F2 */
    isModel(modelId: int): boolean;
    /** Returns true if the character has completed their objective
    *
    * https://library.sannybuilder.com/#/gta3?q=0126 */
    isObjectivePassed(): boolean;
    /** Returns true if the character is driving a bike
    *
    * https://library.sannybuilder.com/#/gta3?q=047A */
    isOnAnyBike(): boolean;
    /** Returns true if the character is on foot, and not occupying a vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=044B */
    isOnFoot(): boolean;
    /** Returns true if the character is visible
    *
    * https://library.sannybuilder.com/#/gta3?q=02CB */
    isOnScreen(): boolean;
    /** Returns true if the character is firing a weapon
    *
    * https://library.sannybuilder.com/#/gta3?q=02E0 */
    isShooting(): boolean;
    /** Returns true if the character fired a weapon within the specified 2D area
    *
    * https://library.sannybuilder.com/#/gta3?q=02D6 */
    isShootingInArea(leftBottomX: float, leftBottomY: float, topRightX: float, topRightY: float, drawSphere: boolean): boolean;
    /** Returns true if the character is sitting in any vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=0449 */
    isSittingInAnyCar(): boolean;
    /** Returns true if the character is sitting in the specified vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=0448 */
    isSittingInCar(vehicle: Car): boolean;
    /** Returns true if the character is not moving
    *
    * https://library.sannybuilder.com/#/gta3?q=02A0 */
    isStopped(): boolean;
    /** Returns true if the character stopped within the specified 2D area
    *
    * https://library.sannybuilder.com/#/gta3?q=01A3 */
    isStoppedInArea2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, drawSphere: boolean): boolean;
    /** Returns true if the character stopped within the specified 3D area
    *
    * https://library.sannybuilder.com/#/gta3?q=01A8 */
    isStoppedInArea3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, drawSphere: boolean): boolean;
    /** Returns true if the character stopped within the specified 2D area in a vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=01A5 */
    isStoppedInAreaInCar2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, drawSphere: boolean): boolean;
    /** Returns true if the character stopped within the specified 3D area in a vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=01AA */
    isStoppedInAreaInCar3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, drawSphere: boolean): boolean;
    /** Returns true if the character stopped within the specified 2D area on foot
    *
    * https://library.sannybuilder.com/#/gta3?q=01A4 */
    isStoppedInAreaOnFoot2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, drawSphere: boolean): boolean;
    /** Returns true if the character stopped within the specified 3D area on foot
    *
    * https://library.sannybuilder.com/#/gta3?q=01A9 */
    isStoppedInAreaOnFoot3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, drawSphere: boolean): boolean;
    /** Returns true if the character is colliding with the specified object
    *
    * https://library.sannybuilder.com/#/gta3?q=0179 */
    isTouchingObject(object: ScriptObject): boolean;
    /** Returns true if the character is colliding with the specified object on foot
    *
    * https://library.sannybuilder.com/#/gta3?q=023B */
    isTouchingObjectOnFoot(object: ScriptObject): boolean;
    /** Makes the character stop following the leader (01DE or 01DF)
    *
    * https://library.sannybuilder.com/#/gta3?q=01E0 */
    leaveGroup(): void;
    /** Returns true if the character is within the 2D radius of the coordinates point
    *
    * https://library.sannybuilder.com/#/gta3?q=00EC */
    locateAnyMeans2D(x: float, y: float, xRadius: float, yRadius: float, drawSphere: Sphere): boolean;
    /** Returns true if the character is within the 3D radius of the coordinates point
    *
    * https://library.sannybuilder.com/#/gta3?q=00FE */
    locateAnyMeans3D(x: float, y: float, z: float, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 2D radius of the vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=0202 */
    locateAnyMeansCar2D(vehicle: Car, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 3D radius of the vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=0205 */
    locateAnyMeansCar3D(vehicle: Car, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 2D radius of the other character
    *
    * https://library.sannybuilder.com/#/gta3?q=00F2 */
    locateAnyMeansChar2D(target: Char, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 3D radius of the other character
    *
    * https://library.sannybuilder.com/#/gta3?q=0104 */
    locateAnyMeansChar3D(target: Char, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 2D radius of the object
    *
    * https://library.sannybuilder.com/#/gta3?q=0471 */
    locateAnyMeansObject2D(object: ScriptObject, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 3D radius of the object
    *
    * https://library.sannybuilder.com/#/gta3?q=0474 */
    locateAnyMeansObject3D(object: ScriptObject, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 2D radius of the coordinates point in a vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=00EE */
    locateInCar2D(x: float, y: float, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 3D radius of the coordinates point in a vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=0100 */
    locateInCar3D(x: float, y: float, z: float, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 2D radius of the vehicle in a vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=0204 */
    locateInCarCar2D(handle: Car, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 3D radius of the vehicle in a vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=0207 */
    locateInCarCar3D(vehicle: Car, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 2D radius of the other character in a vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=00F4 */
    locateInCarChar2D(otherChar: Char, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 3D radius of the other character in a vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=0106 */
    locateInCarChar3D(target: Char, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 2D radius of the object in a vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=0473 */
    locateInCarObject2D(object: ScriptObject, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 3D radius of the object in a vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=0476 */
    locateInCarObject3D(object: ScriptObject, xRadius: float, yRadius: float, zRadius: float, drawSphere: int): boolean;
    /** Returns true if the character is within the 2D radius of the coordinates point on foot
    *
    * https://library.sannybuilder.com/#/gta3?q=00ED */
    locateOnFoot2D(x: float, y: float, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 3D radius of the coordinates point on foot
    *
    * https://library.sannybuilder.com/#/gta3?q=00FF */
    locateOnFoot3D(x: float, y: float, z: float, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 2D radius of the vehicle on foot
    *
    * https://library.sannybuilder.com/#/gta3?q=0203 */
    locateOnFootCar2D(vehicle: Car, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 3D radius of the vehicle on foot
    *
    * https://library.sannybuilder.com/#/gta3?q=0206 */
    locateOnFootCar3D(vehicle: Car, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 2D radius of the other character on foot
    *
    * https://library.sannybuilder.com/#/gta3?q=00F3 */
    locateOnFootChar2D(target: Char, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 3D radius of the other character on foot
    *
    * https://library.sannybuilder.com/#/gta3?q=0105 */
    locateOnFootChar3D(target: Char, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 2D radius of the object on foot
    *
    * https://library.sannybuilder.com/#/gta3?q=0472 */
    locateOnFootObject2D(object: ScriptObject, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 3D radius of the object on foot
    *
    * https://library.sannybuilder.com/#/gta3?q=0475 */
    locateOnFootObject3D(object: ScriptObject, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character stopped within the 2D radius of the coordinates point
    *
    * https://library.sannybuilder.com/#/gta3?q=00EF */
    locateStoppedAnyMeans2D(x: float, y: float, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character stopped within the 3D radius of the coordinates point
    *
    * https://library.sannybuilder.com/#/gta3?q=0101 */
    locateStoppedAnyMeans3D(x: float, y: float, z: float, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character stopped within the 2D radius of the coordinates point in a vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=00F1 */
    locateStoppedInCar2D(x: float, y: float, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character stopped within the 3D radius of the coordinates point in a vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=0103 */
    locateStoppedInCar3D(x: float, y: float, z: float, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character stopped within the 2D radius of the coordinates point on foot
    *
    * https://library.sannybuilder.com/#/gta3?q=00F0 */
    locateStoppedOnFoot2D(x: float, y: float, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character stopped within the 3D radius of the coordinates point on foot
    *
    * https://library.sannybuilder.com/#/gta3?q=0102 */
    locateStoppedOnFoot3D(x: float, y: float, z: float, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Makes the character to keep looking at the direction of the other character
    *
    * https://library.sannybuilder.com/#/gta3?q=022C */
    lookAtCharAlways(target: Char): void;
    /** Makes the character to keep looking at the direction of the player
    *
    * https://library.sannybuilder.com/#/gta3?q=022D */
    lookAtPlayerAlways(target: Player): void;
    /** Allows the character to be deleted by the game if necessary, and also removes them from the mission cleanup list, if applicable
    *
    * https://library.sannybuilder.com/#/gta3?q=01C2 */
    markAsNoLongerNeeded(): void;
    /** Sets the character to play a certain action
    *
    * https://library.sannybuilder.com/#/gta3?q=0673 */
    playAnimation(groupId: int, animId: int, blend: float): void;
    /** Removes the character with a fade, freeing game memory
    *
    * https://library.sannybuilder.com/#/gta3?q=034F */
    removeElegantly(): void;
    /** Affects how often the character will hit the target when attacking with a weapon
    *
    * https://library.sannybuilder.com/#/gta3?q=02E2 */
    setAccuracy(accuracy: int): void;
    /** Sets the amount of ammo the character has in the specified weapon
    *
    * https://library.sannybuilder.com/#/gta3?q=017B */
    setAmmo(weaponType: int, ammo: int): void;
    /** Sets the animation group for the character
    *
    * https://library.sannybuilder.com/#/gta3?q=0245 */
    setAnimGroup(animGroup: int): void;
    /** Makes the character perform an animation at the specified speed
    *
    * https://library.sannybuilder.com/#/gta3?q=0393 */
    setAnimSpeed(animSpeed: float): void;
    /** Makes the character follow the leader player
    *
    * https://library.sannybuilder.com/#/gta3?q=01DF */
    setAsLeader(leader: Player): void;
    /** Makes a character bleed
    *
    * https://library.sannybuilder.com/#/gta3?q=0332 */
    setBleeding(state: boolean): void;
    /** Locks the character while in a car
    *
    * https://library.sannybuilder.com/#/gta3?q=039E */
    setCantBeDraggedOut(state: boolean): void;
    /** Puts the character at the specified location
    *
    * https://library.sannybuilder.com/#/gta3?q=00A1 */
    setCoordinates(x: float, y: float, z: float): void;
    /** Sets the character's currently held weapon
    *
    * https://library.sannybuilder.com/#/gta3?q=01B9 */
    setCurrentWeapon(weaponType: int): void;
    /** Sets the character's heading (z-angle)
    *
    * https://library.sannybuilder.com/#/gta3?q=0173 */
    setHeading(heading: float): void;
    /** Sets the character's health
    *
    * https://library.sannybuilder.com/#/gta3?q=0223 */
    setHealth(health: int): void;
    /** Makes the character attack whoever attacks them
    *
    * https://library.sannybuilder.com/#/gta3?q=0291 */
    setHeedThreats(state: boolean): void;
    /** Sets the character's objective to stay idle
    *
    * https://library.sannybuilder.com/#/gta3?q=009F */
    setIdle(): void;
    /** Prevents the character from being despawned when the current level (island) changes
    *
    * https://library.sannybuilder.com/#/gta3?q=0438 */
    setIgnoreLevelTransitions(state: boolean): void;
    /** Sets whether the character is a psychotic killer or not
    *
    * https://library.sannybuilder.com/#/gta3?q=0433 */
    setIsChrisCriminal(state: boolean): void;
    /** Sets the character's objective to enter a nearby train
    *
    * https://library.sannybuilder.com/#/gta3?q=032E */
    setObjCatchTrain(): void;
    /** Sets the character's objective to destroy the vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=01D9 */
    setObjDestroyCar(vehicle: Car): void;
    /** Sets the character's objective to enter the vehicle as a driver
    *
    * https://library.sannybuilder.com/#/gta3?q=01D5 */
    setObjEnterCarAsDriver(vehicle: Car): void;
    /** Sets the character's objective to enter the vehicle as a passenger
    *
    * https://library.sannybuilder.com/#/gta3?q=01D4 */
    setObjEnterCarAsPassenger(vehicle: Car): void;
    /** Makes the character leave their car and run away from it
    *
    * https://library.sannybuilder.com/#/gta3?q=046B */
    setObjFleeCar(vehicle: Car): void;
    /** Sets the character's objective to walk away forever and stay away from the target character
    *
    * https://library.sannybuilder.com/#/gta3?q=01CF */
    setObjFleeCharOnFootAlways(target: Char): void;
    /** Sets the character's objective to escape on foot and stay away from the target character until safe
    *
    * https://library.sannybuilder.com/#/gta3?q=01CD */
    setObjFleeCharOnFootTillSafe(target: Char): void;
    /** Sets the character's objective to run away
    *
    * https://library.sannybuilder.com/#/gta3?q=0193 */
    setObjFleeOnFootTillSafe(): void;
    /** Sets the character's objective to walk away forever and stay away from the target player
    *
    * https://library.sannybuilder.com/#/gta3?q=01D0 */
    setObjFleePlayerOnFootAlways(target: Player): void;
    /** Sets the character's objective to escape on foot and stay away from the target player until it is safe
    *
    * https://library.sannybuilder.com/#/gta3?q=01CE */
    setObjFleePlayerOnFootTillSafe(target: Player): void;
    /** Sets the character's objective to escort the leader character
    *
    * https://library.sannybuilder.com/#/gta3?q=030B */
    setObjFollowCharInFormation(leader: Char, formationType: int): void;
    /** Sets the character's objective to follow along the specified route
    *
    * https://library.sannybuilder.com/#/gta3?q=01E1 */
    setObjFollowRoute(routeId: int, mode: int): void;
    /** Sets the character's objective to walk to or drive into the specified area
    *
    * https://library.sannybuilder.com/#/gta3?q=029D */
    setObjGotoAreaAnyMeans(leftBottomX: float, leftBottomY: float, topRightX: float, topRightY: float): void;
    /** Sets the character's objective to walk into the specified 2D area
    *
    * https://library.sannybuilder.com/#/gta3?q=01DA */
    setObjGotoAreaOnFoot(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float): void;
    /** Sets the character's objective to walk towards the target character
    *
    * https://library.sannybuilder.com/#/gta3?q=01D1 */
    setObjGotoCharOnFoot(target: Char): void;
    /** Sets the character's objective to walk at the specified location
    *
    * https://library.sannybuilder.com/#/gta3?q=0211 */
    setObjGotoCoordOnFoot(x: float, y: float): void;
    /** Sets the character's objective to walk towards the target player
    *
    * https://library.sannybuilder.com/#/gta3?q=01D2 */
    setObjGotoPlayerOnFoot(target: Player): void;
    /** Sets the character's objective to guard the specified 2D area
    *
    * https://library.sannybuilder.com/#/gta3?q=0195 */
    setObjGuardArea(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float): void;
    /** Sets the character's objective to guard the specified location
    *
    * https://library.sannybuilder.com/#/gta3?q=0194 */
    setObjGuardSpot(x: float, y: float, z: float): void;
    /** Sets the character's objective to hail a taxi
    *
    * https://library.sannybuilder.com/#/gta3?q=0365 */
    setObjHailTaxi(): void;
    /** Sets the character's objective to attack the specified character
    *
    * https://library.sannybuilder.com/#/gta3?q=01CB */
    setObjKillCharAnyMeans(target: Char): void;
    /** Sets the character's objective to attack the other character on foot
    *
    * https://library.sannybuilder.com/#/gta3?q=01C9 */
    setObjKillCharOnFoot(target: Char): void;
    /** Sets the character's objective to attack the player
    *
    * https://library.sannybuilder.com/#/gta3?q=01CC */
    setObjKillPlayerAnyMeans(target: Player): void;
    /** Sets the character's objective to attack the player on foot
    *
    * https://library.sannybuilder.com/#/gta3?q=01CA */
    setObjKillPlayerOnFoot(target: Player): void;
    /** Sets the character's objective to leave the vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=01D3 */
    setObjLeaveCar(vehicle: Car): void;
    /** Clears the character's current objective
    *
    * https://library.sannybuilder.com/#/gta3?q=011C */
    setObjNoObj(): void;
    /** Sets the character's objective to run into the specified 2D area
    *
    * https://library.sannybuilder.com/#/gta3?q=0238 */
    setObjRunToArea(leftBottomX: float, leftBottomY: float, topRightX: float, topRightY: float): void;
    /** Sets the character's objective to run at the specified location
    *
    * https://library.sannybuilder.com/#/gta3?q=0239 */
    setObjRunToCoord(x: float, y: float): void;
    /** Sets the character's objective to find any traffic vehicle nearby and take the driver's seat
    *
    * https://library.sannybuilder.com/#/gta3?q=0377 */
    setObjStealAnyCar(): void;
    /** Sets the character's objective to stay in a vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=0196 */
    setObjWaitInCar(): void;
    /** Sets the character's objective to stay idle on foot
    *
    * https://library.sannybuilder.com/#/gta3?q=0192 */
    setObjWaitOnFoot(): void;
    /** Makes a character immune to everything except the player
    *
    * https://library.sannybuilder.com/#/gta3?q=02A9 */
    setOnlyDamagedByPlayer(state: boolean): void;
    /** Sets the ped stat of the character
    *
    * https://library.sannybuilder.com/#/gta3?q=0243 */
    setPersonality(pedstat: int): void;
    /** Sets the character's immunities
    *
    * https://library.sannybuilder.com/#/gta3?q=02AB */
    setProofs(bulletProof: boolean, fireProof: boolean, explosionProof: boolean, collisionProof: boolean, meleeProof: boolean): void;
    /** Makes the character run
    *
    * https://library.sannybuilder.com/#/gta3?q=0319 */
    setRunning(state: boolean): void;
    /** Makes the character shout once (sound ids 95, 96, 101, 103, 104, 105)
    *
    * https://library.sannybuilder.com/#/gta3?q=041C */
    setSay(soundId: int): void;
    /** Makes the character maintain their position when attacked
    *
    * https://library.sannybuilder.com/#/gta3?q=0350 */
    setStayInSamePlace(state: boolean): void;
    /** Forces the AI-controlled character to stay on the current island
    *
    * https://library.sannybuilder.com/#/gta3?q=03FC */
    setStaysInCurrentLevel(state: boolean): void;
    /** Sets whether the specified character is immune to headshots
    *
    * https://library.sannybuilder.com/#/gta3?q=0446 */
    setSuffersCriticalHits(state: boolean): void;
    /** Sets the character's hostility to other ped types
    *
    * https://library.sannybuilder.com/#/gta3?q=011A */
    setThreatSearch(pedThreat: int): void;
    /** Sets whether the character should follow paths set for pedestrians
    *
    * https://library.sannybuilder.com/#/gta3?q=0411 */
    setUsePednodeSeek(state: boolean): void;
    /** Sets whether the character is visible or not
    *
    * https://library.sannybuilder.com/#/gta3?q=0337 */
    setVisible(state: boolean): void;
    /** Puts the character in the idle state for the given period of time
    *
    * https://library.sannybuilder.com/#/gta3?q=0372 */
    setWaitState(stateId: int, timeInMs: int): void;
    /** Makes the character to stop looking at the other character (022C) or player (022D)
    *
    * https://library.sannybuilder.com/#/gta3?q=022F */
    stopLooking(): void;
    /** Returns the current vehicle of the character and adds it to the mission cleanup list
    *
    * https://library.sannybuilder.com/#/gta3?q=00D9 */
    storeCarIsIn(): Car;
    /** Returns the character's vehicle handle without marking it as used by the script, therefore allowing it to be deleted by the game at any time
    *
    * https://library.sannybuilder.com/#/gta3?q=03C0 */
    storeCarIsInNoSave(): Car;
    /** Rotates the character to face the other character
    *
    * https://library.sannybuilder.com/#/gta3?q=020E */
    turnToFaceChar(char: Char): void;
    /** Rotates the character to face the location
    *
    * https://library.sannybuilder.com/#/gta3?q=01BE */
    turnToFaceCoord(x: float, y: float, z: float): void;
    /** Rotates the character to face the player
    *
    * https://library.sannybuilder.com/#/gta3?q=020F */
    turnToFacePlayer(player: Player): void;
    /** Removes the character and requests a new special model to load
    *
    * https://library.sannybuilder.com/#/gta3?q=0352 */
    undress(modelName: string): void;
    /** Sets the character's wander direction
    *
    * https://library.sannybuilder.com/#/gta3?q=009C */
    wanderDir(direction: int): void;
    /** Pulls the character out of their car and places at the location
    *
    * https://library.sannybuilder.com/#/gta3?q=0362 */
    warpFromCarToCoord(x: float, y: float, z: float): void;
    /** Puts the character in the specified vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=036A */
    warpIntoCar(vehicle: Car): void;
}
/** Intro Cutscene Logic
 * 
 * https://library.sannybuilder.com/#/gta3/classes/ChaseScene */
interface ChaseScene {
    /** Gets the control over a car from the chase scene
    *
    * https://library.sannybuilder.com/#/gta3?q=0439 */
    GetChaseCar(carIndex: int): Car;
    /** Removes the car from the chase scene
    *
    * https://library.sannybuilder.com/#/gta3?q=040A */
    RemoveCarFromChase(carIndex: int): void;
    /** Starts the chase scene (intro mission custscene)
    *
    * https://library.sannybuilder.com/#/gta3?q=0354 */
    Start(startTime: float): void;
    /** Stops the chase scene (intro mission custscene)
    *
    * https://library.sannybuilder.com/#/gta3?q=0355 */
    Stop(): void;
}
declare var ChaseScene: ChaseScene
/** Basic operations to copy and paste data
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Clipboard */
interface Clipboard {
    ReadData(memory: int, size: int): void;
    WriteData(memory: int, size: int): void;
}
declare var Clipboard: Clipboard
/** Time Manipulation
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Clock */
interface Clock {
    /** Returns the time passed in milliseconds since the game started
    *
    * https://library.sannybuilder.com/#/gta3?q=01BD */
    GetGameTimer(): int;
    /** Returns the number of minutes left until the clock matches the time specified
    *
    * https://library.sannybuilder.com/#/gta3?q=00C1 */
    GetMinutesToTimeOfDay(hours: int, minutes: int): int;
    /** Returns the number of hours and minutes passed since midnight
    *
    * https://library.sannybuilder.com/#/gta3?q=00BF */
    GetTimeOfDay(): {
        hours: int;
        minutes: int;
    };
    /** Restores the game time to the time when it was saved with 0253
    *
    * https://library.sannybuilder.com/#/gta3?q=0254 */
    Restore(): void;
    /** Sets the current in-game time
    *
    * https://library.sannybuilder.com/#/gta3?q=00C0 */
    SetTimeOfDay(hours: int, minutes: int): void;
    /** Sets the game to run at the specified speed
    *
    * https://library.sannybuilder.com/#/gta3?q=015D */
    SetTimeScale(scale: float): void;
    /** Saves the current time in game
    *
    * https://library.sannybuilder.com/#/gta3?q=0253 */
    Store(): void;
}
declare var Clock: Clock
/** Static Crane Objects
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Crane */
interface Crane {
    /** Activates a crane located within 100.0 units of the specified location
    *
    * https://library.sannybuilder.com/#/gta3?q=01EE */
    Activate(craneX: float, craneY: float, pickupZoneX1: float, pickupZoneY1: float, pickupZoneX2: float, pickupZoneY2: float, dropOffX: float, dropOffY: float, dropOffZ: float, dropOffAngle: float): void;
    /** Activates a crusher crane located within 100.0 units of the specified location
    *
    * https://library.sannybuilder.com/#/gta3?q=02FB */
    ActivateCrusher(craneX: float, craneY: float, pickupZoneX1: float, pickupZoneY1: float, pickupZoneX2: float, pickupZoneY2: float, dropOffX: float, dropOffY: float, dropOffZ: float, dropOffAngle: float): void;
    /** Activates a military crane located within 100.0 units of the specified location
    *
    * https://library.sannybuilder.com/#/gta3?q=0368 */
    ActivateMilitary(craneX: float, craneY: float, pickupZoneX1: float, pickupZoneY1: float, pickupZoneX2: float, pickupZoneY2: float, dropOffX: float, dropOffY: float, dropOffZ: float, dropOffAngle: float): void;
    /** Deactivates a crane located within 100.0 units of the specified location
    *
    * https://library.sannybuilder.com/#/gta3?q=01EF */
    Deactivate(craneX: float, craneY: float): void;
    /** Checks if the military crane has collected all vehicles
    *
    * https://library.sannybuilder.com/#/gta3?q=03EC */
    HasMilitaryCollectedAllCars(): boolean;
    /** Checks if a crane located within 100.0 units of the specified location is lifting the vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=03A0 */
    IsLiftingCar(craneX: float, craneY: float, car: Car): boolean;
}
declare var Crane: Crane
/** End-game Credits
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Credits */
interface Credits {
    /** Returns true if the credits have finished
    *
    * https://library.sannybuilder.com/#/gta3?q=0436 */
    AreFinished(): boolean;
    /** Makes the credits scroll up the screen
    *
    * https://library.sannybuilder.com/#/gta3?q=0434 */
    Start(): void;
    /** Stops the credits text from showing
    *
    * https://library.sannybuilder.com/#/gta3?q=0435 */
    Stop(): void;
}
declare var Credits: Credits
/** Mission Cutscenes
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Cutscene */
interface Cutscene {
    /** Ends the current cutscene, freeing game memory
    *
    * https://library.sannybuilder.com/#/gta3?q=02EA */
    Clear(): void;
    /** Returns the time in milliseconds passed since the cutscene has started (02E7)
    *
    * https://library.sannybuilder.com/#/gta3?q=02E8 */
    GetTime(): int;
    /** Returns true if the cutscene has finished
    *
    * https://library.sannybuilder.com/#/gta3?q=02E9 */
    HasFinished(): boolean;
    /** Loads the data for the specified cutscene
    *
    * https://library.sannybuilder.com/#/gta3?q=02E4 */
    Load(name: string): void;
    /** Sets the position for a cutscene
    *
    * https://library.sannybuilder.com/#/gta3?q=0244 */
    SetOffset(x: float, y: float, z: float): void;
    /** Starts the loaded cutscene (02E4)
    *
    * https://library.sannybuilder.com/#/gta3?q=02E7 */
    Start(): void;
}
declare var Cutscene: Cutscene
/** CutsceneHead Objects
 * 
 * https://library.sannybuilder.com/#/gta3/classes/CutsceneHead */
declare class CutsceneHead {
    constructor(handle: number);
    /** Creates a head attached to the cutscene object (02E5)
    *
    * https://library.sannybuilder.com/#/gta3?q=02F4 */
    static Create(modelId: int, cutsceneObject: CutsceneObject): CutsceneHead;
    /** Sets the animation of the cuscene head
    *
    * https://library.sannybuilder.com/#/gta3?q=02F5 */
    setAnim(animation: string): void;
}
/** Cutscene Objects
 * 
 * https://library.sannybuilder.com/#/gta3/classes/CutsceneObject */
declare class CutsceneObject {
    constructor(handle: number);
    /** Creates a new cutscene object with the model
    *
    * https://library.sannybuilder.com/#/gta3?q=02E5 */
    static Create(modelId: int): CutsceneObject;
    /** Sets the animation of the cutscene object
    *
    * https://library.sannybuilder.com/#/gta3?q=02E6 */
    setAnim(animation: string): void;
}
/** Various Debugging Utilities
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Debugger */
interface Debugger {
    /** Disables the debug mode
    *
    * https://library.sannybuilder.com/#/gta3?q=00C4 */
    Off(): void;
    /** Enables the debug mode
    *
    * https://library.sannybuilder.com/#/gta3?q=00C3 */
    On(): void;
}
declare var Debugger: Debugger
/** Dodo from the 'A Drop In The Ocean' Mission
 * 
 * https://library.sannybuilder.com/#/gta3/classes/DrugDropOff */
interface DrugDropOff {
    /** Stores the current coordinates of the plane in the 'A Drop In The Ocean' mission
    *
    * https://library.sannybuilder.com/#/gta3?q=035A */
    FindPlaneCoordinates(): {
        x: float;
        y: float;
        z: float;
    };
    /** Returns true if the plane in the 'A Drop In The Ocean' mission has been destroyed
    *
    * https://library.sannybuilder.com/#/gta3?q=0359 */
    HasPlaneBeenShotDown(): boolean;
    /** Creates a plane flying along the prerecorded path in the 'A Drop In The Ocean' mission
    *
    * https://library.sannybuilder.com/#/gta3?q=0358 */
    Start(): void;
}
declare var DrugDropOff: DrugDropOff
/** Dodo from the 'S.A.M.' Mission
 * 
 * https://library.sannybuilder.com/#/gta3/classes/DrugRun */
interface DrugRun {
    /** Returns the current coordinates of the plane in the 'S.A.M.' mission
    *
    * https://library.sannybuilder.com/#/gta3?q=03A6 */
    FindPlaneCoordinates(): {
        x: float;
        y: float;
        z: float;
    };
    /** Returns true if the plane in the 'S.A.M.' mission has landed
    *
    * https://library.sannybuilder.com/#/gta3?q=033B */
    HasBeenCompleted(): boolean;
    /** Returns true if the plane in the 'S.A.M.' mission has been destroyed
    *
    * https://library.sannybuilder.com/#/gta3?q=033C */
    HasPlaneBeenShotDown(): boolean;
    /** Creates a plane flying along the prerecorded path in the 'S.A.M.' mission
    *
    * https://library.sannybuilder.com/#/gta3?q=033A */
    Start(): void;
}
declare var DrugRun: DrugRun
/** Loading DLL files and finding exported functions
 * 
 * https://library.sannybuilder.com/#/gta3/classes/DynamicLibrary */
declare class DynamicLibrary {
    constructor(handle: number);
    static Load(libraryFileName: string): boolean;
    free(): void;
    getProcedure(self: DynamicLibrary): boolean;
}
/** Reading and writing files
 * 
 * https://library.sannybuilder.com/#/gta3/classes/File */
declare class File {
    constructor(handle: number);
    /** Opens the file in the specified mode, sets the condition result to True if the open operation has been successful, or to False otherwise, and writes the file handle to the variable
    *
    * https://library.sannybuilder.com/#/gta3?q=0A9A */
    static Open(filePathName: string, mode: int): boolean;
    /** Closes the file and frees the memory
    *
    * https://library.sannybuilder.com/#/gta3?q=0A9B */
    close(): void;
    /** Gets the file size in bytes
    *
    * https://library.sannybuilder.com/#/gta3?q=0A9C */
    getSize(): int;
    /** Returns true if the end of the specified file has been reached
    *
    * https://library.sannybuilder.com/#/gta3?q=0AD6 */
    isEndReached(): boolean;
    /** Reads the specified number of bytes from the opened file and writes them to the memory region starting from the address of the destination variable
    *
    * https://library.sannybuilder.com/#/gta3?q=0A9D */
    read(size: int): int;
    /** Reads data from the file into the buffer until either the end of buffer is reached, the newline character is read, or the end-of-file is reached, whichever comes first
    *
    * https://library.sannybuilder.com/#/gta3?q=0AD7 */
    readString(buffer: string, size: int): boolean;
    scan(format: string, ...args: number[]): boolean;
    /** Sets the position of the file to the given offset from the origin
    *
    * https://library.sannybuilder.com/#/gta3?q=0AD5 */
    seek(offset: int, origin: int): boolean;
    /** Copies the specified number of bytes of the memory region starting from the address of the source variable to the file
    *
    * https://library.sannybuilder.com/#/gta3?q=0A9E */
    write(size: int, source: int): void;
    /** Writes a formatted string to the file
    *
    * https://library.sannybuilder.com/#/gta3?q=0AD9 */
    writeFormattedString(format: string, ...args: number[]): void;
    /** Copies data from the source string to the file up to but not including the null character
    *
    * https://library.sannybuilder.com/#/gta3?q=0AD8 */
    writeString(source: string): boolean;
}
/** File System operations such as copying or deleting files
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Fs */
interface Fs {
    /** Copies an existing directory to a new directory and returns true if the operation is successful
    *
    * https://library.sannybuilder.com/#/gta3?q=0B05 */
    CopyDirectory(dirPath: string, newDirPath: string): boolean;
    /** Copies an existing file to a new file and returns true if the operation is successful
    *
    * https://library.sannybuilder.com/#/gta3?q=0B04 */
    CopyFile(fileName: string, newFileName: string): boolean;
    /** Deletes a directory at the given path and returns true if the operation is successful
    *
    * https://library.sannybuilder.com/#/gta3?q=0B01 */
    DeleteDirectory(dirPath: string, recursive: boolean): boolean;
    /** Deletes a file at the given path and returns true if the operation is successful
    *
    * https://library.sannybuilder.com/#/gta3?q=0B00 */
    DeleteFile(fileName: string): boolean;
    /** Returns true if a file at the given path exists
    *
    * https://library.sannybuilder.com/#/gta3?q=0AAB */
    DoesFileExist(path: string): boolean;
    /** Moves an existing directory and returns true if the operation is successful
    *
    * https://library.sannybuilder.com/#/gta3?q=0B03 */
    MoveDirectory(dirPath: string, newDirPath: string): boolean;
    /** Moves an existing file and returns true if the operation is successful
    *
    * https://library.sannybuilder.com/#/gta3?q=0B02 */
    MoveFile(fileName: string, newFileName: string): boolean;
    /** Sets the current working directory (cwd) to a predefined location with a value of 0 or 1, or to an arbitrary path with a string value
    *
    * https://library.sannybuilder.com/#/gta3?q=0A99 */
    SetCurrentDirectory(path: int): void;
}
declare var Fs: Fs
/** Various 2D Effects (Shadows, Lights, Coronas, Particles)
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Fx */
interface Fx {
    /** Creates an explosion at the point
    *
    * https://library.sannybuilder.com/#/gta3?q=020C */
    AddExplosion(x: float, y: float, z: float, type: int): void;
    /** Adds a moving particle effect
    *
    * https://library.sannybuilder.com/#/gta3?q=039D */
    AddMovingParticleEffect(particle: int, x: float, y: float, z: float, strengthX: float, strengthY: float, strengthZ: float, scale: float, r: int, g: int, b: int, durationInMs: int): void;
    /** Adds a particle effect at the location, or removes it if the last argument is true
    *
    * https://library.sannybuilder.com/#/gta3?q=02A2 */
    AddParticleEffect(type: int, x: float, y: float, z: float, remove: boolean): void;
    /** Creates a single particle at the specified coordinates
    *
    * https://library.sannybuilder.com/#/gta3?q=0437 */
    CreateSingleParticle(type: int, x: float, y: float, z: float, strengthX: float, strengthY: float, strengthZ: float, scale: float): void;
    /** Displays a corona at the specified location
    *
    * https://library.sannybuilder.com/#/gta3?q=024F */
    DrawCorona(x: float, y: float, z: float, size: float, coronaType: int, flareType: int, r: int, g: int, b: int): void;
    /** Creates a light of the specified color at the specified location
    *
    * https://library.sannybuilder.com/#/gta3?q=0250 */
    DrawLight(x: float, y: float, z: float, r: int, g: int, b: int): void;
    /** Draws a shadow in the current frame
    *
    * https://library.sannybuilder.com/#/gta3?q=016F */
    DrawShadow(textureType: int, x: float, y: float, z: float, angle: float, length: float, intensity: int, r: int, g: int, b: int): void;
    /** Updates the steaming effect around the specified cutscene object during the final scene of the 'Bomb Da Base: Act II' mission
    *
    * https://library.sannybuilder.com/#/gta3?q=043B */
    UpdateBoatFoamAnimation(object: CutsceneObject): void;
}
declare var Fx: Fx
/** Game State
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Game */
interface Game {
    /** Displays a screen prompting the player to save
    *
    * https://library.sannybuilder.com/#/gta3?q=03D8 */
    ActivateSaveMenu(): void;
    /** Returns true if the player has used any of the cheats
    *
    * https://library.sannybuilder.com/#/gta3?q=0445 */
    AreAnyCarCheatsActivated(): boolean;
    /** Returns true if the game uses metric measurements (meters instead of inches)
    *
    * https://library.sannybuilder.com/#/gta3?q=0424 */
    AreMeasurementsInMeters(): boolean;
    /** Clears the ped type's hostility to other ped types
    *
    * https://library.sannybuilder.com/#/gta3?q=03F2 */
    ClearThreatForPedType(type: int, threatMask: int): void;
    /** Creates a hidden package pickup at the location
    *
    * https://library.sannybuilder.com/#/gta3?q=02EC */
    CreateCollectable(x: float, y: float, z: float): void;
    /** Terminates the active mission by executing its mission cleanup routine
    *
    * https://library.sannybuilder.com/#/gta3?q=045C */
    FailCurrentMission(): void;
    /** Returns the number of hidden packages collected
    *
    * https://library.sannybuilder.com/#/gta3?q=03E1 */
    GetCollectablesCollected(): int;
    /** Returns the version id of the game
    *
    * https://library.sannybuilder.com/#/gta3?q=05E5 */
    GetVersion(): int;
    /** Returns true if the player has saved their game
    *
    * https://library.sannybuilder.com/#/gta3?q=03D9 */
    HasSaveGameFinished(): boolean;
    /** Returns true if the current game is an Australian release
    *
    * https://library.sannybuilder.com/#/gta3?q=059A */
    IsAustralian(): boolean;
    /** Returns true if the game language is set to French
    *
    * https://library.sannybuilder.com/#/gta3?q=040B */
    IsFrench(): boolean;
    /** Returns true if the game language is set to German
    *
    * https://library.sannybuilder.com/#/gta3?q=040C */
    IsGerman(): boolean;
    /** Returns true if the game has no violent elements censored
    *
    * https://library.sannybuilder.com/#/gta3?q=0351 */
    IsNasty(): boolean;
    /** Returns true on PC versions of the game
    *
    * https://library.sannybuilder.com/#/gta3?q=0485 */
    IsPcVersion(): boolean;
    /** Returns true if the ped type is hostile to other ped types
    *
    * https://library.sannybuilder.com/#/gta3?q=042A */
    IsThreatForPedType(type: int, threatMask: int): boolean;
    /** Returns true if the game version is vanilla 1.0
    *
    * https://library.sannybuilder.com/#/gta3?q=0AA9 */
    IsVersionOriginal(): boolean;
    /** Sets whether all cars receive damage
    *
    * https://library.sannybuilder.com/#/gta3?q=03F4 */
    SetAllCarsCanBeDamaged(state: boolean): void;
    /** Sets whether all spawned taxis have their roof light enabled or not
    *
    * https://library.sannybuilder.com/#/gta3?q=021F */
    SetAllTaxiLights(state: boolean): void;
    /** Makes the two characters chat for the specified period of time
    *
    * https://library.sannybuilder.com/#/gta3?q=03F9 */
    SetCharsChatting(char1: Char, char2: Char, duration: int): void;
    /** Sets the total number of hidden packages to collect
    *
    * https://library.sannybuilder.com/#/gta3?q=02ED */
    SetCollectableTotal(amount: int): void;
    /** Makes pedestrians pay no attention to the player
    *
    * https://library.sannybuilder.com/#/gta3?q=03BF */
    SetEveryoneIgnorePlayer(handle: Player, state: boolean): void;
    /** Sets whether the player can use bomb shops for free
    *
    * https://library.sannybuilder.com/#/gta3?q=021D */
    SetFreeBombs(state: boolean): void;
    /** Defines whether the player can respray their car for free
    *
    * https://library.sannybuilder.com/#/gta3?q=0335 */
    SetFreeResprays(state: boolean): void;
    /** Specifies that the intro cutscene is playing
    *
    * https://library.sannybuilder.com/#/gta3?q=043D */
    SetIntroIsPlaying(state: boolean): void;
    /** Sets the maximum wanted level the player can receive
    *
    * https://library.sannybuilder.com/#/gta3?q=01F0 */
    SetMaxWantedLevel(wantedLevel: int): void;
    /** Sets patrol cars to Police cars and Enforcers
    *
    * https://library.sannybuilder.com/#/gta3?q=02BC */
    SetSwatRequired(state: boolean): void;
    /** Sets the ped type's hostility to other ped types
    *
    * https://library.sannybuilder.com/#/gta3?q=03F1 */
    SetThreatForPedType(type: int, threatMask: int): void;
    /** Sets sensitivity to crime, changing how many crimes a player can commit before police begin to pursue
    *
    * https://library.sannybuilder.com/#/gta3?q=03C7 */
    SetWantedMultiplier(multiplier: float): void;
    /** Enables the second police helicopter that chases you
    *
    * https://library.sannybuilder.com/#/gta3?q=0231 */
    SwitchHelicopter(state: boolean): void;
}
declare var Game: Game
/** Gangs Configuration
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Gang */
interface Gang {
    /** Sets the car used by members of the specified gang
    *
    * https://library.sannybuilder.com/#/gta3?q=0236 */
    SetCarModel(gangId: int, modelId: int): void;
    /** Forces the game to spawn the gang members based on the specified override value
    *
    * https://library.sannybuilder.com/#/gta3?q=0410 */
    SetPedModelPreference(gangId: int, override: int): void;
    /** Sets the weapons that the specified gang can use
    *
    * https://library.sannybuilder.com/#/gta3?q=0237 */
    SetWeapons(gangId: int, weaponType1: int, weaponType2: int): void;
}
declare var Gang: Gang
/** Garages
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Garage */
declare class Garage {
    constructor(handle: number);
    /** Creates a garage at the specified coordinates
    *
    * https://library.sannybuilder.com/#/gta3?q=0219 */
    static Create(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, type: int): Garage;
    /** Creates a garage with target model 
    *
    * https://library.sannybuilder.com/#/gta3?q=021A */
    static CreateWithCarModel(fromX: float, fromY: float, fromZ: float, toX: float, toY: float, toZ: float, type: int, modelId: int): Garage;
    /** Activates the garage
    *
    * https://library.sannybuilder.com/#/gta3?q=0299 */
    activate(): void;
    /** Sets the garage's type
    *
    * https://library.sannybuilder.com/#/gta3?q=02FA */
    changeType(type: int): void;
    /** Changes the type of garage and target model
    *
    * https://library.sannybuilder.com/#/gta3?q=03A5 */
    changeTypeWithCarModel(type: int, modelId: int): void;
    /** Closes the garage
    *
    * https://library.sannybuilder.com/#/gta3?q=0361 */
    close(): void;
    /** Deactivates the garage
    *
    * https://library.sannybuilder.com/#/gta3?q=02B9 */
    deactivate(): void;
    /** Returns true if the garage contains the vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=0422 */
    doesContainCar(vehicle: Car): boolean;
    /** Returns true if the player's car has been resprayed by the garage
    *
    * https://library.sannybuilder.com/#/gta3?q=0329 */
    hasResprayHappened(): boolean;
    /** Returns true if the import garage has collected a vehicle from the predefined list
    *
    * https://library.sannybuilder.com/#/gta3?q=03D4 */
    hasSlotBeenFilled(importSlot: int): boolean;
    /** Returns true if a vehicle is in the garage
    *
    * https://library.sannybuilder.com/#/gta3?q=021C */
    isCarInMission(): boolean;
    /** Returns true if the garage's door is closed
    *
    * https://library.sannybuilder.com/#/gta3?q=03B1 */
    isClosed(): boolean;
    /** Returns true if the garage's door is open
    *
    * https://library.sannybuilder.com/#/gta3?q=03B0 */
    isOpen(): boolean;
    /** Disables special camera when in the garage
    *
    * https://library.sannybuilder.com/#/gta3?q=03DA */
    noSpecialCameraForThisGarage(): void;
    /** Opens the garage
    *
    * https://library.sannybuilder.com/#/gta3?q=0360 */
    open(): void;
    /** Sets the garage door to swing open instead of slide open
    *
    * https://library.sannybuilder.com/#/gta3?q=03BB */
    setRotatingDoor(): void;
    /** Sets the garage to only accept the specified vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=021B */
    setTargetCarForMission(vehicle: Car): void;
}
/** Game UI
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Hud */
interface Hud {
    /** Removes the onscreen counter (0150 or 03C4)
    *
    * https://library.sannybuilder.com/#/gta3?q=0151 */
    ClearCounter(counter: int): void;
    /** Removes the onscreen timer
    *
    * https://library.sannybuilder.com/#/gta3?q=014F */
    ClearTimer(timer: int): void;
    /** Displays an onscreen counter, either shown in numbers or as a bar
    *
    * https://library.sannybuilder.com/#/gta3?q=0150 */
    DisplayCounter(counter: int, display: int): void;
    /** Displays an onscreen counter with the text, either shown in numbers or as a bar
    *
    * https://library.sannybuilder.com/#/gta3?q=03C4 */
    DisplayCounterWithString(counter: int, display: int, text: string): void;
    /** Creates a countdown onscreen timer
    *
    * https://library.sannybuilder.com/#/gta3?q=014E */
    DisplayTimer(timer: int): void;
    /** Creates a countdown onscreen timer with the text
    *
    * https://library.sannybuilder.com/#/gta3?q=03C3 */
    DisplayTimerWithString(timer: int, text: string): void;
    /** Draws a box at the specified screen X and Y position, with the specified size and RGBA colors
    *
    * https://library.sannybuilder.com/#/gta3?q=038E */
    DrawRect(x: float, y: float, width: float, height: float, r: int, g: int, b: int, a: int): void;
    /** Draws a loaded texture (038F) at the specified on-screen X and Y coordinates, with the specified size and RGBA color
    *
    * https://library.sannybuilder.com/#/gta3?q=038D */
    DrawSprite(memorySlot: int, offsetLeft: float, offsetTop: float, width: float, height: float, r: int, g: int, b: int, a: int): void;
    /** Makes a specific part of the HUD disappear and reappear several times
    *
    * https://library.sannybuilder.com/#/gta3?q=03E7 */
    FlashObject(object: int): void;
    /** Makes the on-screen timer stop updating
    *
    * https://library.sannybuilder.com/#/gta3?q=0396 */
    FreezeTimer(state: boolean): void;
    /** Loads the specified splash screen
    *
    * https://library.sannybuilder.com/#/gta3?q=044D */
    LoadSplash(txdName: string): void;
    /** Causes the next texture to be drawn (038D) before the fade is drawn
    *
    * https://library.sannybuilder.com/#/gta3?q=03E3 */
    SetSpritesDrawBeforeFade(state: boolean): void;
    /** Enables widescreen
    *
    * https://library.sannybuilder.com/#/gta3?q=02A3 */
    SwitchWidescreen(state: boolean): void;
}
declare var Hud: Hud
/** Reading and writing .ini files
 * 
 * https://library.sannybuilder.com/#/gta3/classes/IniFile */
interface IniFile {
    /** Reads a floating-point value from the ini file
    *
    * https://library.sannybuilder.com/#/gta3?q=0AF2 */
    ReadFloat(path: string, section: string, key: string): float;
    /** Reads an integer value from the ini file
    *
    * https://library.sannybuilder.com/#/gta3?q=0AF0 */
    ReadInt(path: string, section: string, key: string): int;
    /** Reads a string value from the ini file
    *
    * https://library.sannybuilder.com/#/gta3?q=0AF4 */
    ReadString(path: string, section: string, key: string): string;
    /** Writes the floating-point value to the ini file
    *
    * https://library.sannybuilder.com/#/gta3?q=0AF3 */
    WriteFloat(value: float, path: string, section: string, key: string): void;
    /** Writes the integer value to the ini file
    *
    * https://library.sannybuilder.com/#/gta3?q=0AF1 */
    WriteInt(value: int, path: string, section: string, key: string): void;
    /** Writes the string value to the ini file
    *
    * https://library.sannybuilder.com/#/gta3?q=0AF5 */
    WriteString(value: string, path: string, section: string, key: string): void;
}
declare var IniFile: IniFile
/** Rampages Logic
 * 
 * https://library.sannybuilder.com/#/gta3/classes/KillFrenzy */
interface KillFrenzy {
    /** Returns the status of the current rampage
    *
    * https://library.sannybuilder.com/#/gta3?q=01FA */
    ReadStatus(): int;
    /** Starts a rampage
    *
    * https://library.sannybuilder.com/#/gta3?q=01F9 */
    Start(text: string, weaponType: int, timeInMs: int, targetsNum: int, targetModel1: int, targetModel2: int, targetModel3: int, targetModel4: int, betaSoundsAndMessages: boolean): void;
    /** Starts a headshot rampage
    *
    * https://library.sannybuilder.com/#/gta3?q=0367 */
    StartHeadshot(text: string, weaponType: int, timeInMs: int, targetsNum: int, targetModel1: int, targetModel2: int, targetModel3: int, targetModel4: int, betaSoundsAndMessages: boolean): void;
}
declare var KillFrenzy: KillFrenzy
/** Math and Conversion Utilities
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Math */
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
    * https://library.sannybuilder.com/#/gta3?q=042D */
    ConvertMetersToFeet(meters: int): int;
    /** Returns a random float between the specified ranges
    *
    * https://library.sannybuilder.com/#/gta3?q=0208 */
    RandomFloatInRange(min: float, max: float): float;
    /** Returns a random integer between the specified ranges
    *
    * https://library.sannybuilder.com/#/gta3?q=0209 */
    RandomIntInRange(min: int, max: int): int;
}
declare var Math: Math
/** Process Memory Manipulation
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Memory */
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
    * https://library.sannybuilder.com/#/gta3?q=0AC8 */
    Allocate(size: int): int;
    /** Calls a function at the address with the given arguments and the calling convention defined by the pop parameter where 0 means 'stdcall' and a value equal to numParams means  'cdecl'
    *
    * https://library.sannybuilder.com/#/gta3?q=0AA5 */
    CallFunction(address: int, numParams: int, pop: int, ...funcParams: number[]): void;
    /** Calls a function similarly to 0AA5 and writes the result into the variable following the arguments list
    *
    * https://library.sannybuilder.com/#/gta3?q=0AA7 */
    CallFunctionReturn(address: int, numParams: int, pop: int, ...funcParams: number[]): int;
    /** Calls a method of the object (struct) with the given arguments and the 'thiscall' calling convention (pop is always 0)
    *
    * https://library.sannybuilder.com/#/gta3?q=0AA6 */
    CallMethod(address: int, struct: int, numParams: int, pop: int, ...funcParams: number[]): void;
    /** Calls a method of the object (struct) similarly to 0AA6 and writes the result into the variable following the arguments list
    *
    * https://library.sannybuilder.com/#/gta3?q=0AA8 */
    CallMethodReturn(address: int, struct: int, numParams: int, pop: int, ...funcParams: number[]): int;
    /** Frees the memory allocated with 0AC8
    *
    * https://library.sannybuilder.com/#/gta3?q=0AC9 */
    Free(address: int): void;
    /** Stores the absolute address of a code location marked with the label
    *
    * https://library.sannybuilder.com/#/gta3?q=0AC6 */
    GetLabelPointer(_: int): int;
    /** Gets the address of the object struct in the game memory by its handle
    *
    * https://library.sannybuilder.com/#/gta3?q=0A98 */
    GetObjectPointer(object: ScriptObject): int;
    /** Gets the corresponding handle of the object located at the given address in memory
    *
    * https://library.sannybuilder.com/#/gta3?q=0AEC */
    GetObjectRef(address: int): ScriptObject;
    /** Gets the address of the ped struct in the game memory by its handle
    *
    * https://library.sannybuilder.com/#/gta3?q=0A96 */
    GetPedPointer(char: Char): int;
    /** Gets the corresponding handle of the char located at the given address in memory
    *
    * https://library.sannybuilder.com/#/gta3?q=0AEA */
    GetPedRef(address: int): Char;
    /** Gets the address of a running script which name matches the given string or 0 otherwise
    *
    * https://library.sannybuilder.com/#/gta3?q=0AAA */
    GetScriptStructNamed(scriptName: string): int;
    /** Gets the address of the current script structure in the game memory
    *
    * https://library.sannybuilder.com/#/gta3?q=0A9F */
    GetThisScriptStruct(): int;
    /** Stores the absolute address of the variable
    *
    * https://library.sannybuilder.com/#/gta3?q=0AC7 */
    GetVarPointer(_: int): int;
    /** Gets the address of the vehicle struct in the game memory by its handle
    *
    * https://library.sannybuilder.com/#/gta3?q=0A97 */
    GetVehiclePointer(vehicle: Car): int;
    /** Gets the corresponding handle of the vehicle located at the given address in memory
    *
    * https://library.sannybuilder.com/#/gta3?q=0AEB */
    GetVehicleRef(address: int): Car;
    PopFloat(): float;
    /** Reads a value from the game memory
    *
    * https://library.sannybuilder.com/#/gta3?q=0A8D */
    Read(address: int, size: int, vp: boolean): int;
    SetOffset(address1: int, address2: int, vp: boolean): void;
    /** Writes a value to the game memory
    *
    * https://library.sannybuilder.com/#/gta3?q=0A8C */
    Write(address: int, size: int, value: int, vp: boolean): void;
}
declare var Memory: Memory
/** Working with DLL files already loaded in memory
 * 
 * https://library.sannybuilder.com/#/gta3/classes/MemoryLibrary */
declare class MemoryLibrary {
    constructor(handle: number);
    static Load(address: int): boolean;
    free(): void;
    getProcedure(self: MemoryLibrary): boolean;
}
/** Big'N'Veiny Mission Logic
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Pacman */
interface Pacman {
    /** Creates a single donkey magazine pickup
    *
    * https://library.sannybuilder.com/#/gta3?q=02DA */
    AddPowerPill(x: float, y: float, z: float): void;
    /** Removes all donkey magazine (02C3) and platinum (02C7) pickups
    *
    * https://library.sannybuilder.com/#/gta3?q=02C6 */
    Clear(): void;
    /** Clears the number of platinum pickups (02C7) collected in a vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=02C9 */
    ClearNumberOfPowerPillsCarried(): void;
    /** Clears the number of donkey magazine pickups (02C3) collected
    *
    * https://library.sannybuilder.com/#/gta3?q=02D9 */
    ClearNumberOfPowerPillsEaten(): void;
    /** Returns the number of platinum pickups (02C7) collected in a vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=02C8 */
    GetNumberOfPowerPillsCarried(): int;
    /** Returns the number of donkey magazine pickups (02C3) collected
    *
    * https://library.sannybuilder.com/#/gta3?q=02C5 */
    GetNumberOfPowerPillsEaten(): int;
    /** Creates a predefined collection of donkey magazine pickups
    *
    * https://library.sannybuilder.com/#/gta3?q=02C3 */
    StartRace(_zero: int): void;
    /** Stores the current player's position for debugging purposes during the pacman race
    *
    * https://library.sannybuilder.com/#/gta3?q=02C4 */
    StartRecord(): void;
    /** Creates a collection of platinum pickups nearby the specified location
    *
    * https://library.sannybuilder.com/#/gta3?q=02C7 */
    StartScramble(x: float, y: float, z: float, distance: float, count: int): void;
}
declare var Pacman: Pacman
/** Input Controls
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Pad */
interface Pad {
    /** Sets emulate and press pad's button
    *
    * https://library.sannybuilder.com/#/gta3?q=0602 */
    EmulateButtonPressWithSensitivity(buttonId: int, sensitivity: int): void;
    /** Returns the controller mode
    *
    * https://library.sannybuilder.com/#/gta3?q=0293 */
    GetControllerMode(): int;
    /** Stores the status of the specified key into a variable
    *
    * https://library.sannybuilder.com/#/gta3?q=00E2 */
    GetState(pad: Pad, buttonId: int): int;
    /** Returns true if the pad's button has been pressed
    *
    * https://library.sannybuilder.com/#/gta3?q=00E1 */
    IsButtonPressed(pad: Pad, buttonId: int): boolean;
    /** Returns true if the pad's button is pressed with a certain sensitivity
    *
    * https://library.sannybuilder.com/#/gta3?q=0601 */
    IsButtonPressedWithSensitivity(buttonId: int, sensitivity: int): boolean;
    /** Returns true if the player is pressing a keyboard button with the specified code
    *
    * https://library.sannybuilder.com/#/gta3?q=0AB0 */
    IsKeyPressed(keyCode: int): boolean;
    /** Shakes the player's joypad at the specified intensity for the specified time
    *
    * https://library.sannybuilder.com/#/gta3?q=015B */
    Shake(pad: Pad, time: int, intensity: int): void;
    /** Returns true if the specified string of letters has been typed on the keyboard
    *
    * https://library.sannybuilder.com/#/gta3?q=0ADC */
    TestCheat(input: string): boolean;
}
declare var Pad: Pad
/** In-Game Pager
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Pager */
interface Pager {
    /** Sends a new message to the player's pager
    *
    * https://library.sannybuilder.com/#/gta3?q=014D */
    AddMessage(text: string, speed: int, priority: int, _unused: int): void;
    /** Sends a new message in which the first string token~1~ is substituted with the specified number to the player's pager
    *
    * https://library.sannybuilder.com/#/gta3?q=01F8 */
    AddMessageWithNumber(text: string, num: int, speed: int, priority: int, _unused: int): void;
}
declare var Pager: Pager
/** Path Configuration and Lookup
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Path */
interface Path {
    /** Adds a new waypoint to the route with the specified id
    *
    * https://library.sannybuilder.com/#/gta3?q=01E2 */
    AddRoutePoint(routeId: int, x: float, y: float, z: float): void;
    /** Returns the nearest path note from the specified coordinates that a vehicle can drive on
    *
    * https://library.sannybuilder.com/#/gta3?q=02C1 */
    GetClosestCarNode(x: float, y: float, z: float): {
        nodeX: float;
        nodeY: float;
        nodeZ: float;
    };
    /** Returns the position and heading of the closest vehicle path node to the specified position
    *
    * https://library.sannybuilder.com/#/gta3?q=03D3 */
    GetClosestCarNodeWithHeading(x: float, y: float, z: float): {
        nodeX: float;
        nodeY: float;
        nodeZ: float;
        angle: float;
    };
    /** Returns the position and heading of the closest vehicle path node to the specified position and with rotation away from the point
    *
    * https://library.sannybuilder.com/#/gta3?q=0462 */
    GetClosestCarNodeWithHeadingAwayPoint(x: float, y: float, z: float, destX: float, destY: float): {
        nodeX: float;
        nodeY: float;
        nodeZ: float;
        angle: float;
    };
    /** Returns the position and heading of the closest vehicle path node to the specified position and with rotation towards the point
    *
    * https://library.sannybuilder.com/#/gta3?q=0461 */
    GetClosestCarNodeWithHeadingTowardsPoint(x: float, y: float, z: float, destX: float, destY: float): {
        nodeX: float;
        nodeY: float;
        nodeZ: float;
        angle: float;
    };
    /** Returns the nearest path node from the specified coordinates that a pedestrian can walk on
    *
    * https://library.sannybuilder.com/#/gta3?q=02C0 */
    GetClosestCharNode(x: float, y: float, z: float): {
        nodeX: float;
        nodeY: float;
        nodeZ: float;
    };
    /** Marks all ped path nodes in the given 3D area as transitional between two levels (islands)
    *
    * https://library.sannybuilder.com/#/gta3?q=0427 */
    MarkPedRoadsBetweenLevels(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float): void;
    /** Marks all car path nodes in the given 3D area as transitional between two levels (islands)
    *
    * https://library.sannybuilder.com/#/gta3?q=0426 */
    MarkRoadsBetweenLevels(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float): void;
    /** Clears all waypoints in the route with the specified id
    *
    * https://library.sannybuilder.com/#/gta3?q=03AC */
    RemoveRoute(routeId: int): void;
    /** Forbids pedestrians to walk into the specified area
    *
    * https://library.sannybuilder.com/#/gta3?q=022B */
    SwitchPedRoadsOff(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float): void;
    /** Forbids pedestrians to walk into the specified angled area
    *
    * https://library.sannybuilder.com/#/gta3?q=0399 */
    SwitchPedRoadsOffAngled(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, angle: float): void;
    /** Allows pedestrians to walk into the specified area
    *
    * https://library.sannybuilder.com/#/gta3?q=022A */
    SwitchPedRoadsOn(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float): void;
    /** Enables pedestrians walk into the specified angled area
    *
    * https://library.sannybuilder.com/#/gta3?q=0398 */
    SwitchPedRoadsOnAngled(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, angle: float): void;
    /** Prevents cars from driving on roads in the specified 3D area
    *
    * https://library.sannybuilder.com/#/gta3?q=01E8 */
    SwitchRoadsOff(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float): void;
    /** Prevents cars from driving on roads in the specified angled area
    *
    * https://library.sannybuilder.com/#/gta3?q=039B */
    SwitchRoadsOffAngled(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, angle: float): void;
    /** Allows cars to drive in the specified 3D area
    *
    * https://library.sannybuilder.com/#/gta3?q=01E7 */
    SwitchRoadsOn(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float): void;
    /** Allows cars to drive in the specified angled area
    *
    * https://library.sannybuilder.com/#/gta3?q=039A */
    SwitchRoadsOnAngled(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, angle: float): void;
}
declare var Path: Path
/** Phone Booth Calls and Messages
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Phone */
declare class Phone {
    constructor(handle: number);
    /** Gets the phone at the specified X and Y coordinates
    *
    * https://library.sannybuilder.com/#/gta3?q=024A */
    static Grab(x: float, y: float): Phone;
    /** Returns true if the phone has finished displaying an assigned script line
    *
    * https://library.sannybuilder.com/#/gta3?q=024D */
    hasDisplayedMessage(): boolean;
    /** Returns true if the phone is displaying an assigned script line
    *
    * https://library.sannybuilder.com/#/gta3?q=03C2 */
    isDisplayingMessage(): boolean;
    /** Assigns two script lines to the phone
    *
    * https://library.sannybuilder.com/#/gta3?q=0379 */
    set2Messages(msg1: string, msg2: string): void;
    /** Assigns two script lines to the phone which can be picked up again in a minute
    *
    * https://library.sannybuilder.com/#/gta3?q=0378 */
    set2RepeatedMessages(msg1: string, msg2: string): void;
    /** Assigns three script lines to the phone
    *
    * https://library.sannybuilder.com/#/gta3?q=037B */
    set3Messages(msg1: string, msg2: string, msg3: string): void;
    /** Assigns three script lines to the phone which can be picked up again in a minute
    *
    * https://library.sannybuilder.com/#/gta3?q=037A */
    set3RepeatedMessages(msg1: string, msg2: string, msg3: string): void;
    /** Assigns four script lines to the phone
    *
    * https://library.sannybuilder.com/#/gta3?q=037D */
    set4Messages(msg1: string, msg2: string, msg3: string, msg4: string): void;
    /** Assigns four script lines to the phone which can be picked up again in a minute
    *
    * https://library.sannybuilder.com/#/gta3?q=037C */
    set4RepeatedMessages(msg1: string, msg2: string, msg3: string, msg4: string): void;
    /** Assigns five script lines to the phone
    *
    * https://library.sannybuilder.com/#/gta3?q=0387 */
    set5Messages(msg1: string, msg2: string, msg3: string, msg4: string, msg5: string): void;
    /** Assigns five script lines to the phone which can be picked up again in a minute
    *
    * https://library.sannybuilder.com/#/gta3?q=0386 */
    set5RepeatedMessages(msg1: string, msg2: string, msg3: string, msg4: string, msg5: string): void;
    /** Assigns six script lines to the phone
    *
    * https://library.sannybuilder.com/#/gta3?q=0389 */
    set6Messages(msg1: string, msg2: string, msg3: string, msg4: string, msg5: string, msg6: string): void;
    /** Assigns six script lines to the phone which can be picked up again in a minute
    *
    * https://library.sannybuilder.com/#/gta3?q=0388 */
    set6RepeatedMessages(msg1: string, msg2: string, msg3: string, msg4: string, msg5: string, msg6: string): void;
    /** Assigns a script line to the phone
    *
    * https://library.sannybuilder.com/#/gta3?q=024C */
    setMessage(message: string): void;
    /** Assigns a script line to the phone which can be picked up again in a minute
    *
    * https://library.sannybuilder.com/#/gta3?q=024B */
    setRepeatedMessage(message: string): void;
    /** Disables the phone from ringing
    *
    * https://library.sannybuilder.com/#/gta3?q=024E */
    turnOff(): void;
    /** Makes the phone ringing
    *
    * https://library.sannybuilder.com/#/gta3?q=0405 */
    turnOn(): void;
}
/** Interactive Script Objects
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Pickup */
declare class Pickup {
    constructor(handle: number);
    /** Creates a pickup with the given model and type
    *
    * https://library.sannybuilder.com/#/gta3?q=0213 */
    static Create(modelId: int, pickupType: int, x: float, y: float, z: float): Pickup;
    /** Creates a pickup of type FloatingPackage at the given coordinates
    *
    * https://library.sannybuilder.com/#/gta3?q=035B */
    static CreateFloatingPackage(x: float, y: float, z: float): Pickup;
    /** Creates a money pickup with the specified cash value
    *
    * https://library.sannybuilder.com/#/gta3?q=02E1 */
    static CreateMoney(x: float, y: float, z: float, cashAmount: int): Pickup;
    /** Creates a weapon pickup, giving the player the specified amount of ammo when they pick it up
    *
    * https://library.sannybuilder.com/#/gta3?q=032B */
    static CreateWithAmmo(modelId: int, pickupType: int, ammo: int, x: float, y: float, z: float): Pickup;
    /** Creates a mine pickup of type MineInactive at the location
    *
    * https://library.sannybuilder.com/#/gta3?q=02F0 */
    static DropMine(x: float, y: float, z: float): void;
    /** Creates a nautical mine pickup of type MineInactive at the location
    *
    * https://library.sannybuilder.com/#/gta3?q=02F1 */
    static DropNauticalMine(x: float, y: float, z: float): void;
    /** Returns true if specified pickup has been collected
    *
    * https://library.sannybuilder.com/#/gta3?q=0214 */
    hasBeenCollected(): boolean;
    /** Destroys the specified pickup, freeing game memory
    *
    * https://library.sannybuilder.com/#/gta3?q=0215 */
    remove(): void;
}
/** The Main Character Controlled by a Player
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Player */
declare class Player {
    constructor(handle: number);
    /** Creates a player at the specified location
    *
    * https://library.sannybuilder.com/#/gta3?q=0053 */
    static Create(modelId: int, x: float, y: float, z: float): Player;
    /** Returns the amount of times the player has destroyed a specific model
    *
    * https://library.sannybuilder.com/#/gta3?q=0298 */
    static GetNumOfModelsKilled(modelId: int): int;
    /** Gives the player a detonator
    *
    * https://library.sannybuilder.com/#/gta3?q=037F */
    static GiveDetonator(): void;
    /** Returns true if the handle is an invalid player handle or the player is dead (wasted)
    *
    * https://library.sannybuilder.com/#/gta3?q=0117 */
    static IsDead(handle: int): boolean;
    /** Resets the count of how many times the player has destroyed a certain model (0298)
    *
    * https://library.sannybuilder.com/#/gta3?q=0297 */
    static ResetNumOfModelsKilled(): void;
    /** Adds the specified amount of ammo to the player's weapon
    *
    * https://library.sannybuilder.com/#/gta3?q=0113 */
    addAmmo(weaponType: int, ammo: int): void;
    /** Increases the character's armour by the specified value to the maximum of 100.0
    *
    * https://library.sannybuilder.com/#/gta3?q=035E */
    addArmour(amount: int): void;
    /** Adds to the player's money
    *
    * https://library.sannybuilder.com/#/gta3?q=0109 */
    addScore(money: int): void;
    /** Sets the player's wanted level
    *
    * https://library.sannybuilder.com/#/gta3?q=010D */
    alterWantedLevel(wantedLevel: int): void;
    /** Sets the player's wanted level if the specified level is higher than the current one
    *
    * https://library.sannybuilder.com/#/gta3?q=010E */
    alterWantedLevelNoDrop(wantedLevel: int): void;
    /** Applies brakes to the player's car
    *
    * https://library.sannybuilder.com/#/gta3?q=0221 */
    applyBrakesToCar(state: boolean): void;
    /** Returns true if the player can move
    *
    * https://library.sannybuilder.com/#/gta3?q=03EE */
    canStartMission(): boolean;
    /** Clears the player's wanted level
    *
    * https://library.sannybuilder.com/#/gta3?q=0110 */
    clearWantedLevel(): void;
    /** Kills the player
    *
    * https://library.sannybuilder.com/#/gta3?q=0322 */
    explodeHead(): void;
    /** Gets the amount of ammo in the specified weapon of the player
    *
    * https://library.sannybuilder.com/#/gta3?q=0419 */
    getAmmoInWeapon(weaponType: int): int;
    /** Gets the character handle for the specified player
    *
    * https://library.sannybuilder.com/#/gta3?q=01F5 */
    getChar(): Char;
    /** Returns the player's coordinates
    *
    * https://library.sannybuilder.com/#/gta3?q=0054 */
    getCoordinates(): {
        x: float;
        y: float;
        z: float;
    };
    /** Returns the type of weapon that the player is currently holding
    *
    * https://library.sannybuilder.com/#/gta3?q=046F */
    getCurrentWeapon(): int;
    /** Returns the player's heading (z-angle)
    *
    * https://library.sannybuilder.com/#/gta3?q=0170 */
    getHeading(): float;
    /** Returns the player's health
    *
    * https://library.sannybuilder.com/#/gta3?q=0225 */
    getHealth(): int;
    /** Gives the player the weapon with the specified amount of ammo
    *
    * https://library.sannybuilder.com/#/gta3?q=01B1 */
    giveWeapon(weaponType: int, ammo: int): void;
    /** Returns true if the specified player is being arrested (busted)
    *
    * https://library.sannybuilder.com/#/gta3?q=0130 */
    hasBeenArrested(): boolean;
    /** Returns true if the player is holding the given type of weapon
    *
    * https://library.sannybuilder.com/#/gta3?q=02D7 */
    isCurrentWeapon(weaponType: int): boolean;
    /** Returns true if the player's health is over the specified value
    *
    * https://library.sannybuilder.com/#/gta3?q=0183 */
    isHealthGreater(health: int): boolean;
    isInAngledArea2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, angle: float, drawSphere: boolean): boolean;
    isInAngledArea3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, angle: float, drawSphere: boolean): boolean;
    isInAngledAreaInCar2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, angle: float, drawSphere: boolean): boolean;
    isInAngledAreaInCar3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, angle: float, drawSphere: boolean): boolean;
    isInAngledAreaOnFoot2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, angle: float, drawSphere: boolean): boolean;
    isInAngledAreaOnFoot3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, angle: float, drawSphere: boolean): boolean;
    /** Returns true if the player is on a boat
    *
    * https://library.sannybuilder.com/#/gta3?q=04A8 */
    isInAnyBoat(): boolean;
    /** Returns true if the player has a vehicle, even if they are not actually sat inside it (opening and closing the door)
    *
    * https://library.sannybuilder.com/#/gta3?q=00E0 */
    isInAnyCar(): boolean;
    /** Returns true if the player is in a helicopter
    *
    * https://library.sannybuilder.com/#/gta3?q=04AA */
    isInAnyHeli(): boolean;
    /** Returns true if the player is within the specified 2D area
    *
    * https://library.sannybuilder.com/#/gta3?q=0056 */
    isInArea2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, drawSphere: boolean): boolean;
    /** Returns true if the player is within the specified 3D area
    *
    * https://library.sannybuilder.com/#/gta3?q=0057 */
    isInArea3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, drawSphere: boolean): boolean;
    /** Returns true if the player is within the specified 2D area in a vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=0198 */
    isInAreaInCar2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, drawSphere: boolean): boolean;
    /** Returns true if the player is within the specified 3D area in a vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=019D */
    isInAreaInCar3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, drawSphere: boolean): boolean;
    /** Returns true if the player is within the specified 2D area on foot
    *
    * https://library.sannybuilder.com/#/gta3?q=0197 */
    isInAreaOnFoot2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, drawSphere: boolean): boolean;
    /** Returns true if the player is within the specified 3D area on foot
    *
    * https://library.sannybuilder.com/#/gta3?q=019C */
    isInAreaOnFoot3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, drawSphere: boolean): boolean;
    /** Returns true if the player is in the specified vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=00DC */
    isInCar(vehicle: Car): boolean;
    /** Returns true if the player is flying in a plane or a helicopter
    *
    * https://library.sannybuilder.com/#/gta3?q=04C9 */
    isInFlyingVehicle(): boolean;
    /** Returns true if the player is driving a vehicle with the specified model
    *
    * https://library.sannybuilder.com/#/gta3?q=00DE */
    isInModel(modelId: int): boolean;
    /** Returns true if the player is controlling a remote-control vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=0241 */
    isInRemoteMode(): boolean;
    /** Returns true if the player vehicle's model is Taxi (110), Cabbie (128), or Borgnine (148)
    *
    * https://library.sannybuilder.com/#/gta3?q=02DE */
    isInTaxi(): boolean;
    /** Returns true if the player is in the specified map zone
    *
    * https://library.sannybuilder.com/#/gta3?q=0121 */
    isInZone(zone: string): boolean;
    /** Returns true if the player is talking over the phone (024A)
    *
    * https://library.sannybuilder.com/#/gta3?q=0447 */
    isLiftingAPhone(): boolean;
    /** Returns true if the player is driving a bike
    *
    * https://library.sannybuilder.com/#/gta3?q=047E */
    isOnAnyBike(): boolean;
    /** Returns true if the player is on foot, and not occupying a vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=044A */
    isOnFoot(): boolean;
    /** Returns true if the player hasn't been wasted or busted (the player is still playing)
    *
    * https://library.sannybuilder.com/#/gta3?q=0256 */
    isPlaying(): boolean;
    /** Returns true if the player is honking the horn in a car
    *
    * https://library.sannybuilder.com/#/gta3?q=0122 */
    isPressingHorn(): boolean;
    /** Returns true if the player's money is over the specified value
    *
    * https://library.sannybuilder.com/#/gta3?q=010A */
    isScoreGreater(money: int): boolean;
    /** Returns true if the player is firing a weapon
    *
    * https://library.sannybuilder.com/#/gta3?q=02DF */
    isShooting(): boolean;
    /** Returns true if the player fired a weapon within the specified 2D area
    *
    * https://library.sannybuilder.com/#/gta3?q=02D5 */
    isShootingInArea(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, drawSphere: boolean): boolean;
    /** Returns true if the player is sitting in any vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=0443 */
    isSittingInAnyCar(): boolean;
    /** Returns true if the player is in the specified vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=0442 */
    isSittingInCar(vehicle: Car): boolean;
    /** Returns true if the player is not moving
    *
    * https://library.sannybuilder.com/#/gta3?q=029F */
    isStopped(): boolean;
    isStoppedInAngledArea2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, angle: float, drawSphere: boolean): boolean;
    isStoppedInAngledArea3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, angle: float, drawSphere: boolean): boolean;
    isStoppedInAngledAreaInCar2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, angle: float, drawSphere: boolean): boolean;
    isStoppedInAngledAreaInCar3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, angle: float, drawSphere: boolean): boolean;
    isStoppedInAngledAreaOnFoot2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, angle: float, drawSphere: boolean): boolean;
    isStoppedInAngledAreaOnFoot3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, angle: float, drawSphere: boolean): boolean;
    /** Returns true if the player stopped within the specified 2D area
    *
    * https://library.sannybuilder.com/#/gta3?q=0199 */
    isStoppedInArea2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, drawSphere: boolean): boolean;
    /** Returns true if the player stopped within the specified 3D area
    *
    * https://library.sannybuilder.com/#/gta3?q=019E */
    isStoppedInArea3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, drawSphere: boolean): boolean;
    /** Returns true if the player stopped within the specified 2D area in a vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=019B */
    isStoppedInAreaInCar2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, drawSphere: boolean): boolean;
    /** Returns true if the player stopped within the specified 3D area in a vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=01A0 */
    isStoppedInAreaInCar3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, drawSphere: boolean): boolean;
    /** Returns true if the player stopped within the specified 2D area on foot
    *
    * https://library.sannybuilder.com/#/gta3?q=019A */
    isStoppedInAreaOnFoot2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, drawSphere: boolean): boolean;
    /** Returns true if the player stopped within the specified 3D area on foot
    *
    * https://library.sannybuilder.com/#/gta3?q=019F */
    isStoppedInAreaOnFoot3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, drawSphere: boolean): boolean;
    /** Returns true if the player is aiming at any character
    *
    * https://library.sannybuilder.com/#/gta3?q=0456 */
    isTargettingAnyChar(): boolean;
    /** Returns true if the player is aiming at the specified character
    *
    * https://library.sannybuilder.com/#/gta3?q=0457 */
    isTargettingChar(handle: Char): boolean;
    /** Returns true if the player is aiming at the specified object
    *
    * https://library.sannybuilder.com/#/gta3?q=0458 */
    isTargettingObject(handle: ScriptObject): boolean;
    /** Returns true if the player is colliding with the specified object
    *
    * https://library.sannybuilder.com/#/gta3?q=0178 */
    isTouchingObject(object: ScriptObject): boolean;
    /** Returns true if the player is colliding with the specified object on foot
    *
    * https://library.sannybuilder.com/#/gta3?q=023A */
    isTouchingObjectOnFoot(object: ScriptObject): boolean;
    /** Returns true if the player's wanted level is over the specified value
    *
    * https://library.sannybuilder.com/#/gta3?q=010F */
    isWantedLevelGreater(wantedLevel: int): boolean;
    /** Returns true if the player is within the 2D radius of the coordinates point
    *
    * https://library.sannybuilder.com/#/gta3?q=00E3 */
    locateAnyMeans2D(x: float, y: float, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the player is within the specified 3D area
    *
    * https://library.sannybuilder.com/#/gta3?q=00F5 */
    locateAnyMeans3D(x: float, y: float, z: float, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    locateAnyMeansCar2D(handle: Car, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    locateAnyMeansCar3D(handle: Car, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the player is within the 2D radius of the specified character
    *
    * https://library.sannybuilder.com/#/gta3?q=00E9 */
    locateAnyMeansChar2D(target: Char, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the player is nearby the specified character
    *
    * https://library.sannybuilder.com/#/gta3?q=00FB */
    locateAnyMeansChar3D(target: Char, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the player is within the 2D radius of the coordinates point in a vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=00E5 */
    locateInCar2D(x: float, y: float, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the player is within the specified 3D area in a vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=00F7 */
    locateInCar3D(x: float, y: float, z: float, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    locateInCarCar2D(handle: Car, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    locateInCarCar3D(handle: Car, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the player is within the 2D radius of the specified character in a vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=00EB */
    locateInCarChar2D(target: Char, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the player is nearby the specified character in a vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=00FD */
    locateInCarChar3D(target: Char, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the player is within the 2D radius of the coordinates point on foot
    *
    * https://library.sannybuilder.com/#/gta3?q=00E4 */
    locateOnFoot2D(x: float, y: float, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the player is within the specified 3D area on foot
    *
    * https://library.sannybuilder.com/#/gta3?q=00F6 */
    locateOnFoot3D(x: float, y: float, z: float, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    locateOnFootCar2D(handle: Car, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    locateOnFootCar3D(handle: Car, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the player is within the 2D radius of the specified character on foot
    *
    * https://library.sannybuilder.com/#/gta3?q=00EA */
    locateOnFootChar2D(target: Char, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the player is nearby the specified character on foot
    *
    * https://library.sannybuilder.com/#/gta3?q=00FC */
    locateOnFootChar3D(target: Char, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the player stopped within the 2D radius of the coordinates point
    *
    * https://library.sannybuilder.com/#/gta3?q=00E6 */
    locateStoppedAnyMeans2D(x: float, y: float, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the player stopped within the specified 3D area
    *
    * https://library.sannybuilder.com/#/gta3?q=00F8 */
    locateStoppedAnyMeans3D(x: float, y: float, z: float, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the player stopped within the 2D radius of the coordinates point in a vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=00E8 */
    locateStoppedInCar2D(x: float, y: float, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the player stopped within the specified 3D area in a vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=00FA */
    locateStoppedInCar3D(x: float, y: float, z: float, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the player stopped within the 2D radius of the coordinates point on foot
    *
    * https://library.sannybuilder.com/#/gta3?q=00E7 */
    locateStoppedOnFoot2D(x: float, y: float, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the player stopped within the specified 3D area on foot
    *
    * https://library.sannybuilder.com/#/gta3?q=00F9 */
    locateStoppedOnFoot3D(x: float, y: float, z: float, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Makes the player to keep looking at the direction of the character
    *
    * https://library.sannybuilder.com/#/gta3?q=022E */
    lookAtCharAlways(target: Char): void;
    /** Makes the player safe, putting the character in a safe location
    *
    * https://library.sannybuilder.com/#/gta3?q=03EF */
    makeSafeForCutscene(): void;
    /** Takes all weapons away from the player
    *
    * https://library.sannybuilder.com/#/gta3?q=03B8 */
    removeAllWeapons(): void;
    /** Removes all fires located within 3.0 units of the player's position
    *
    * https://library.sannybuilder.com/#/gta3?q=033D */
    saveFromFires(): void;
    /** Sets the amount of ammo the player has in the specified weapon
    *
    * https://library.sannybuilder.com/#/gta3?q=017A */
    setAmmo(weaponType: int, ammo: int): void;
    /** Sets the animation group for the player
    *
    * https://library.sannybuilder.com/#/gta3?q=0246 */
    setAnimGroup(animGroup: int): void;
    /** Sets whether player's control is enabled
    *
    * https://library.sannybuilder.com/#/gta3?q=01B4 */
    setControl(state: boolean): void;
    /** Puts the player at the specified location
    *
    * https://library.sannybuilder.com/#/gta3?q=0055 */
    setCoordinates(x: float, y: float, z: float): void;
    /** Sets the player's currently held weapon
    *
    * https://library.sannybuilder.com/#/gta3?q=01B8 */
    setCurrentWeapon(weaponType: int): void;
    /** Defines whether the player have to reload their gun
    *
    * https://library.sannybuilder.com/#/gta3?q=0331 */
    setFastReload(state: boolean): void;
    /** Sets whether the player loses the cash when gets wasted (works once)
    *
    * https://library.sannybuilder.com/#/gta3?q=0414 */
    setFreeHealthCare(state: boolean): void;
    /** Sets whether the player loses the cash when gets busted (works once)
    *
    * https://library.sannybuilder.com/#/gta3?q=0413 */
    setGetOutOfJailFree(state: boolean): void;
    /** Sets the player's heading (z-angle)
    *
    * https://library.sannybuilder.com/#/gta3?q=0171 */
    setHeading(heading: float): void;
    /** Sets the player's health
    *
    * https://library.sannybuilder.com/#/gta3?q=0222 */
    setHealth(health: int): void;
    /** Makes the player to attack whoever attacks them
    *
    * https://library.sannybuilder.com/#/gta3?q=0292 */
    setHeedThreats(state: boolean): void;
    /** Makes the character act as the player's hooker
    *
    * https://library.sannybuilder.com/#/gta3?q=043E */
    setHooker(hooker: Char): void;
    /** Sets whether cops should ignore the player regardless of wanted level
    *
    * https://library.sannybuilder.com/#/gta3?q=01F7 */
    setIgnorePolice(state: boolean): void;
    /** Defines whether the player can run fast forever
    *
    * https://library.sannybuilder.com/#/gta3?q=0330 */
    setNeverGetsTired(state: boolean): void;
    /** Sets whether the player is visible or not
    *
    * https://library.sannybuilder.com/#/gta3?q=0336 */
    setVisible(state: boolean): void;
    /** Makes the player to stop looking at the character (022E)
    *
    * https://library.sannybuilder.com/#/gta3?q=0230 */
    stopLooking(): void;
    /** Returns the current vehicle of the player and adds it to the mission cleanup list
    *
    * https://library.sannybuilder.com/#/gta3?q=00DA */
    storeCarIsIn(): Car;
    /** Returns the player's vehicle handle without marking it as used by the script, therefore allowing it to be deleted by the game at any time
    *
    * https://library.sannybuilder.com/#/gta3?q=03C1 */
    storeCarIsInNoSave(): Car;
    /** Returns the player's money
    *
    * https://library.sannybuilder.com/#/gta3?q=010B */
    storeScore(): int;
    /** Returns the player's current wanted level
    *
    * https://library.sannybuilder.com/#/gta3?q=01C0 */
    storeWantedLevel(): int;
    /** Rotates the player to face the character
    *
    * https://library.sannybuilder.com/#/gta3?q=0210 */
    turnToFaceChar(char: Char): void;
    /** Rotates the player to face the location
    *
    * https://library.sannybuilder.com/#/gta3?q=01BF */
    turnToFaceCoord(x: float, y: float, z: float): void;
    /** Puts the player at the specified location, removing them from any vehicle they're in
    *
    * https://library.sannybuilder.com/#/gta3?q=012A */
    warpFromCarToCoord(x: float, y: float, z: float): void;
    /** Puts the player in the specified vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=0369 */
    warpIntoCar(vehicle: Car): void;
}
/** Remote-Controlled Cars
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Rc */
interface Rc {
    /** Destroys the remote-control vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=0409 */
    BlowUpBuggy(): void;
    /** Gives control of the remote-control vehicle to the player
    *
    * https://library.sannybuilder.com/#/gta3?q=010C */
    GiveCarToPlayer(player: Player, x: float, y: float, z: float, angle: float): void;
    /** Puts the player in control of a remote-control vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=046E */
    GiveModelToPlayer(handle: Player, x: float, y: float, z: float, angle: float, modelId: int): void;
}
declare var Rc: Rc
/** Configuration of Respawn Points
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Restart */
interface Restart {
    /** Adds a new location where the player can respawn after death
    *
    * https://library.sannybuilder.com/#/gta3?q=016C */
    AddHospital(x: float, y: float, z: float, heading: float): void;
    /** Adds a new location where the player can respawn after arrest
    *
    * https://library.sannybuilder.com/#/gta3?q=016D */
    AddPolice(x: float, y: float, z: float, heading: float): void;
    /** Stops the player from spawning at the override location (016E)
    *
    * https://library.sannybuilder.com/#/gta3?q=01F6 */
    CancelOverride(): void;
    /** Fades the screen and puts the player at the location
    *
    * https://library.sannybuilder.com/#/gta3?q=0255 */
    CriticalMission(x: float, y: float, z: float, heading: float): void;
    /** Overrides the hospital level (island)
    *
    * https://library.sannybuilder.com/#/gta3?q=041F */
    OverrideHospital(levelId: int): void;
    /** Forces this location to be the next respawn location
    *
    * https://library.sannybuilder.com/#/gta3?q=016E */
    OverrideNext(x: float, y: float, z: float, heading: float): void;
    /** Overrides the police station level (island)
    *
    * https://library.sannybuilder.com/#/gta3?q=0420 */
    OverridePolice(levelId: int): void;
    /** Sets whether the next arrest will cause the screen to fade in
    *
    * https://library.sannybuilder.com/#/gta3?q=040E */
    SetFadeInAfterNextArrest(state: boolean): void;
    /** Sets whether the next death will cause the screen to fade in
    *
    * https://library.sannybuilder.com/#/gta3?q=040F */
    SetFadeInAfterNextDeath(state: boolean): void;
}
declare var Restart: Restart
/** Script Fires
 * 
 * https://library.sannybuilder.com/#/gta3/classes/ScriptFire */
declare class ScriptFire {
    constructor(handle: number);
    /** Creates a script fire at the location
    *
    * https://library.sannybuilder.com/#/gta3?q=02CF */
    static Create(x: float, y: float, z: float): ScriptFire;
    /** Creates a script fire on the vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=0325 */
    static CreateCarFire(vehicle: Car): ScriptFire;
    /** Creates a script fire on the character
    *
    * https://library.sannybuilder.com/#/gta3?q=0326 */
    static CreateCharFire(char: Char): ScriptFire;
    /** Returns true if the script fire has been put out
    *
    * https://library.sannybuilder.com/#/gta3?q=02D0 */
    isExtinguished(): boolean;
    /** Removes the script fire
    *
    * https://library.sannybuilder.com/#/gta3?q=02D1 */
    remove(): void;
    /** Enables or disables the audio of the script fire
    *
    * https://library.sannybuilder.com/#/gta3?q=0444 */
    setAudio(state: boolean): void;
}
/** Script Objects
 * 
 * https://library.sannybuilder.com/#/gta3/classes/ScriptObject */
declare class ScriptObject {
    constructor(handle: number);
    /** Creates an object at the specified location, with the specified model
    *
    * https://library.sannybuilder.com/#/gta3?q=0107 */
    static Create(modelId: int, x: float, y: float, z: float): ScriptObject;
    /** Creates an object without offset at the location
    *
    * https://library.sannybuilder.com/#/gta3?q=029B */
    static CreateNoOffset(modelId: int, x: float, y: float, z: float): ScriptObject;
    /** Returns true if the handle is a valid object handle
    *
    * https://library.sannybuilder.com/#/gta3?q=03CA */
    static DoesExist(handle: int): boolean;
    /** Stores the health of the bodycast object used in the 'Plaster Blaster' mission
    *
    * https://library.sannybuilder.com/#/gta3?q=03F8 */
    static GetBodyCastHealth(): int;
    /** Adds the given vector to the object's velocity (0381)
    *
    * https://library.sannybuilder.com/#/gta3?q=038C */
    addToVelocity(x: float, y: float, z: float): void;
    /** Destroys the object, freeing game memory
    *
    * https://library.sannybuilder.com/#/gta3?q=0108 */
    delete(): void;
    /** Removes the object from the mission cleanup list, preventing it from being deleted when the mission ends
    *
    * https://library.sannybuilder.com/#/gta3?q=01C7 */
    dontRemove(): void;
    flash(state: boolean): void;
    /** Returns the object's coordinates
    *
    * https://library.sannybuilder.com/#/gta3?q=01BB */
    getCoordinates(): {
        x: float;
        y: float;
        z: float;
    };
    /** Returns the object's heading (z-angle)
    *
    * https://library.sannybuilder.com/#/gta3?q=0176 */
    getHeading(): float;
    /** Returns the object's coordinates with an offset
    *
    * https://library.sannybuilder.com/#/gta3?q=04C2 */
    getOffsetInWorldCoords(xOffset: float, yOffset: float, zOffset: float): {
        x: float;
        y: float;
        z: float;
    };
    /** Returns true if the object is damaged
    *
    * https://library.sannybuilder.com/#/gta3?q=0366 */
    hasBeenDamaged(): boolean;
    /** Returns true if the object is visible
    *
    * https://library.sannybuilder.com/#/gta3?q=02CC */
    isOnScreen(): boolean;
    /** Makes the object targettable (ability to be auto-aimed)
    *
    * https://library.sannybuilder.com/#/gta3?q=035D */
    makeTargettable(): void;
    /** Allows the object to be deleted by the game if necessary, and also removes it from the mission cleanup list, if applicable
    *
    * https://library.sannybuilder.com/#/gta3?q=01C4 */
    markAsNoLongerNeeded(): void;
    /** Places the object at an offset from the car
    *
    * https://library.sannybuilder.com/#/gta3?q=035C */
    placeRelativeToCar(vehicle: Car, xOffset: float, yOffset: float, zOffset: float): void;
    /** Places the object relative to the other object
    *
    * https://library.sannybuilder.com/#/gta3?q=045E */
    placeRelativeToObject(target: ScriptObject, offsetX: float, offsetY: float, offsetZ: float): void;
    /** Rotates the object from one angle to another, optionally accounting for a collision during the rotation
    *
    * https://library.sannybuilder.com/#/gta3?q=034D */
    rotate(fromAngle: float, toAngle: float, collisionCheck: boolean): boolean;
    /** Sets the object's collision detection
    *
    * https://library.sannybuilder.com/#/gta3?q=0382 */
    setCollision(state: boolean): void;
    /** Puts the object at the specified location
    *
    * https://library.sannybuilder.com/#/gta3?q=01BC */
    setCoordinates(x: float, y: float, z: float): void;
    /** Sets the specified object to always draw on top of other objects
    *
    * https://library.sannybuilder.com/#/gta3?q=0418 */
    setDrawLast(state: boolean): void;
    /** Makes the object moveable
    *
    * https://library.sannybuilder.com/#/gta3?q=0392 */
    setDynamic(state: boolean): void;
    /** Sets the object's heading (z-angle)
    *
    * https://library.sannybuilder.com/#/gta3?q=0177 */
    setHeading(heading: float): void;
    /** Sets the object rotation along X, Y and Z axis
    *
    * https://library.sannybuilder.com/#/gta3?q=0453 */
    setRotation(x: float, y: float, z: float): void;
    /** Sets the object's velocity
    *
    * https://library.sannybuilder.com/#/gta3?q=0381 */
    setVelocity(xSpeed: float, ySpeed: float, zSpeed: float): void;
    /** Returns true if the object has finished moving
    *
    * https://library.sannybuilder.com/#/gta3?q=034E */
    slide(fromX: float, fromY: float, fromZ: float, xSpeed: float, ySpeed: float, zSpeed: float, collisionCheck: boolean): boolean;
}
/** Positionable Audio Effects
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Sound */
declare class Sound {
    constructor(handle: number);
    /** Creates a continuous sound at the location
    *
    * https://library.sannybuilder.com/#/gta3?q=018D */
    static AddContinuous(x: float, y: float, z: float, soundId: int): Sound;
    /** Plays a sound with the specified ID at the location
    *
    * https://library.sannybuilder.com/#/gta3?q=018C */
    static AddOneOffSound(x: float, y: float, z: float, soundId: int): void;
    /** Stops the sound
    *
    * https://library.sannybuilder.com/#/gta3?q=018E */
    remove(): void;
}
/** Cylinder Markers
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Sphere */
declare class Sphere {
    constructor(handle: number);
    /** Creates a static sphere at the location, with the specified radius
    *
    * https://library.sannybuilder.com/#/gta3?q=03BC */
    static Create(x: float, y: float, z: float, radius: float): Sphere;
    /** Displays a red cylinder sphere
    *
    * https://library.sannybuilder.com/#/gta3?q=03A1 */
    static Draw(x: float, y: float, z: float, radius: float): void;
    /** Destroys a static sphere
    *
    * https://library.sannybuilder.com/#/gta3?q=03BD */
    remove(): void;
}
/** Game Statistics
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Stat */
interface Stat {
    /** Increases the progress made stat by the specified amount
    *
    * https://library.sannybuilder.com/#/gta3?q=030C */
    PlayerMadeProgress(progress: int): void;
    /** Saves the fastest time to the Multistorey Mayhem stat
    *
    * https://library.sannybuilder.com/#/gta3?q=0400 */
    Register4X4MayhemTime(timeInSec: int): void;
    /** Saves the fastest time to the Patriot Playground stat
    *
    * https://library.sannybuilder.com/#/gta3?q=03FD */
    Register4X4OneTime(timeInSec: int): void;
    /** Saves the fastest time to the Gripped! stat
    *
    * https://library.sannybuilder.com/#/gta3?q=03FF */
    Register4X4ThreeTime(timeInSec: int): void;
    /** Saves the fastest time to the A Ride In The Park stat
    *
    * https://library.sannybuilder.com/#/gta3?q=03FE */
    Register4X4TwoTime(timeInSec: int): void;
    /** Saves the highest paramedic mission level stat
    *
    * https://library.sannybuilder.com/#/gta3?q=0403 */
    RegisterAmbulanceLevel(highestLevel: int): void;
    /** Increments the number of criminals killed on Vigilante mission stat by 1
    *
    * https://library.sannybuilder.com/#/gta3?q=0402 */
    RegisterCriminalCaught(): void;
    /** Saves the time for bomb defusal stat
    *
    * https://library.sannybuilder.com/#/gta3?q=0407 */
    RegisterDefuseBombTime(timeInSec: int): void;
    /** Saves the best time in Turismo stat
    *
    * https://library.sannybuilder.com/#/gta3?q=03E2 */
    RegisterElBurroTime(timeInSec: int): void;
    /** Updates the stat if the value is lower than the current stat value
    *
    * https://library.sannybuilder.com/#/gta3?q=042E */
    RegisterFastestTime(statId: int, value: int): void;
    /** Increments the number of fires extinguished stat by 1
    *
    * https://library.sannybuilder.com/#/gta3?q=0404 */
    RegisterFireExtinguished(): void;
    /** Updates the stat if the value is higher than the current stat value
    *
    * https://library.sannybuilder.com/#/gta3?q=042F */
    RegisterHighestScore(statId: int, value: int): void;
    /** Saves the highest insane jump distance stat
    *
    * https://library.sannybuilder.com/#/gta3?q=030E */
    RegisterJumpDistance(distance: float): void;
    /** Saves the highest insane jump flips stat
    *
    * https://library.sannybuilder.com/#/gta3?q=0310 */
    RegisterJumpFlips(flips: int): void;
    /** Saves the highest insane jump height stat
    *
    * https://library.sannybuilder.com/#/gta3?q=030F */
    RegisterJumpHeight(height: float): void;
    /** Saves the highest insane jump rotation stat
    *
    * https://library.sannybuilder.com/#/gta3?q=0311 */
    RegisterJumpSpins(spins: int): void;
    /** Saves the best insane stunt stat
    *
    * https://library.sannybuilder.com/#/gta3?q=0312 */
    RegisterJumpStunt(stunt: int): void;
    /** Increments the number of rampages passed stat by 1
    *
    * https://library.sannybuilder.com/#/gta3?q=041B */
    RegisterKillFrenzyPassed(): void;
    /** Increments the number of people saved in an ambulance stat by 1
    *
    * https://library.sannybuilder.com/#/gta3?q=0401 */
    RegisterLifeSaved(): void;
    /** Saves the longest flight in Dodo stat
    *
    * https://library.sannybuilder.com/#/gta3?q=0406 */
    RegisterLongestDodoFlight(timeInSec: int): void;
    /** Increments the number of mission attempts stat by 1
    *
    * https://library.sannybuilder.com/#/gta3?q=0317 */
    RegisterMissionGiven(): void;
    /** Sets the GXT of the last mission passed
    *
    * https://library.sannybuilder.com/#/gta3?q=0318 */
    RegisterMissionPassed(key: string): void;
    /** Adds the value to the cash made in taxi stat
    *
    * https://library.sannybuilder.com/#/gta3?q=0316 */
    RegisterMoneyMadeTaxi(cashAmount: int): void;
    /** Increments the number of passengers dropped off stat by 1
    *
    * https://library.sannybuilder.com/#/gta3?q=0315 */
    RegisterPassengerDroppedOffTaxi(): void;
    /** Increments the completed number of unique stunt jumps stat by 1
    *
    * https://library.sannybuilder.com/#/gta3?q=0313 */
    RegisterUniqueJumpFound(): void;
    /** Sets Staunton Island as complete
    *
    * https://library.sannybuilder.com/#/gta3?q=034B */
    SetCommercialPassed(): void;
    /** Sets Portland as complete
    *
    * https://library.sannybuilder.com/#/gta3?q=034A */
    SetIndustrialPassed(): void;
    /** Sets the maximum progress the player can reach
    *
    * https://library.sannybuilder.com/#/gta3?q=030D */
    SetProgressTotal(maxProgress: int): void;
    /** Sets Shoreside Vale as complete
    *
    * https://library.sannybuilder.com/#/gta3?q=034C */
    SetSuburbanPassed(): void;
    /** Sets the total number of rampages passed stat
    *
    * https://library.sannybuilder.com/#/gta3?q=0408 */
    SetTotalNumberOfKillFrenzies(total: int): void;
    /** Sets the total number of missions that can be completed
    *
    * https://library.sannybuilder.com/#/gta3?q=042C */
    SetTotalNumberOfMissions(numMissions: int): void;
    /** Sets the total number of unique stunt jumps stat
    *
    * https://library.sannybuilder.com/#/gta3?q=0314 */
    SetUniqueJumpsTotal(total: int): void;
}
declare var Stat: Stat
/** Loading Game Assets
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Streaming */
interface Streaming {
    GetNameOfVehicleModel(modelId: int): string;
    /** Returns true if the model is available for creation
    *
    * https://library.sannybuilder.com/#/gta3?q=0248 */
    HasModelLoaded(modelId: int): boolean;
    /** Returns true if the special character's model (023C) is available for creation
    *
    * https://library.sannybuilder.com/#/gta3?q=023D */
    HasSpecialCharacterLoaded(slotId: int): boolean;
    /** Returns true if the level (island) collision is loaded (03F7)
    *
    * https://library.sannybuilder.com/#/gta3?q=03C6 */
    IsCollisionInMemory(level: int): boolean;
    /** Loads any requested models (0247 or 0353) synchronously
    *
    * https://library.sannybuilder.com/#/gta3?q=038B */
    LoadAllModelsNow(): void;
    /** Loads the level (island) collision
    *
    * https://library.sannybuilder.com/#/gta3?q=03F7 */
    LoadCollision(level: int): void;
    /** Loads a level (island) collision with a greeting message
    *
    * https://library.sannybuilder.com/#/gta3?q=044C */
    LoadCollisionWithScreen(level: int): void;
    /** Starts loading a specific location, just like if the player was there, removing LOD textures
    *
    * https://library.sannybuilder.com/#/gta3?q=03CB */
    LoadScene(x: float, y: float, z: float): void;
    /** Requests a special character's model to be loaded into the specified slot
    *
    * https://library.sannybuilder.com/#/gta3?q=023C */
    LoadSpecialCharacter(slotId: int, modelName: string): void;
    /** Loads a model with the given name as a cutscene model id (GTA III: 185-189, VC: 295-299)
    *
    * https://library.sannybuilder.com/#/gta3?q=02F3 */
    LoadSpecialModel(cutsceneModelId: int, modelName: string): void;
    /** Releases the specified model, freeing game memory
    *
    * https://library.sannybuilder.com/#/gta3?q=0249 */
    MarkModelAsNoLongerNeeded(modelId: int): void;
    /** Requests a new model to load
    *
    * https://library.sannybuilder.com/#/gta3?q=0247 */
    RequestModel(modelId: int): void;
    /** Sets the streaming of additional models like peds, cars, and maps
    *
    * https://library.sannybuilder.com/#/gta3?q=03AF */
    Switch(state: boolean): void;
    /** Releases the special character (023C), freeing game memory
    *
    * https://library.sannybuilder.com/#/gta3?q=0296 */
    UnloadSpecialCharacter(slotId: int): void;
}
declare var Streaming: Streaming
/** Stuck Cars Check
 * 
 * https://library.sannybuilder.com/#/gta3/classes/StuckCarCheck */
interface StuckCarCheck {
    /** Adds the vehicle to the stuck cars array
    *
    * https://library.sannybuilder.com/#/gta3?q=03CC */
    Add(vehicle: Car, speed: float, duration: int): void;
    /** Returns true if the car is stuck
    *
    * https://library.sannybuilder.com/#/gta3?q=03CE */
    IsCarStuck(vehicle: Car): boolean;
    /** Removes the vehicle from the stuck cars array
    *
    * https://library.sannybuilder.com/#/gta3?q=03CD */
    Remove(vehicle: Car): void;
}
declare var StuckCarCheck: StuckCarCheck
/** Text Messages
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Text */
interface Text {
    AddLabel(dynamicKey: string, text: string): void;
    /** Removes the text box from the screen
    *
    * https://library.sannybuilder.com/#/gta3?q=03E6 */
    ClearHelp(): void;
    /** Clears all priority text and some styles of big texts
    *
    * https://library.sannybuilder.com/#/gta3?q=00BE */
    ClearPrints(): void;
    /** Clears small messages from the screen
    *
    * https://library.sannybuilder.com/#/gta3?q=03EB */
    ClearSmallPrints(): void;
    /** Removes the styled text from the screen
    *
    * https://library.sannybuilder.com/#/gta3?q=03D6 */
    ClearThisBigPrint(key: string): void;
    /** Removes the priority text from the screen
    *
    * https://library.sannybuilder.com/#/gta3?q=03D5 */
    ClearThisPrint(key: string): void;
    /** Draws text at the specified on-screen position
    *
    * https://library.sannybuilder.com/#/gta3?q=033E */
    Display(offsetLeft: float, offsetTop: float, key: string): void;
    DisplayFormatted(screenX: float, screenY: float, text: string, _: number[]): void;
    DisplayString(screenX: float, screenY: float, text: string): void;
    /** Draws text with 2 numbers
    *
    * https://library.sannybuilder.com/#/gta3?q=045B */
    DisplayWith2Numbers(offsetLeft: float, offsetTop: float, key: string, num1: int, num2: int): void;
    /** Draws text with 1 number
    *
    * https://library.sannybuilder.com/#/gta3?q=045A */
    DisplayWithNumber(offsetLeft: float, offsetTop: float, key: string, num: int): void;
    GetLabelString(key: string): string;
    /** Displays a message positioned on the bottom of the screen for the specified time
    *
    * https://library.sannybuilder.com/#/gta3?q=00BB */
    Print(key: string, time: int, flag: int): void;
    /** Displays a styled message for the specified time
    *
    * https://library.sannybuilder.com/#/gta3?q=00BA */
    PrintBig(key: string, time: int, style: int): void;
    /** Displays a styled message for the specified time respecting the format of the String entered
    *
    * https://library.sannybuilder.com/#/gta3?q=0ACF */
    PrintBigFormatted(text: string, time: int, style: int, ...args: number[]): void;
    /** Displays a low-priority styled message for the specified time
    *
    * https://library.sannybuilder.com/#/gta3?q=0217 */
    PrintBigQ(key: string, duration: int, style: int): void;
    PrintBigString(text: string, time: int, style: int): void;
    PrintFormatted(text: string, time: int, ...arg: number[]): void;
    PrintFormattedNow(text: string, time: int, ...arg: number[]): void;
    /** Displays a black text box for a few seconds
    *
    * https://library.sannybuilder.com/#/gta3?q=03E5 */
    PrintHelp(key: string): void;
    /** Displays a black text box for a few seconds respecting the format of the String entered
    *
    * https://library.sannybuilder.com/#/gta3?q=0ACE */
    PrintHelpFormatted(text: string, ...args: number[]): void;
    PrintHelpString(text: string): void;
    /** Displays a message positioned on the bottom of the screen for the specified time
    *
    * https://library.sannybuilder.com/#/gta3?q=00BC */
    PrintNow(key: string, time: int, flag: int): void;
    /** Displays a message for the specified time when there are no other messages being printed
    *
    * https://library.sannybuilder.com/#/gta3?q=00BD */
    PrintSoon(key: string, time: int, flag: int): void;
    /** Displays the text (provided as a string literal or an address) similarly to 00BB
    *
    * https://library.sannybuilder.com/#/gta3?q=0ACC */
    PrintString(text: string, time: int): void;
    /** Displays a styled message in which the first string token ~a~ is substituted with the specified text
    *
    * https://library.sannybuilder.com/#/gta3?q=0375 */
    PrintStringInString(templateKey: string, replacementKey: string, duration: int, style: int): void;
    /** Displays a styled message in which the first string token ~a~ is substituted with the specified text
    *
    * https://library.sannybuilder.com/#/gta3?q=0384 */
    PrintStringInStringNow(templateKey: string, replacementKey: string, duration: int, style: int): void;
    PrintStringNow(text: string, time: int): void;
    /** Displays a styled message in which the first two ~1~ tokens are substituted with the specified numbers
    *
    * https://library.sannybuilder.com/#/gta3?q=02FC */
    PrintWith2Numbers(key: string, num1: int, num2: int, duration: int, style: int): void;
    /** Displays a styled message in which the first two ~1~ tokens are substituted with the specified numbers
    *
    * https://library.sannybuilder.com/#/gta3?q=036D */
    PrintWith2NumbersBig(key: string, num1: int, num2: int, duration: int, style: int): void;
    /** Displays a styled message in which the first two ~1~ tokens are substituted with the specified numbers
    *
    * https://library.sannybuilder.com/#/gta3?q=02FD */
    PrintWith2NumbersNow(key: string, num1: int, num2: int, duration: int, style: int): void;
    /** Displays a styled message with the 2 specified numbers when there are no other messages being printed
    *
    * https://library.sannybuilder.com/#/gta3?q=02FE */
    PrintWith2NumbersSoon(key: string, num1: int, num2: int, duration: int, style: int): void;
    /** Displays a styled message in which the first three ~1~ tokens are substituted with the specified numbers
    *
    * https://library.sannybuilder.com/#/gta3?q=02FF */
    PrintWith3Numbers(key: string, num1: int, num2: int, num3: int, duration: int, style: int): void;
    /** Displays a styled message in which the first three ~1~ tokens are substituted with the specified numbers
    *
    * https://library.sannybuilder.com/#/gta3?q=036E */
    PrintWith3NumbersBig(key: string, num1: int, num2: int, num3: int, duration: int, style: int): void;
    /** Displays a styled message in which the first three ~1~ tokens are substituted with the specified numbers
    *
    * https://library.sannybuilder.com/#/gta3?q=0300 */
    PrintWith3NumbersNow(key: string, num1: int, num2: int, num3: int, duration: int, style: int): void;
    /** Displays a styled message in which the first four ~1~ tokens are substituted with the specified numbers
    *
    * https://library.sannybuilder.com/#/gta3?q=0302 */
    PrintWith4Numbers(key: string, num1: int, num2: int, num3: int, num4: int, duration: int, style: int): void;
    /** Displays a styled message in which the first four ~1~ tokens are substituted with the specified numbers
    *
    * https://library.sannybuilder.com/#/gta3?q=036F */
    PrintWith4NumbersBig(key: string, num1: int, num2: int, num3: int, num4: int, duration: int, style: int): void;
    /** Displays a styled message in which the first four ~1~ tokens are substituted with the specified numbers
    *
    * https://library.sannybuilder.com/#/gta3?q=0303 */
    PrintWith4NumbersNow(key: string, num1: int, num2: int, num3: int, num4: int, duration: int, style: int): void;
    /** Displays a styled message in which the first five ~1~ tokens are substituted with the specified numbers
    *
    * https://library.sannybuilder.com/#/gta3?q=0305 */
    PrintWith5Numbers(key: string, num1: int, num2: int, num3: int, num4: int, num5: int, duration: int, style: int): void;
    /** Displays a styled message in which the first five ~1~ tokens are substituted with the specified numbers
    *
    * https://library.sannybuilder.com/#/gta3?q=0370 */
    PrintWith5NumbersBig(key: string, num1: int, num2: int, num3: int, num4: int, num5: int, duration: int, style: int): void;
    /** Displays a styled message in which the first five ~1~ tokens are substituted with the specified numbers
    *
    * https://library.sannybuilder.com/#/gta3?q=0306 */
    PrintWith5NumbersNow(key: string, num1: int, num2: int, num3: int, num4: int, num5: int, duration: int, style: int): void;
    /** Displays a styled message in which the first six ~1~ tokens are substituted with the specified numbers
    *
    * https://library.sannybuilder.com/#/gta3?q=0308 */
    PrintWith6Numbers(key: string, num1: int, num2: int, num3: int, num4: int, num5: int, num6: int, duration: int, style: int): void;
    /** Displays a styled message in which the first six ~1~ tokens are substituted with the specified numbers
    *
    * https://library.sannybuilder.com/#/gta3?q=0371 */
    PrintWith6NumbersBig(key: string, num1: int, num2: int, num3: int, num4: int, num5: int, num6: int, duration: int, style: int): void;
    /** Displays a styled message in which the first six ~1~ tokens are substituted with the specified numbers
    *
    * https://library.sannybuilder.com/#/gta3?q=0309 */
    PrintWith6NumbersNow(key: string, num1: int, num2: int, num3: int, num4: int, num5: int, num6: int, duration: int, style: int): void;
    /** Displays a styled message in which the first string token ~1~ is substituted with the specified number
    *
    * https://library.sannybuilder.com/#/gta3?q=01E4 */
    PrintWithNumber(key: string, num: int, duration: int, flag: int): void;
    /** Displays a styled message in which the first string token~1~ is substituted with the specified number
    *
    * https://library.sannybuilder.com/#/gta3?q=01E3 */
    PrintWithNumberBig(key: string, num: int, duration: int, style: int): void;
    /** Displays a low-priority styled message in which the first string token~1~ is replaced with the specified number
    *
    * https://library.sannybuilder.com/#/gta3?q=0218 */
    PrintWithNumberBigQ(key: string, num: int, duration: int, style: int): void;
    /** Displays a styled message in which the first string token ~1~ is substituted with the specified number
    *
    * https://library.sannybuilder.com/#/gta3?q=01E5 */
    PrintWithNumberNow(key: string, num: int, duration: int, flag: int): void;
    RemoveLabel(dynamicKey: string): void;
    ScanString(str: string, format: string, ...args: number[]): string;
    /** Gives the text a background (0346)
    *
    * https://library.sannybuilder.com/#/gta3?q=0345 */
    SetBackground(state: boolean): void;
    /** Sets the color of the background of the text
    *
    * https://library.sannybuilder.com/#/gta3?q=0346 */
    SetBackgroundColor(r: int, g: int, b: int, a: int): void;
    /** Sets the background of the text to enclose centered text (0342 and 0346)
    *
    * https://library.sannybuilder.com/#/gta3?q=0347 */
    SetBackgroundOnlyText(state: boolean): void;
    /** Centers the text
    *
    * https://library.sannybuilder.com/#/gta3?q=0342 */
    SetCenter(state: boolean): void;
    /** Sets the line width of the centered text
    *
    * https://library.sannybuilder.com/#/gta3?q=0344 */
    SetCenterSize(width: float): void;
    /** Sets the color of the text letters
    *
    * https://library.sannybuilder.com/#/gta3?q=0340 */
    SetColor(red: int, green: int, blue: int, alpha: int): void;
    /** Causes the next text to be drawn before the fade is drawn
    *
    * https://library.sannybuilder.com/#/gta3?q=03E0 */
    SetDrawBeforeFade(state: boolean): void;
    /** Sets the text draw font
    *
    * https://library.sannybuilder.com/#/gta3?q=0349 */
    SetFont(font: int): void;
    /** Sets the text to be drawn justified, which means the text will wrap in order to fill an even rectangle of space
    *
    * https://library.sannybuilder.com/#/gta3?q=0341 */
    SetJustify(state: boolean): void;
    /** Makes the text size proportionate
    *
    * https://library.sannybuilder.com/#/gta3?q=0348 */
    SetProportional(state: boolean): void;
    /** Sets the text draw to be aligned to the right
    *
    * https://library.sannybuilder.com/#/gta3?q=03E4 */
    SetRightJustify(state: boolean): void;
    /** Scales the width and height of the text letters
    *
    * https://library.sannybuilder.com/#/gta3?q=033F */
    SetScale(widthScale: float, heightScale: float): void;
    /** Sets the line width of the text
    *
    * https://library.sannybuilder.com/#/gta3?q=0343 */
    SetWrapX(width: float): void;
    StringFormat(format: string, ...args: number[]): string;
    /** Enables text and texture drawing
    *
    * https://library.sannybuilder.com/#/gta3?q=03F0 */
    UseCommands(state: boolean): void;
}
declare var Text: Text
/** Texture Dictionaries
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Txd */
interface Txd {
    /** Loads the texture dictionary for use in drawing sprites (038D) on the screen
    *
    * https://library.sannybuilder.com/#/gta3?q=0390 */
    LoadDictionary(name: string): void;
    /** Loads a sprite from the most recently loaded texture dictionary (0390)
    *
    * https://library.sannybuilder.com/#/gta3?q=038F */
    LoadSprite(memorySlot: int, spriteName: string): void;
    /** Unloads all currently loaded textures (038F), as well as texture dictionaries (0390), freeing game memory
    *
    * https://library.sannybuilder.com/#/gta3?q=0391 */
    Remove(): void;
}
declare var Txd: Txd
/** Weapons
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Weapon */
interface Weapon {
    /** Gets the model ID of the weapon according to the weapon type
    *
    * https://library.sannybuilder.com/#/gta3?q=0604 */
    GetModel(weaponType: int): int;
    /** Gets the type of weapon according to the model ID of the weapon
    *
    * https://library.sannybuilder.com/#/gta3?q=0605 */
    GetTypeForModel(modelId: int): int;
}
declare var Weapon: Weapon
/** Weather Control
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Weather */
interface Weather {
    /** Forces the game weather to the specified type
    *
    * https://library.sannybuilder.com/#/gta3?q=01B5 */
    Force(type: int): void;
    /** Forces the upcoming weather to the specified type
    *
    * https://library.sannybuilder.com/#/gta3?q=01B6 */
    ForceNow(type: int): void;
    /** Forces rain everywhere
    *
    * https://library.sannybuilder.com/#/gta3?q=0421 */
    ForceRain(state: boolean): void;
    /** Gets the current weather ID
    *
    * https://library.sannybuilder.com/#/gta3?q=0607 */
    GetCurrent(): int;
    /** Allows the game to continue its usual weather pattern after using 01B5
    *
    * https://library.sannybuilder.com/#/gta3?q=01B7 */
    Release(): void;
    /** Restores the weather previously saved with 0251
    *
    * https://library.sannybuilder.com/#/gta3?q=0252 */
    Restore(): void;
    /** Saves the weather (type, interpolation value and the amount of rain fallen)
    *
    * https://library.sannybuilder.com/#/gta3?q=0251 */
    Store(): void;
}
declare var Weather: Weather
/** Traffic, Population and other Physical Entities
 * 
 * https://library.sannybuilder.com/#/gta3/classes/World */
interface World {
    /** Returns the handle of an object with the specified model located in the 2D area, or -1 otherwise
    *
    * https://library.sannybuilder.com/#/gta3?q=045D */
    GetClosestObjectOfType(x: float, y: float, z: float, range: float, modelId: int): ScriptObject;
    /** Returns the handle of a random car with the specified model in the specified 2D area, or -1 otherwise
    *
    * https://library.sannybuilder.com/#/gta3?q=0327 */
    GetRandomCarOfTypeInArea(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, modelId: int): Car;
    /** Returns the handle of a random vehicle with the specified model in the specified map zone, or -1 otherwise
    *
    * https://library.sannybuilder.com/#/gta3?q=0328 */
    GetRandomCarOfTypeInZone(zone: string, modelId: int): Car;
    /** Returns the handle of a random pedestrian in the specified 2D area, or -1 otherwise
    *
    * https://library.sannybuilder.com/#/gta3?q=02DC */
    GetRandomCharInArea(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float): Char;
    /** Returns the handle of a random law enforcement pedestrian in the 2D area, or -1 otherwise
    *
    * https://library.sannybuilder.com/#/gta3?q=0469 */
    GetRandomCopInArea(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float): Char;
    /** Clears the area, removing all vehicles and pedestrians
    *
    * https://library.sannybuilder.com/#/gta3?q=0395 */
    ClearArea(x: float, y: float, z: float, radius: float, clearParticles: boolean): void;
    /** Clears all cars in the specified 3D area
    *
    * https://library.sannybuilder.com/#/gta3?q=03BA */
    ClearAreaOfCars(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float): void;
    /** Clears all pedestrians from the given area
    *
    * https://library.sannybuilder.com/#/gta3?q=042B */
    ClearAreaOfChars(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float): void;
    /** Starts spawning random cars at the specified location
    *
    * https://library.sannybuilder.com/#/gta3?q=03C5 */
    CreateRandomCarForCarPark(x: float, y: float, z: float, heading: float): void;
    /** Destroys all projectiles in the specified 3D area
    *
    * https://library.sannybuilder.com/#/gta3?q=02EF */
    DestroyProjectilesInArea(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float): boolean;
    /** Forces the game to spawn only pedestrians of the given type
    *
    * https://library.sannybuilder.com/#/gta3?q=03DF */
    ForceRandomPedType(pedType: int): void;
    /** Stores the ground position at the location
    *
    * https://library.sannybuilder.com/#/gta3?q=02CE */
    GetGroundZFor3DCoord(x: float, y: float, z: float): float;
    GetRandomCarInSphereNoSaveRecursive(x: float, y: float, z: float, radius: float, findNext: boolean, skipWrecked: boolean): boolean;
    GetRandomCharInSphereNoSaveRecursive(x: float, y: float, z: float, radius: float, findNext: boolean, skipDead: boolean): boolean;
    GetRandomObjectInSphereNoSaveRecursive(x: float, y: float, z: float, radius: float, findNext: boolean): boolean;
    /** Returns true if there is anything with the specified properties within the 3D area
    *
    * https://library.sannybuilder.com/#/gta3?q=0339 */
    IsAreaOccupied(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, solid: boolean, car: boolean, char: boolean, object: boolean, particle: boolean): boolean;
    /** Returns true if there is an explosion of the specified type in the 3D area
    *
    * https://library.sannybuilder.com/#/gta3?q=0356 */
    IsExplosionInArea(explosionType: int, leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float): boolean;
    /** Returns true if an explosion of the specified type in the map zone
    *
    * https://library.sannybuilder.com/#/gta3?q=0357 */
    IsExplosionInZone(explosionType: int, zone: string): boolean;
    /** Returns true if there is a vehicle in the specified area
    *
    * https://library.sannybuilder.com/#/gta3?q=038A */
    IsPointObscuredByAMissionEntity(x: float, y: float, z: float, radiusX: float, radiusY: float, radiusZ: float): boolean;
    /** Returns true if a projectile is in the specified 3D area
    *
    * https://library.sannybuilder.com/#/gta3?q=02EE */
    IsProjectileInArea(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float): boolean;
    /** Returns true if a sniper bullet is in the specified area
    *
    * https://library.sannybuilder.com/#/gta3?q=037E */
    IsSniperBulletInArea(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float): boolean;
    /** Returns true if a sniper bullet is flying in the specified 2D area
    *
    * https://library.sannybuilder.com/#/gta3?q=047B */
    LocateSniperBullet2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, drawSphere: boolean): boolean;
    /** Returns true if a sniper bullet is flying in the specified 3D area
    *
    * https://library.sannybuilder.com/#/gta3?q=047C */
    LocateSniperBullet3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, topRightX: float, topRightY: float, topRightZ: float, drawSphere: boolean): boolean;
    /** Removes all script fires (02CF)
    *
    * https://library.sannybuilder.com/#/gta3?q=031A */
    RemoveAllScriptFires(): void;
    /** Removes all particle effects (02A2 or 039D) in the specified area
    *
    * https://library.sannybuilder.com/#/gta3?q=03AE */
    RemoveParticleEffectsInArea(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float): void;
    /** Sets the quantity of traffic that will spawn in the game
    *
    * https://library.sannybuilder.com/#/gta3?q=01EB */
    SetCarDensityMultiplier(multiplier: float): void;
    /** Sets the quantity of pedestrians to spawn in the game
    *
    * https://library.sannybuilder.com/#/gta3?q=03DE */
    SetPedDensityMultiplier(multiplier: float): void;
    /** Sets the visibility of the object closest to the specified coordinates, matching the specified model
    *
    * https://library.sannybuilder.com/#/gta3?q=0363 */
    SetVisibilityOfClosestObjectOfType(x: float, y: float, z: float, radius: float, modelId: int, state: boolean): void;
    /** Creates a vehicle with the model (no pre-loading needed) in front of the player
    *
    * https://library.sannybuilder.com/#/gta3?q=0ADD */
    SpawnVehicleByCheating(modelId: int): void;
    /** Swaps a map model with another map model nearest to the center of the search area
    *
    * https://library.sannybuilder.com/#/gta3?q=03B6 */
    SwapNearestBuildingModel(x: float, y: float, z: float, radius: float, fromModelId: int, toModelId: int): void;
    /** Sets whether the game should render the world or only the cutscene objects
    *
    * https://library.sannybuilder.com/#/gta3?q=03B7 */
    SwitchProcessing(state: boolean): void;
    /** Toggles garbage on the streets
    *
    * https://library.sannybuilder.com/#/gta3?q=03AD */
    SwitchRubbish(state: boolean): void;
}
declare var World: World
/** Game Map Areas Configuration
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Zone */
interface Zone {
    /** Returns the handle of a random pedestrian in the map zone
    *
    * https://library.sannybuilder.com/#/gta3?q=02DD */
    GetRandomChar(zone: string): Char;
    /** Returns the handle of a random law enforcement ped in the map zone
    *
    * https://library.sannybuilder.com/#/gta3?q=046A */
    GetRandomCop(zone: string): Char;
    /** Sets the traffic density in the specified map zone during the day or at night
    *
    * https://library.sannybuilder.com/#/gta3?q=0155 */
    SetCarDensity(zone: string, dayOrNight: int, density: int): void;
    /** Sets the map zone's peds, gangs, and cops traffic density
    *
    * https://library.sannybuilder.com/#/gta3?q=0152 */
    SetCarInfo(zone: string, dayOrNight: int, density: int, mafia: int, triad: int, diablo: int, yakuza: int, yardie: int, colombian: int, hood: int, cop: int, poor: int, rich: int, executive: int, worker: int, special: int, big: int): void;
    /** Assigns one of the ped groups defined in pedgrp.dat to the map zone
    *
    * https://library.sannybuilder.com/#/gta3?q=0324 */
    SetGroup(zone: string, dayOrNight: int, pedGroup: int): void;
    /** Sets the peds density in the specified map zone during the day or at night
    *
    * https://library.sannybuilder.com/#/gta3?q=0156 */
    SetPedDensity(zone: string, dayOrNight: int, density: int): void;
    /** Sets the map zone's peds, gangs, and cops density
    *
    * https://library.sannybuilder.com/#/gta3?q=015C */
    SetPedInfo(zone: string, dayOrNight: int, density: int, mafia: int, triad: int, diablo: int, yakuza: int, yardie: int, colombian: int, hood: int, cop: int): void;
}
declare var Zone: Zone
/** Boats
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Boat */
declare class Boat extends Car {
    constructor(handle: number);
    /** Makes the boat stay motionless in the water
    *
    * https://library.sannybuilder.com/#/gta3?q=0323 */
    anchor(state: boolean): void;
    /** Makes the boat sail to the location
    *
    * https://library.sannybuilder.com/#/gta3?q=02D3 */
    goto(x: float, y: float, z: float): void;
    /** Sets the boat's max speed
    *
    * https://library.sannybuilder.com/#/gta3?q=02DB */
    setCruiseSpeed(maxSpeed: float): void;
    /** Turns off the car's engine
    *
    * https://library.sannybuilder.com/#/gta3?q=02D4 */
    stop(): void;
}
