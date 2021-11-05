// Sanny Builder Library v0.166
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
/** 
 * 
 * https://library.sannybuilder.com/#/sa/classes/Attractor */
declare class Attractor {
    constructor(handle: number);
    /** Adds a ped attractor
    *
    * https://library.sannybuilder.com/#/sa?q=061D */
    static Add(x: float, y: float, z: float, angle: float, _p5: float, sequence: Sequence): Attractor;
    addPedTypeAsUser(pedType: int): void;
    clear(): void;
}
/** 
 * 
 * https://library.sannybuilder.com/#/sa/classes/Audio */
interface Audio {
    /** Sets the loaded audio to play at the vehicle's location
    *
    * https://library.sannybuilder.com/#/sa?q=0A16 */
    AttachMissionAudioToCar(slotId: int, handle: Car): void;
    /** Sets the loaded audio to play at the char's location
    *
    * https://library.sannybuilder.com/#/sa?q=0949 */
    AttachMissionAudioToChar(slotId: int, handle: Char): void;
    /** Sets the loaded audio to play at the object's location
    *
    * https://library.sannybuilder.com/#/sa?q=097C */
    AttachMissionAudioToObject(slotId: int, handle: ScriptObject): void;
    /** Unloads the mission audio (03CF), freeing game memory
    *
    * https://library.sannybuilder.com/#/sa?q=040D */
    ClearMissionAudio(slotId: int): void;
    GetBeatProximity(_p1: int): {
        _p2: int;
        _p3: int;
        _p4: int;
    };
    GetBeatTrackStatus(): int;
    /** Returns the current radio station that is being played
    *
    * https://library.sannybuilder.com/#/sa?q=051E */
    GetRadioChannel(): int;
    /** Returns true if the audio (03CF) is no longer playing
    *
    * https://library.sannybuilder.com/#/sa?q=03D2 */
    HasMissionAudioFinished(slotId: int): boolean;
    /** Returns true if the mission audio has loaded (03CF)
    *
    * https://library.sannybuilder.com/#/sa?q=03D0 */
    HasMissionAudioLoaded(slotId: int): boolean;
    /** Loads the file from the audio directory
    *
    * https://library.sannybuilder.com/#/sa?q=03CF */
    LoadMissionAudio(slotId: int, audioId: int): void;
    /** Sets whether the loaded soundtrack is paused
    *
    * https://library.sannybuilder.com/#/sa?q=0991 */
    PauseCurrentBeatTrack(state: boolean): void;
    PlayBeatTrack(): void;
    /** Plays the loaded sound (03CF)
    *
    * https://library.sannybuilder.com/#/sa?q=03D1 */
    PlayMissionAudio(slotId: int): void;
    /** Plays an audio file with the specified ID from the Audio directory
    *
    * https://library.sannybuilder.com/#/sa?q=0394 */
    PlayMissionPassedTune(soundId: int): void;
    PreloadBeatTrack(trackId: int): void;
    /** Plays the audio event at the car's position
    *
    * https://library.sannybuilder.com/#/sa?q=09F7 */
    ReportMissionAudioEventAtCar(handle: Car, soundId: int): void;
    ReportMissionAudioEventAtChar(handle: Char, soundId: int): void;
    ReportMissionAudioEventAtObject(handle: ScriptObject, soundId: int): void;
    ReportMissionAudioEventAtPosition(x: float, y: float, z: float, soundId: int): void;
    /** Sets the location of the mission audio (03CF) where it can be heard
    *
    * https://library.sannybuilder.com/#/sa?q=03D7 */
    SetMissionAudioPosition(slotId: int, x: float, y: float, z: float): void;
    /** Sets whether sounds should fade along with the screen
    *
    * https://library.sannybuilder.com/#/sa?q=043C */
    SetMusicDoesFade(state: boolean): void;
    /** Sets the current radio station that is playing, if the player is in a vehicle
    *
    * https://library.sannybuilder.com/#/sa?q=041E */
    SetRadioChannel(channel: int): void;
    /** Sets the radio station of the vehicle the player is currently in to the favourite station, retrieved from the stats (ID 326)
    *
    * https://library.sannybuilder.com/#/sa?q=0A26 */
    SetRadioToPlayersFavouriteStation(): void;
    StopBeatTrack(): void;
}
declare var Audio: Audio
/** 
 * 
 * https://library.sannybuilder.com/#/sa/classes/AudioStream */
declare class AudioStream {
    constructor(handle: number);
    static Load(audioFileName: string): boolean;
    /** Gets the audio stream length in seconds
    *
    * https://library.sannybuilder.com/#/sa?q=0AAF */
    getLength(): int;
    getState(): int;
    getVolume(): float;
    remove(): void;
    setLooped(state: boolean): void;
    setState(state: int): void;
    setVolume(volume: float): void;
}
/** 
 * 
 * https://library.sannybuilder.com/#/sa/classes/Blip */
declare class Blip {
    constructor(handle: number);
    /** Adds a blip and a marker to the vehicle
    *
    * https://library.sannybuilder.com/#/sa?q=0186 */
    static AddForCar(vehicle: Car): Blip;
    /** Adds a blip with properties to the vehicle
    *
    * https://library.sannybuilder.com/#/sa?q=0161 */
    static AddForCarOld(vehicle: Car, color: int, display: int): Blip;
    /** Adds a blip and a marker to the character
    *
    * https://library.sannybuilder.com/#/sa?q=0187 */
    static AddForChar(char: Char): Blip;
    /** Adds a blip to the location
    *
    * https://library.sannybuilder.com/#/sa?q=018A */
    static AddForCoord(x: float, y: float, z: float): Blip;
    /** Adds a blip with properties at the location
    *
    * https://library.sannybuilder.com/#/sa?q=0167 */
    static AddForCoordOld(x: float, y: float, z: float, colour: int, display: int): Blip;
    /** Adds a blip and a marker to the character (identical to 0187)
    *
    * https://library.sannybuilder.com/#/sa?q=0888 */
    static AddForDeadChar(char: Char): Blip;
    /** Adds a blip and a marker to the object
    *
    * https://library.sannybuilder.com/#/sa?q=0188 */
    static AddForObject(object: ScriptObject): Blip;
    /** Adds a blip and a marker to the pickup
    *
    * https://library.sannybuilder.com/#/sa?q=03DC */
    static AddForPickup(pickup: Pickup): Blip;
    /** Creates a blip indicating the searchlights position on the radar
    *
    * https://library.sannybuilder.com/#/sa?q=06C4 */
    static AddForSearchlight(searchlight: Searchlight): Blip;
    /** Adds a contact sprite blip for the specified coordinates
    *
    * https://library.sannybuilder.com/#/sa?q=0570 */
    static AddShortRangeSpriteForContactPoint(x: float, y: float, z: float, sprite: int): Blip;
    /** Adds a sprite blip for the specified coordinates
    *
    * https://library.sannybuilder.com/#/sa?q=04CE */
    static AddShortRangeSpriteForCoord(x: float, y: float, z: float, sprite: int): Blip;
    /** Adds a sprite blip to the contact point
    *
    * https://library.sannybuilder.com/#/sa?q=02A7 */
    static AddSpriteForContactPoint(x: float, y: float, z: float, sprite: int): Blip;
    /** Adds a sprite blip to the location
    *
    * https://library.sannybuilder.com/#/sa?q=02A8 */
    static AddSpriteForCoord(x: float, y: float, z: float, sprite: int): Blip;
    /** Returns true if the handle is a valid blip handle
    *
    * https://library.sannybuilder.com/#/sa?q=075C */
    static DoesExist(handle: int): boolean;
    /** Sets the blip's color
    *
    * https://library.sannybuilder.com/#/sa?q=0165 */
    changeColor(color: int): void;
    /** Changes the display of the specified blip
    *
    * https://library.sannybuilder.com/#/sa?q=018B */
    changeDisplay(display: int): void;
    /** Sets the blip's size
    *
    * https://library.sannybuilder.com/#/sa?q=0168 */
    changeScale(size: int): void;
    /** Removes the blip
    *
    * https://library.sannybuilder.com/#/sa?q=0164 */
    remove(): void;
    /** Sets whether the tracking blip will remain regardless of the entities existance
    *
    * https://library.sannybuilder.com/#/sa?q=07BF */
    setAlwaysDisplayOnZoomedRadar(state: boolean): void;
    setAsFriendly(state: boolean): void;
    /** Works similar to 0165, except this command does not work on tracking blips, has different colors and does not support direct RGBA setting
    *
    * https://library.sannybuilder.com/#/sa?q=08FB */
    setCoordAppearance(color: int): void;
    /** Assigns the blip to the specified entrance/exit marker
    *
    * https://library.sannybuilder.com/#/sa?q=08DC */
    setEntryExit(x: float, y: float, radius: float): void;
}
/** 
 * 
 * https://library.sannybuilder.com/#/sa/classes/Camera */
interface Camera {
    /** Makes the camera remain behind the player when in any garage
    *
    * https://library.sannybuilder.com/#/sa?q=09EC */
    AllowFixedCollision(state: boolean): void;
    /** Keeps the camera relative to the actor with the specified offset
    *
    * https://library.sannybuilder.com/#/sa?q=067C */
    AttachToChar(handle: Char, xOffset: float, yOffset: float, zOffset: float, xRotation: float, yRotation: float, zRotation: float, tilt: float, switchStyle: int): void;
    /** Puts the camera on the character like with 067C
    *
    * https://library.sannybuilder.com/#/sa?q=067E */
    AttachToCharLookAtChar(handle: Char, xOffset: float, yOffset: float, zOffset: float, char: Char, tilt: float, switchStyle: int): void;
    AttachToCharLookAtVehicle(char: Char, xOffset: float, yOffset: float, zOffset: float, vehicle: Car, tilt: float, switchStyle: int): void;
    /** Keeps the camera relative to the car with the specified offset
    *
    * https://library.sannybuilder.com/#/sa?q=0679 */
    AttachToVehicle(handle: Car, xOffset: float, yOffset: float, zOffset: float, xRotation: float, yRotation: float, zRotation: float, tilt: float, switchStyle: int): void;
    /** Attaches the camera to the vehicle and points it at the specified character
    *
    * https://library.sannybuilder.com/#/sa?q=067B */
    AttachToVehicleLookAtChar(handle: Char, xOffset: float, yOffset: float, zOffset: float, char: Char, tilt: float, switchStyle: int): void;
    /** Puts the camera on the vehicle like in 0679
    *
    * https://library.sannybuilder.com/#/sa?q=067A */
    AttachToVehicleLookAtVehicle(handle: Car, xOffset: float, yOffset: float, zOffset: float, vehicle: Car, tilt: float, switchStyle: int): void;
    /** Bumps the camera in the specified direction as if it had collided
    *
    * https://library.sannybuilder.com/#/sa?q=0834 */
    DoBump(xOffset: float, yOffset: float): void;
    /** Fades the screen for the specified time
    *
    * https://library.sannybuilder.com/#/sa?q=016A */
    DoFade(time: int, direction: int): void;
    /** Stores the cameras coordinates
    *
    * https://library.sannybuilder.com/#/sa?q=068D */
    GetActiveCoordinates(): {
        x: float;
        y: float;
        z: float;
    };
    /** Gets the coordinates the camera is pointing to
    *
    * https://library.sannybuilder.com/#/sa?q=068E */
    GetActivePointAt(): {
        x: float;
        y: float;
        z: float;
    };
    /** Returns the debug camera position
    *
    * https://library.sannybuilder.com/#/sa?q=0454 */
    GetDebugCoordinates(): {
        x: float;
        y: float;
        z: float;
    };
    /** Stores the location the debug camera is pointing to
    *
    * https://library.sannybuilder.com/#/sa?q=0463 */
    GetDebugPointAt(): {
        x: float;
        y: float;
        z: float;
    };
    /** Returns true if the screen is fading (016A)
    *
    * https://library.sannybuilder.com/#/sa?q=016B */
    GetFadingStatus(): boolean;
    /** Returns the cameras field of view
    *
    * https://library.sannybuilder.com/#/sa?q=0801 */
    GetFov(): float;
    /** Gets the players chosen camera mode of the current vehicle
    *
    * https://library.sannybuilder.com/#/sa?q=0A39 */
    GetPlayerInCarMode(): int;
    /** Returns true if any part of the radius of the specified point is visible on screen
    *
    * https://library.sannybuilder.com/#/sa?q=00C2 */
    IsPointOnScreen(x: float, y: float, z: float, radius: float): boolean;
    /** Returns true if the camera is moving in position
    *
    * https://library.sannybuilder.com/#/sa?q=0933 */
    IsVectorMoveRunning(): boolean;
    /** Returns true if the camera is moving in angle
    *
    * https://library.sannybuilder.com/#/sa?q=0934 */
    IsVectorTrackRunning(): boolean;
    /** Locks the zoom level after the camera has finished zooming
    *
    * https://library.sannybuilder.com/#/sa?q=0931 */
    PersistFov(state: boolean): void;
    /** Locks the cameras position
    *
    * https://library.sannybuilder.com/#/sa?q=0930 */
    PersistPos(state: boolean): void;
    /** Locks the camera target point in position after propagating
    *
    * https://library.sannybuilder.com/#/sa?q=092F */
    PersistTrack(state: boolean): void;
    /** Attaches the camera to the specified vehicle
    *
    * https://library.sannybuilder.com/#/sa?q=0158 */
    PointAtCar(vehicle: Car, mode: int, switchStyle: int): void;
    /** Attaches the camera to the specified character
    *
    * https://library.sannybuilder.com/#/sa?q=0159 */
    PointAtChar(char: Char, mode: int, switchStyle: int): void;
    /** Points the camera at the specified location and applies the position set by 0159
    *
    * https://library.sannybuilder.com/#/sa?q=0160 */
    PointAtPoint(x: float, y: float, z: float, switchStyle: int): void;
    /** Stops the camera propagating, interpolating, shaking and zooming
    *
    * https://library.sannybuilder.com/#/sa?q=0925 */
    ResetNewScriptables(): void;
    /** Resets any changes made with 09EF
    *
    * https://library.sannybuilder.com/#/sa?q=09F0 */
    ResetVehicleTweak(): void;
    /** Restores the camera to its usual position
    *
    * https://library.sannybuilder.com/#/sa?q=015A */
    Restore(): void;
    /** Restores the camera, putting it back behind the player
    *
    * https://library.sannybuilder.com/#/sa?q=02EB */
    RestoreJumpcut(): void;
    /** Puts the camera behind the player
    *
    * https://library.sannybuilder.com/#/sa?q=0373 */
    SetBehindPlayer(): void;
    /** Locks the camera on cinematic vehicle mode
    *
    * https://library.sannybuilder.com/#/sa?q=093D */
    SetCinema(state: boolean): void;
    /** Darkens the game
    *
    * https://library.sannybuilder.com/#/sa?q=0924 */
    SetDarknessEffect(enable: boolean, pitchBlack: int): void;
    /** Sets the RGB color of the fade command (016A)
    *
    * https://library.sannybuilder.com/#/sa?q=0169 */
    SetFadingColor(r: int, g: int, b: int): void;
    /** Enables vehicle bumper view for the camera
    *
    * https://library.sannybuilder.com/#/sa?q=0822 */
    SetFirstPersonInCarMode(state: boolean): void;
    /** Sets the camera's position and rotation
    *
    * https://library.sannybuilder.com/#/sa?q=015F */
    SetFixedPosition(x: float, y: float, z: float, xRotation: float, yRotation: float, zRotation: float): void;
    /** Puts the camera in front of the specified character
    *
    * https://library.sannybuilder.com/#/sa?q=0944 */
    SetInFrontOfChar(handle: Char): void;
    /** Puts the camera in front of the player, pointing towards the player
    *
    * https://library.sannybuilder.com/#/sa?q=03C8 */
    SetInFrontOfPlayer(): void;
    /** Sets how long the camera transition will last
    *
    * https://library.sannybuilder.com/#/sa?q=0460 */
    SetInterpolationParameters(_p1: float, time: int): void;
    /** Sets the cameras zoom factors
    *
    * https://library.sannybuilder.com/#/sa?q=0922 */
    SetLerpFov(from: float, to: float, time: int, ease: boolean): void;
    /** Sets the near clip
    *
    * https://library.sannybuilder.com/#/sa?q=041D */
    SetNearClip(value: float): void;
    /** Puts the camera in first-person mode if the player is holding a weapon with a first-person shooting mode (such as a sniper rifle or camera)
    *
    * https://library.sannybuilder.com/#/sa?q=0A2F */
    SetPhotoEffect(state: boolean): void;
    /** Changes the camera mode on the current vehicle, just like when the user presses the 'change view' key
    *
    * https://library.sannybuilder.com/#/sa?q=09AD */
    SetPlayerInCarMode(mode: int): void;
    /** Sets the position of the camera to an offset of the targeted entity
    *
    * https://library.sannybuilder.com/#/sa?q=0A25 */
    SetPositionUnfixed(xOffset: float, yOffset: float): void;
    /** Jiggles the camera in a variety of different ways
    *
    * https://library.sannybuilder.com/#/sa?q=099C */
    SetShakeSimulationSimple(type: int, timeInMs: float, intensity: float): void;
    /** Enables the cooperative camera mode
    *
    * https://library.sannybuilder.com/#/sa?q=06E0 */
    SetTwoPlayerMode(state: boolean): void;
    /** Puts the camera at the position of the first passed coordinates and moves it to the second passed coordinates
    *
    * https://library.sannybuilder.com/#/sa?q=0936 */
    SetVectorMove(fromX: float, fromY: float, fromZ: float, toX: float, toY: float, toZ: float, time: int, ease: boolean): void;
    /** Makes the camera point at the first coordinates and then rotate to point at the second coordinates
    *
    * https://library.sannybuilder.com/#/sa?q=0920 */
    SetVectorTrack(fromX: float, fromY: float, fromZ: float, toX: float, toY: float, toZ: float, time: int, ease: boolean): void;
    /** Sets the position the camera automatically moves to while driving a vehicle of the specified type
    *
    * https://library.sannybuilder.com/#/sa?q=09EF */
    SetVehicleTweak(modelId: int, distance: float, altitude: float, angle: float): void;
    /** Sets how far behind the camera is from the player
    *
    * https://library.sannybuilder.com/#/sa?q=032A */
    SetZoom(zoom: int): void;
    /** Shakes the camera with the given intensity
    *
    * https://library.sannybuilder.com/#/sa?q=0003 */
    Shake(intensity: int): void;
}
declare var Camera: Camera
/** 
 * 
 * https://library.sannybuilder.com/#/sa/classes/Car */
declare class Car {
    constructor(handle: number);
    /** Creates a vehicle at the specified location, with the specified model
    *
    * https://library.sannybuilder.com/#/sa?q=00A5 */
    static Create(modelId: int, x: float, y: float, z: float): Car;
    /** Sets the town ID of the license plate which is created on the specified model, affecting which texture is chosen for the plate
    *
    * https://library.sannybuilder.com/#/sa?q=0771 */
    static CustomPlateDesignForNextCar(modelId: int, townId: int): void;
    /** Sets the numberplate of the next car to be spawned with the specified model
    *
    * https://library.sannybuilder.com/#/sa?q=0674 */
    static CustomPlateForNextCar(modelId: int, plateText: string): void;
    /** Returns true if the handle is a valid vehicle handle
    *
    * https://library.sannybuilder.com/#/sa?q=056E */
    static DoesExist(handle: int): boolean;
    /** Returns true if the handle is an invalid vehicle handle or the vehicle has been destroyed (wrecked)
    *
    * https://library.sannybuilder.com/#/sa?q=0119 */
    static IsDead(handle: int): boolean;
    static RestoreModState(): void;
    /** Sets the variation of the next car to be created
    *
    * https://library.sannybuilder.com/#/sa?q=0506 */
    static SetModelComponents(_unused: int, component1: int, component2: int): void;
    static StoreModState(): void;
    /** Adds a new mod with the model to the vehicle
    *
    * https://library.sannybuilder.com/#/sa?q=06E7 */
    addMod(modelId: int): int;
    addToRotationVelocity(x: float, y: float, z: float): void;
    /** Activates upside-down car check for the car
    *
    * https://library.sannybuilder.com/#/sa?q=0190 */
    addUpsidedownCheck(): void;
    applyForce(xOffset: float, yOffset: float, zOffset: float, xRotation: float, yRotation: float, zRotation: float): void;
    /** Arms the vehicle with a bomb of the given type (In SA, this command only supports the mobile version)
    *
    * https://library.sannybuilder.com/#/sa?q=0242 */
    armWithBomb(bombType: int): void;
    attachToCar(handle: Car, xOffset: float, yOffset: float, zOffset: float, xRotation: float, yRotation: float, zRotation: float): void;
    /** Attaches the car to object with offset and rotation
    *
    * https://library.sannybuilder.com/#/sa?q=0939 */
    attachToObject(handle: ScriptObject, xOffset: float, yOffset: float, zOffset: float, xRotation: float, yRotation: float, zRotation: float): void;
    /** Deflates the car's tire
    *
    * https://library.sannybuilder.com/#/sa?q=04FE */
    burstTire(tireId: int): void;
    /** Sets whether the player can target this vehicle with a heatseeking rocket launcher
    *
    * https://library.sannybuilder.com/#/sa?q=08F2 */
    canBeTargetedByHsMissile(state: boolean): void;
    /** Sets the car's primary and secondary colors
    *
    * https://library.sannybuilder.com/#/sa?q=0229 */
    changeColor(primaryColor: int, secondaryColor: int): void;
    /** Changes vehicle control from playback to AI driven
    *
    * https://library.sannybuilder.com/#/sa?q=099B */
    changePlaybackToUseAi(): void;
    /** Clears the car's last damage entity
    *
    * https://library.sannybuilder.com/#/sa?q=054F */
    clearLastDamageEntity(): void;
    /** Clears the vehicle's last weapon damage (see 031E)
    *
    * https://library.sannybuilder.com/#/sa?q=0468 */
    clearLastWeaponDamage(): void;
    cleoSetEngineOn(state: boolean): void;
    /** Closes all car doors, hoods and boots
    *
    * https://library.sannybuilder.com/#/sa?q=0508 */
    closeAllDoors(): void;
    /** Sets the car's door angle and latch state
    *
    * https://library.sannybuilder.com/#/sa?q=095E */
    controlDoor(door: int, latch: int, angle: float): void;
    controlHydraulics(_p2: float, _p3: float, _p4: float, _p5: float): void;
    /** Sets the angle of a vehicle's extra
    *
    * https://library.sannybuilder.com/#/sa?q=08A4 */
    controlMovablePart(range: float): void;
    /** Damages a component on the vehicle
    *
    * https://library.sannybuilder.com/#/sa?q=073C */
    damageDoor(door: int): void;
    /** Damages a panel on the car
    *
    * https://library.sannybuilder.com/#/sa?q=0730 */
    damagePanel(panelId: int): void;
    /** Removes the vehicle from the game
    *
    * https://library.sannybuilder.com/#/sa?q=00A6 */
    delete(): void;
    detach(x: float, y: float, z: float, collisionDetection: boolean): void;
    /** Returns true if the car has hydraulics installed
    *
    * https://library.sannybuilder.com/#/sa?q=0803 */
    doesHaveHydraulics(): boolean;
    /** Returns true if the car has car stuck check enabled
    *
    * https://library.sannybuilder.com/#/sa?q=06FC */
    doesHaveStuckCarCheck(): boolean;
    /** Sets whether characters in combat will choose to use the vehicle as cover from gunfire
    *
    * https://library.sannybuilder.com/#/sa?q=0957 */
    doesProvideCover(state: boolean): void;
    /** Makes the vehicle explode
    *
    * https://library.sannybuilder.com/#/sa?q=020B */
    explode(): void;
    /** Makes the vehicle explode without affecting its surroundings
    *
    * https://library.sannybuilder.com/#/sa?q=070C */
    explodeInCutscene(): void;
    /** Causes the vehicle to explode, without damage to surrounding entities
    *
    * https://library.sannybuilder.com/#/sa?q=08CB */
    explodeInCutsceneShakeAndBits(shake: boolean, effect: boolean, sound: boolean): void;
    /** Restores the vehicle to full health and removes the damage
    *
    * https://library.sannybuilder.com/#/sa?q=0A30 */
    fix(): void;
    /** Repairs the car door
    *
    * https://library.sannybuilder.com/#/sa?q=068A */
    fixDoor(door: int): void;
    fixPanel(panelId: int): void;
    /** Repairs a car's tire
    *
    * https://library.sannybuilder.com/#/sa?q=0699 */
    fixTire(typeId: int): void;
    /** Sets an override for the car's lights
    *
    * https://library.sannybuilder.com/#/sa?q=067F */
    forceLights(lightMode: int): void;
    /** Locks the vehicle's position
    *
    * https://library.sannybuilder.com/#/sa?q=0519 */
    freezePosition(state: boolean): void;
    /** Makes the car maintain its position
    *
    * https://library.sannybuilder.com/#/sa?q=0574 */
    freezePositionAndDontLoadCollision(state: boolean): void;
    /** Returns a model id available for the vehicle's mod slot, or -1 otherwise
    *
    * https://library.sannybuilder.com/#/sa?q=06E5 */
    getAvailableMod(slotId: int): int;
    /** Returns a handle of the vehicle preventing this car from getting to its destination
    *
    * https://library.sannybuilder.com/#/sa?q=0987 */
    getBlockingCar(): Car;
    /** Returns the handle of a character sitting in the specified car seat
    *
    * https://library.sannybuilder.com/#/sa?q=0432 */
    getCharInPassengerSeat(seatIndex: int): Char;
    /** Returns the vehicle's class as defined in vehicles
    *
    * https://library.sannybuilder.com/#/sa?q=08EC */
    getClass(): int;
    /** Gets the car's primary and secondary colors
    *
    * https://library.sannybuilder.com/#/sa?q=03F3 */
    getColors(): {
        primaryColour: int;
        secondaryColour: int;
    };
    /** Returns the vehicle's coordinates
    *
    * https://library.sannybuilder.com/#/sa?q=00AA */
    getCoordinates(): {
        x: float;
        y: float;
        z: float;
    };
    /** Returns the current gear of the vehicle
    *
    * https://library.sannybuilder.com/#/sa?q=0AB8 */
    getCurrentGear(): int;
    /** Returns the model of the component installed on the specified slot of the vehicle, or -1 otherwise
    *
    * https://library.sannybuilder.com/#/sa?q=096D */
    getCurrentMod(slot: int): int;
    /** Gets the car's paintjob
    *
    * https://library.sannybuilder.com/#/sa?q=0988 */
    getCurrentPaintjob(): int;
    /** Gets the specified car doors angle, relative to the hinge
    *
    * https://library.sannybuilder.com/#/sa?q=095F */
    getDoorAngleRatio(door: int): float;
    /** Returns the door lock mode of the vehicle
    *
    * https://library.sannybuilder.com/#/sa?q=09B3 */
    getDoorLockStatus(): int;
    /** Returns the car's driver handle
    *
    * https://library.sannybuilder.com/#/sa?q=046C */
    getDriver(): Char;
    getExtraColors(): {
        colourId1: int;
        colourId2: int;
    };
    /** Returns the X coord of the vehicle's angle
    *
    * https://library.sannybuilder.com/#/sa?q=02F8 */
    getForwardX(): float;
    /** Returns the Y coord of the vehicle's angle
    *
    * https://library.sannybuilder.com/#/sa?q=02F9 */
    getForwardY(): float;
    /** Returns the vehicle's heading (z-angle)
    *
    * https://library.sannybuilder.com/#/sa?q=0174 */
    getHeading(): float;
    /** Returns the vehicle's health
    *
    * https://library.sannybuilder.com/#/sa?q=0227 */
    getHealth(): int;
    /** Returns the vehicle's mass
    *
    * https://library.sannybuilder.com/#/sa?q=06A3 */
    getMass(mass: float): void;
    /** Returns the maximum number of passengers that could sit in the car
    *
    * https://library.sannybuilder.com/#/sa?q=01EA */
    getMaximumNumberOfPassengers(): int;
    /** Returns the car's model id
    *
    * https://library.sannybuilder.com/#/sa?q=0441 */
    getModel(): int;
    /** Returns the value of the specified car model
    *
    * https://library.sannybuilder.com/#/sa?q=09E1 */
    getModelValue(): int;
    /** Sets the angle of a vehicle's extra
    *
    * https://library.sannybuilder.com/#/sa?q=098D */
    getMovingComponentOffset(): float;
    /** Gets the number of possible paintjobs that can be applied to the car
    *
    * https://library.sannybuilder.com/#/sa?q=06EC */
    getNumAvailablePaintjobs(): int;
    getNumColors(): int;
    /** Gets the total number of gears of the vehicle and stores it to the variable
    *
    * https://library.sannybuilder.com/#/sa?q=0AB7 */
    getNumberOfGears(): int;
    /** Returns the number of passengers sitting in the car
    *
    * https://library.sannybuilder.com/#/sa?q=01E9 */
    getNumberOfPassengers(): int;
    /** Returns the coordinates of an offset of the vehicle's position, depending on the vehicle's rotation
    *
    * https://library.sannybuilder.com/#/sa?q=0407 */
    getOffsetInWorldCoords(xOffset: float, yOffset: float, zOffset: float): {
        x: float;
        y: float;
        z: float;
    };
    /** Returns the X Angle of the vehicle
    *
    * https://library.sannybuilder.com/#/sa?q=077D */
    getPitch(): float;
    /** Gets the quaternion values of the car
    *
    * https://library.sannybuilder.com/#/sa?q=07C5 */
    getQuaternion(): {
        x: float;
        y: float;
        z: float;
        w: float;
    };
    /** Returns the Y Angle of the vehicle
    *
    * https://library.sannybuilder.com/#/sa?q=06BE */
    getRoll(): float;
    /** Gets the car's speed
    *
    * https://library.sannybuilder.com/#/sa?q=02E3 */
    getSpeed(): float;
    getSpeedVector(x: float, y: boolean, z: boolean): void;
    /** Gets the car's vertical angle
    *
    * https://library.sannybuilder.com/#/sa?q=083F */
    getUprightValue(): float;
    /** Makes the car have one nitro
    *
    * https://library.sannybuilder.com/#/sa?q=09E9 */
    giveNonPlayerNitro(): void;
    /** Sets the car's paintjob
    *
    * https://library.sannybuilder.com/#/sa?q=06ED */
    givePaintjob(paintjobId: int): void;
    /** Makes the AI drive to the specified location by any means
    *
    * https://library.sannybuilder.com/#/sa?q=00A7 */
    gotoCoordinates(x: float, y: float, z: float): void;
    /** Makes the AI drive to the specified location obeying the traffic rules
    *
    * https://library.sannybuilder.com/#/sa?q=02C2 */
    gotoCoordinatesAccurate(x: float, y: float, z: float): void;
    /** Makes the AI drive to the destination as fast as possible, trying to overtake other vehicles
    *
    * https://library.sannybuilder.com/#/sa?q=0704 */
    gotoCoordinatesRacing(x: float, y: float, z: float): void;
    /** Returns true if the vehicle has been damaged by another specified vehicle
    *
    * https://library.sannybuilder.com/#/sa?q=051D */
    hasBeenDamagedByCar(other: Car): boolean;
    /** Returns true if the car has been damaged by the specified actor
    *
    * https://library.sannybuilder.com/#/sa?q=051C */
    hasBeenDamagedByChar(handle: Char): boolean;
    /** Returns true if the vehicle has been hit by the specified weapon
    *
    * https://library.sannybuilder.com/#/sa?q=031E */
    hasBeenDamagedByWeapon(weaponType: int): boolean;
    /** Returns true if the vehicle was resprayed in the last frame
    *
    * https://library.sannybuilder.com/#/sa?q=0A15 */
    hasBeenResprayed(): boolean;
    /** Sets whether a ped driven vehicle's handling is affected by the 'perfect handling' cheat
    *
    * https://library.sannybuilder.com/#/sa?q=0A21 */
    improveByCheating(state: boolean): void;
    isAttached(): boolean;
    /** Returns true if the specified vehicle has the 'is big' flag set in vehicles
    *
    * https://library.sannybuilder.com/#/sa?q=0969 */
    isBig(): boolean;
    /** Returns true if the specified vehicle part is visibly damaged
    *
    * https://library.sannybuilder.com/#/sa?q=09BB */
    isDoorDamaged(door: int): boolean;
    isDoorFullyOpen(door: int): boolean;
    isEmergencyServices(): boolean;
    isEngineOn(): boolean;
    /** Returns true if the car's health is over the specified value
    *
    * https://library.sannybuilder.com/#/sa?q=0185 */
    isHealthGreater(health: int): boolean;
    /** Returns true if the vehicle is in the air
    *
    * https://library.sannybuilder.com/#/sa?q=01F3 */
    isInAirProper(): boolean;
    /** Returns true if the vehicle is located within the specified 2D area
    *
    * https://library.sannybuilder.com/#/sa?q=00B0 */
    isInArea2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, drawSphere: boolean): boolean;
    /** Returns true if the vehicle is located within the specified 3D area
    *
    * https://library.sannybuilder.com/#/sa?q=00B1 */
    isInArea3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, drawSphere: boolean): boolean;
    /** Returns true if the vehicle is submerged in water
    *
    * https://library.sannybuilder.com/#/sa?q=02BF */
    isInWater(): boolean;
    /** Returns true if the vehicle is a low rider
    *
    * https://library.sannybuilder.com/#/sa?q=096E */
    isLowRider(): boolean;
    /** Returns true if the vehicle has the specified model
    *
    * https://library.sannybuilder.com/#/sa?q=0137 */
    isModel(modelId: int): boolean;
    /** Returns true if all the vehicle's wheels are touching the ground
    *
    * https://library.sannybuilder.com/#/sa?q=09D0 */
    isOnAllWheels(): boolean;
    /** Returns true if the car is burning
    *
    * https://library.sannybuilder.com/#/sa?q=0495 */
    isOnFire(): boolean;
    /** Returns true if the car is visible
    *
    * https://library.sannybuilder.com/#/sa?q=02CA */
    isOnScreen(): boolean;
    /** Returns true if the specified car seat is empty
    *
    * https://library.sannybuilder.com/#/sa?q=0431 */
    isPassengerSeatFree(seatIndex: int): boolean;
    /** Returns true if the car is assigned to a path
    *
    * https://library.sannybuilder.com/#/sa?q=060E */
    isPlaybackGoingOn(): boolean;
    isSirenOn(): boolean;
    /** Returns true if the vehicle is not moving
    *
    * https://library.sannybuilder.com/#/sa?q=01C1 */
    isStopped(): boolean;
    isStoppedInArea2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, drawSphere: boolean): boolean;
    isStoppedInArea3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, drawSphere: boolean): boolean;
    /** Returns true if the vehicle is a street racer
    *
    * https://library.sannybuilder.com/#/sa?q=096F */
    isStreetRacer(): boolean;
    /** Returns true if the car has been upside down for more than 2 seconds (requires 0190)
    *
    * https://library.sannybuilder.com/#/sa?q=018F */
    isStuckOnRoof(): boolean;
    /** Returns true if the car's tire is deflated
    *
    * https://library.sannybuilder.com/#/sa?q=0496 */
    isTireBurst(tireId: int): boolean;
    /** Returns true if the car is touching the other car
    *
    * https://library.sannybuilder.com/#/sa?q=09CB */
    isTouchingCar(handle: Car): boolean;
    /** Returns true if the vehicle is in contact with the object
    *
    * https://library.sannybuilder.com/#/sa?q=0897 */
    isTouchingObject(handle: ScriptObject): boolean;
    /** Returns true if the vehicle is in the normal position (upright)
    *
    * https://library.sannybuilder.com/#/sa?q=020D */
    isUpright(): boolean;
    /** Returns true if the car is upside down
    *
    * https://library.sannybuilder.com/#/sa?q=01F4 */
    isUpsidedown(): boolean;
    /** Returns true if any of the car components is visibly damaged or lost
    *
    * https://library.sannybuilder.com/#/sa?q=03C9 */
    isVisiblyDamaged(): boolean;
    isWaitingForWorldCollision(): boolean;
    locate2D(x: float, y: float, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    locate3D(x: float, y: float, z: float, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    locateStopped2D(x: float, y: float, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the car is stopped in the radius of the specified point
    *
    * https://library.sannybuilder.com/#/sa?q=01B0 */
    locateStopped3D(x: float, y: float, z: float, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Sets the locked status of the car's doors
    *
    * https://library.sannybuilder.com/#/sa?q=020A */
    lockDoors(lockStatus: int): void;
    /** Marks the car as being part of a convoy, which seems to follow a path set by 0994
    *
    * https://library.sannybuilder.com/#/sa?q=04BD */
    markAsConvoyCar(state: boolean): void;
    /** Allows the vehicle to be deleted by the game if necessary, and also removes it from the mission cleanup list, if applicable
    *
    * https://library.sannybuilder.com/#/sa?q=01C3 */
    markAsNoLongerNeeded(): void;
    /** Opens the specified car door
    *
    * https://library.sannybuilder.com/#/sa?q=0657 */
    openDoor(door: int): void;
    /** Sets the angle of a car door
    *
    * https://library.sannybuilder.com/#/sa?q=08A6 */
    openDoorABit(door: int, value: float): void;
    /** Freezes the car on its path
    *
    * https://library.sannybuilder.com/#/sa?q=05ED */
    pausePlaybackRecorded(): void;
    /** Opens the car's trunk and keeps it open
    *
    * https://library.sannybuilder.com/#/sa?q=04E1 */
    popBoot(): void;
    /** Removes the specified car door component from the car
    *
    * https://library.sannybuilder.com/#/sa?q=0689 */
    popDoor(door: int, visibility: boolean): void;
    popPanel(panelId: int, visibility: boolean): void;
    /** Makes a passenger in the vehicle speak from an ambient speech ID, if one exists for the character
    *
    * https://library.sannybuilder.com/#/sa?q=09AB */
    randomPassengerSay(speechId: int): void;
    /** Removes the vehicle's mod with the specified model
    *
    * https://library.sannybuilder.com/#/sa?q=06E8 */
    removeMod(modelId: int): void;
    /** Deactivates upside-down car check (0190) for the car
    *
    * https://library.sannybuilder.com/#/sa?q=0191 */
    removeUpsidedownCheck(): void;
    /** This resets all the hydraulics on the car, making it "sit"
    *
    * https://library.sannybuilder.com/#/sa?q=09FE */
    resetHydraulics(): void;
    /** Sets the vehicle to use its secondary guns
    *
    * https://library.sannybuilder.com/#/sa?q=0841 */
    selectWeapons(_p2: int): void;
    /** Sets the air resistance for the vehicle
    *
    * https://library.sannybuilder.com/#/sa?q=088B */
    setAirResistanceMultiplier(multiplier: float): void;
    setAlwaysCreateSkids(state: boolean): void;
    setAreaVisible(interiorId: int): void;
    /** Sets the script as the owner of the vehicle and adds it to the mission cleanup list
    *
    * https://library.sannybuilder.com/#/sa?q=0763 */
    setAsMissionCar(): void;
    /** Sets whether the vehicle will avoid paths between levels (0426)
    *
    * https://library.sannybuilder.com/#/sa?q=0428 */
    setAvoidLevelTransitions(state: boolean): void;
    /** Sets whether the car receives damage
    *
    * https://library.sannybuilder.com/#/sa?q=03F5 */
    setCanBeDamaged(state: boolean): void;
    /** Sets whether the vehicle can be targeted
    *
    * https://library.sannybuilder.com/#/sa?q=084E */
    setCanBeTargeted(state: boolean): void;
    /** Sets whether the vehicle can be visibly damaged
    *
    * https://library.sannybuilder.com/#/sa?q=0852 */
    setCanBeVisiblyDamaged(state: boolean): void;
    /** Sets whether the car's tires can be deflated
    *
    * https://library.sannybuilder.com/#/sa?q=053F */
    setCanBurstTires(state: boolean): void;
    /** Sets whether the vehicle will drive the wrong way on roads
    *
    * https://library.sannybuilder.com/#/sa?q=073B */
    setCanGoAgainstTraffic(state: boolean): void;
    /** Enables or disables the ability to Pay'n'Spray the car
    *
    * https://library.sannybuilder.com/#/sa?q=0294 */
    setCanRespray(state: boolean): void;
    setCollision(state: boolean): void;
    /** Puts the vehicle at the specified location
    *
    * https://library.sannybuilder.com/#/sa?q=00AB */
    setCoordinates(x: float, y: float, z: float): void;
    /** Sets the vehicle coordinates without applying offsets to account for the height of the vehicle
    *
    * https://library.sannybuilder.com/#/sa?q=088C */
    setCoordinatesNoOffset(x: float, y: float, z: float): void;
    /** Sets the vehicle's max speed
    *
    * https://library.sannybuilder.com/#/sa?q=00AD */
    setCruiseSpeed(maxSpeed: float): void;
    /** Sets the dirt level of the car
    *
    * https://library.sannybuilder.com/#/sa?q=0878 */
    setDirtLevel(level: float): void;
    /** Sets the behavior of the vehicle's AI driver
    *
    * https://library.sannybuilder.com/#/sa?q=00AE */
    setDrivingStyle(drivingStyle: int): void;
    /** Sets whether the car's engine is broken
    *
    * https://library.sannybuilder.com/#/sa?q=081D */
    setEngineBroken(state: boolean): void;
    /** Sets whether the vehicle's engine is turned on or off
    *
    * https://library.sannybuilder.com/#/sa?q=0918 */
    setEngineOn(state: boolean): void;
    /** Makes the vehicle stay in front of the other, keeping parallel
    *
    * https://library.sannybuilder.com/#/sa?q=05F4 */
    setEscortCarFront(handle: Car): void;
    /** Makes the vehicle stay on the other vehicle's left side, keeping parallel
    *
    * https://library.sannybuilder.com/#/sa?q=05F1 */
    setEscortCarLeft(handle: Car): void;
    /** Makes the vehicle stay behind the other car, keeping parallel
    *
    * https://library.sannybuilder.com/#/sa?q=05F3 */
    setEscortCarRear(handle: Car): void;
    /** Makes the vehicle stay by the right side of the other vehicle, keeping parallel
    *
    * https://library.sannybuilder.com/#/sa?q=05F2 */
    setEscortCarRight(handle: Car): void;
    setExtraColors(colourId1: int, colourId2: int): void;
    setFollowCar(handle: Car, radius: float): void;
    /** Sets the speed of the car
    *
    * https://library.sannybuilder.com/#/sa?q=04BA */
    setForwardSpeed(forwardSpeed: float): void;
    /** Sets whether the player can receive items from this vehicle, such as shotgun ammo from a police car and cash from a taxi
    *
    * https://library.sannybuilder.com/#/sa?q=08F3 */
    setFreebies(state: boolean): void;
    /** Sets the vehicle's heading (z-angle)
    *
    * https://library.sannybuilder.com/#/sa?q=0175 */
    setHeading(heading: float): void;
    /** Sets the vehicle's health
    *
    * https://library.sannybuilder.com/#/sa?q=0224 */
    setHealth(health: int): void;
    /** Sets whether the car is heavy
    *
    * https://library.sannybuilder.com/#/sa?q=01EC */
    setHeavy(state: boolean): void;
    /** Enables hydraulic suspension on the car
    *
    * https://library.sannybuilder.com/#/sa?q=07FF */
    setHydraulics(state: boolean): void;
    /** Sets the car's mission to idle (MISSION_NONE), stopping any driving activity
    *
    * https://library.sannybuilder.com/#/sa?q=00A9 */
    setIdle(): void;
    setIsConsideredByPlayer(state: boolean): void;
    /** Sets whether the vehicle's lights are on
    *
    * https://library.sannybuilder.com/#/sa?q=0919 */
    setLightsOn(state: boolean): void;
    setLoadCollisionFlag(state: boolean): void;
    /** Sets the mission of the vehicle's AI driver
    *
    * https://library.sannybuilder.com/#/sa?q=00AF */
    setMission(carMission: int): void;
    /** Makes a vehicle immune to everything except the player
    *
    * https://library.sannybuilder.com/#/sa?q=02AA */
    setOnlyDamagedByPlayer(state: boolean): void;
    /** Sets whether the car can be blown up by shooting at the petrol tank
    *
    * https://library.sannybuilder.com/#/sa?q=09C4 */
    setPetrolTankWeakpoint(state: boolean): void;
    /** Sets the playback speed of the car playing a car recording
    *
    * https://library.sannybuilder.com/#/sa?q=06FD */
    setPlaybackSpeed(speed: float): void;
    /** Sets the vehicle's immunities
    *
    * https://library.sannybuilder.com/#/sa?q=02AC */
    setProofs(bulletProof: boolean, fireProof: boolean, explosionProof: boolean, collisionProof: boolean, meleeProof: boolean): void;
    /** Sets the rotation of a vehicle using quaternion values
    *
    * https://library.sannybuilder.com/#/sa?q=07C6 */
    setQuaternion(x: float, y: float, z: float, w: float): void;
    /** Sets the car on a specific route
    *
    * https://library.sannybuilder.com/#/sa?q=048B */
    setRandomRouteSeed(routeSeed: int): void;
    /** Sets the Y Angle of the vehicle to the specified value
    *
    * https://library.sannybuilder.com/#/sa?q=0731 */
    setRoll(yAngle: float): void;
    setRotationVelocity(x: float, y: float, z: float): void;
    /** Sets the car's status
    *
    * https://library.sannybuilder.com/#/sa?q=03A2 */
    setStatus(status: int): void;
    setStayInFastLane(state: boolean): void;
    setStayInSlowLane(state: boolean): void;
    /** Sets the minimum distance for the AI driver to start ignoring car paths and go straight to the target
    *
    * https://library.sannybuilder.com/#/sa?q=04E0 */
    setStraightLineDistance(distance: int): void;
    /** Makes the car more resistant to collisions
    *
    * https://library.sannybuilder.com/#/sa?q=03AB */
    setStrong(state: boolean): void;
    /** Sets whether the taxi's roof light is on
    *
    * https://library.sannybuilder.com/#/sa?q=0216 */
    setTaxiLights(state: boolean): void;
    /** Makes the AI driver perform the action in the vehicle for the specified period of time
    *
    * https://library.sannybuilder.com/#/sa?q=0477 */
    setTempAction(actionId: int, timeInMs: int): void;
    /** Sets the alpha transparency of a distant vehicle
    *
    * https://library.sannybuilder.com/#/sa?q=0594 */
    setToFadeIn(alpha: int): void;
    /** Overrides the default vehicle traction value of 1.0
    *
    * https://library.sannybuilder.com/#/sa?q=0423 */
    setTraction(traction: float): void;
    /** Disables the car from exploding when it is upside down, as long as the player is not in the vehicle
    *
    * https://library.sannybuilder.com/#/sa?q=03ED */
    setUpsidedownNotDamaged(state: boolean): void;
    /** Sets whether the vehicle is visible or not
    *
    * https://library.sannybuilder.com/#/sa?q=0338 */
    setVisible(state: boolean): void;
    /** Makes the vehicle watertight, meaning characters inside will not be harmed if the vehicle is submerged in water
    *
    * https://library.sannybuilder.com/#/sa?q=039C */
    setWatertight(state: boolean): void;
    /** Advances the recorded car playback by the specified amount
    *
    * https://library.sannybuilder.com/#/sa?q=0706 */
    skipInPlaybackRecorded(amount: float): void;
    skipToEndAndStopPlaybackRecorded(): void;
    /** Assigns a car to a path
    *
    * https://library.sannybuilder.com/#/sa?q=05EB */
    startPlaybackRecorded(path: int): void;
    /** Starts looped playback of a recorded car path
    *
    * https://library.sannybuilder.com/#/sa?q=085E */
    startPlaybackRecordedLooped(pathId: int): void;
    /** Starts the playback of a recorded car with driver AI enabled
    *
    * https://library.sannybuilder.com/#/sa?q=0705 */
    startPlaybackRecordedUsingAi(pathId: int): void;
    /** Stops car from following path
    *
    * https://library.sannybuilder.com/#/sa?q=05EC */
    stopPlaybackRecorded(): void;
    /** Sets whether the car's alarm can be activated
    *
    * https://library.sannybuilder.com/#/sa?q=0397 */
    switchSiren(state: boolean): void;
    /** Makes all passengers of the car leave it
    *
    * https://library.sannybuilder.com/#/sa?q=068B */
    taskEveryoneLeave(): void;
    /** Sets the car's heading so that it is facing the 2D coordinate
    *
    * https://library.sannybuilder.com/#/sa?q=039F */
    turnToFaceCoord(x: float, y: float): void;
    /** Unfreezes the vehicle on its path
    *
    * https://library.sannybuilder.com/#/sa?q=05EE */
    unpausePlaybackRecorded(): void;
    /** Clears any current tasks the vehicle has and makes it drive around aimlessly
    *
    * https://library.sannybuilder.com/#/sa?q=00A8 */
    wanderRandomly(): void;
    /** Sets whether the vehicle can be picked up using the magnocrane
    *
    * https://library.sannybuilder.com/#/sa?q=08A5 */
    winchCanPickUp(state: boolean): void;
}
/** 
 * 
 * https://library.sannybuilder.com/#/sa/classes/CarGenerator */
declare class CarGenerator {
    constructor(handle: number);
    /** Initializes a parked car generator
    *
    * https://library.sannybuilder.com/#/sa?q=014B */
    static Create(x: float, y: float, z: float, heading: float, modelId: int, primaryColor: int, secondaryColor: int, forceSpawn: boolean, alarmChance: int, doorLockChance: int, minDelay: int, maxDelay: int): CarGenerator;
    /** Creates a parked car generator with a number plate
    *
    * https://library.sannybuilder.com/#/sa?q=09E2 */
    static CreateWithPlate(x: float, y: float, z: float, heading: float, modelId: int, primaryColor: int, secondaryColor: int, forceSpawn: boolean, alarmChance: int, doorLockChance: int, minDelay: int, maxDelay: int, plateName: string): CarGenerator;
    /** Resets the disabled car model list for car generators
    *
    * https://library.sannybuilder.com/#/sa?q=0734 */
    static DontSuppressAnyCarModels(): void;
    /** Allows the specified car model to spawn for car generators
    *
    * https://library.sannybuilder.com/#/sa?q=0733 */
    static DontSuppressCarModel(modelId: int): void;
    /** Prevents the specified car model from spawning for car generators
    *
    * https://library.sannybuilder.com/#/sa?q=0732 */
    static SuppressCarModel(model: int): void;
    /** Sets whether the player will not receive a wanted level when entering a vehicle from this generator when the police is around
    *
    * https://library.sannybuilder.com/#/sa?q=0A17 */
    setHasBeenOwned(state: boolean): void;
    /** Specifies the number of times the car generator spawns a car (101 - infinite)
    *
    * https://library.sannybuilder.com/#/sa?q=014C */
    switch(amount: int): void;
}
/** 
 * 
 * https://library.sannybuilder.com/#/sa/classes/CardDecks */
interface CardDecks {
    /** Returns a random number between 1 and 52, inclusive
    *
    * https://library.sannybuilder.com/#/sa?q=059E */
    FetchNextCard(): int;
    Shuffle(type: int): void;
}
declare var CardDecks: CardDecks
/** 
 * 
 * https://library.sannybuilder.com/#/sa/classes/Char */
declare class Char {
    constructor(handle: number);
    /** Creates a character at the specified location, with the specified model and pedtype
    *
    * https://library.sannybuilder.com/#/sa?q=009A */
    static Create(pedType: int, modelId: int, x: float, y: float, z: float): Char;
    /** Creates a character with the specified model in the passenger seat of the vehicle
    *
    * https://library.sannybuilder.com/#/sa?q=01C8 */
    static CreateAsPassenger(vehicle: Car, pedType: int, modelId: int, seatId: int): Char;
    static CreateAtAttractor(pedType: int, modelId: int, taskId: int, attractor: Attractor): Char;
    /** Creates a character in the driver's seat of the vehicle
    *
    * https://library.sannybuilder.com/#/sa?q=0129 */
    static CreateInsideCar(vehicle: Car, pedType: int, modelId: int): Char;
    /** Creates a character with a randomised model and pedtype at the specified coordinates
    *
    * https://library.sannybuilder.com/#/sa?q=0376 */
    static CreateRandom(x: float, y: float, z: float): Char;
    /** Creates a driver in the vehicle
    *
    * https://library.sannybuilder.com/#/sa?q=0560 */
    static CreateRandomAsDriver(vehicle: Car): Char;
    /** Creates a random character in the passenger seat of the vehicle
    *
    * https://library.sannybuilder.com/#/sa?q=0561 */
    static CreateRandomAsPassenger(vehicle: Car, seatId: int): Char;
    /** Creates a character descending from a rope
    *
    * https://library.sannybuilder.com/#/sa?q=0503 */
    static CreateSwatRope(pedType: int, modelId: int, x: float, y: float, z: float): Char;
    /** Returns true if the handle is a valid character handle
    *
    * https://library.sannybuilder.com/#/sa?q=056D */
    static DoesExist(handle: int): boolean;
    /** Returns true if the handle is an invalid character handle or the character is dead (wasted)
    *
    * https://library.sannybuilder.com/#/sa?q=0118 */
    static IsDead(handle: int): boolean;
    /** Sets how the character chooses to go to their destination in the next task without a parameter specifying this
    *
    * https://library.sannybuilder.com/#/sa?q=07A1 */
    static SetNextDesiredMoveState(moveState: int): void;
    /** Adds the specified amount of ammo to the character's weapon, if the character has the weapon
    *
    * https://library.sannybuilder.com/#/sa?q=0114 */
    addAmmo(weaponType: int, ammo: int): void;
    /** Increases the character's armor by the specified value to the maximum of 100.0
    *
    * https://library.sannybuilder.com/#/sa?q=035F */
    addArmor(amount: int): void;
    attachToBike(vehicle: Car, xOffset: float, yOffset: float, zOffset: float, position: int, _p7: float, _p8: float, weaponType: int): void;
    /** Puts character into a turret on the vehicle, allowing them to shoot
    *
    * https://library.sannybuilder.com/#/sa?q=0464 */
    attachToCar(vehicle: Car, xOffset: float, yOffset: float, zOffset: float, position: int, angleLimit: float, weaponType: int): void;
    /** Attaches the character to the specified object, in turret mode
    *
    * https://library.sannybuilder.com/#/sa?q=04F4 */
    attachToObject(handle: ScriptObject, xOffset: float, yOffset: float, zOffset: float, orientation: int, angleLimit: float, weaponType: int): void;
    /** Returns true if the character sees a dead body of the given type
    *
    * https://library.sannybuilder.com/#/sa?q=0480 */
    canSeeDeadChar(pedType: int): boolean;
    clearAllRelationships(relationshipType: int): void;
    clearLastDamageEntity(): void;
    /** Clears the character's last weapon damage (see 031D)
    *
    * https://library.sannybuilder.com/#/sa?q=0467 */
    clearLastWeaponDamage(): void;
    /** Clears the actor's look task, making them stop looking at whatever they were assigned to look at
    *
    * https://library.sannybuilder.com/#/sa?q=0647 */
    clearLookAt(): void;
    clearRelationship(relationshipType: int, toPedType: int): void;
    /** Clears the char's task, making them quit whatever they were doing
    *
    * https://library.sannybuilder.com/#/sa?q=0687 */
    clearTasks(): void;
    /** Clears all the characters tasks immediately, resetting the character to an idle state
    *
    * https://library.sannybuilder.com/#/sa?q=0792 */
    clearTasksImmediately(): void;
    /** Decreases the characters health
    *
    * https://library.sannybuilder.com/#/sa?q=0851 */
    damage(amount: int, damageArmour: boolean): void;
    /** Removes the character from the game and mission cleanup list, freeing game memory
    *
    * https://library.sannybuilder.com/#/sa?q=009B */
    delete(): void;
    /** Removes the character from turret mode (0464)
    *
    * https://library.sannybuilder.com/#/sa?q=0465 */
    detachFromCar(): void;
    /** Prevents any character speech from playing
    *
    * https://library.sannybuilder.com/#/sa?q=094E */
    disableSpeech(stopNow: boolean): void;
    /** Removes the character from the mission cleanup list, preventing it from being deleted when the mission ends
    *
    * https://library.sannybuilder.com/#/sa?q=01C5 */
    dontRemove(): void;
    dropObject(state: boolean): void;
    dropSecondObject(state: boolean): void;
    /** Enables pain audio if it was disabled using 094E
    *
    * https://library.sannybuilder.com/#/sa?q=094F */
    enableSpeech(): void;
    /** Dismembers the character
    *
    * https://library.sannybuilder.com/#/sa?q=0321 */
    explodeHead(): void;
    /** Sets whether the character's position remains unchanged
    *
    * https://library.sannybuilder.com/#/sa?q=04D7 */
    freezePosition(state: boolean): void;
    freezePositionAndDontLoadCollision(state: boolean): void;
    /** Gets the amount of ammo in the specified weapon of the character
    *
    * https://library.sannybuilder.com/#/sa?q=041A */
    getAmmoInWeapon(weaponType: int): int;
    /** Returns the progress of the animation on the actor, ranging from 0
    *
    * https://library.sannybuilder.com/#/sa?q=0613 */
    getAnimCurrentTime(animationName: string): int;
    /** Returns a float of the length of the animation in milliseconds
    *
    * https://library.sannybuilder.com/#/sa?q=061A */
    getAnimTotalTime(animationName: string): int;
    /** Returns the interior ID that the character is in
    *
    * https://library.sannybuilder.com/#/sa?q=09E8 */
    getAreaVisible(): int;
    /** Returns the character's armor amount
    *
    * https://library.sannybuilder.com/#/sa?q=04DD */
    getArmor(): int;
    /** Stores a handle for the vehicle the character is in or entering
    *
    * https://library.sannybuilder.com/#/sa?q=0811 */
    getCarIsUsing(): Car;
    /** Returns the character's coordinates
    *
    * https://library.sannybuilder.com/#/sa?q=00A0 */
    getCoordinates(): {
        x: float;
        y: float;
        z: float;
    };
    getCoordinatesOfDied(): {
        x: float;
        y: float;
        z: float;
    };
    /** Returns the type of weapon that the character is currently holding
    *
    * https://library.sannybuilder.com/#/sa?q=0470 */
    getCurrentWeapon(): int;
    /** Returns the character's heading (z-angle)
    *
    * https://library.sannybuilder.com/#/sa?q=0172 */
    getHeading(): float;
    /** Returns the character's health
    *
    * https://library.sannybuilder.com/#/sa?q=0226 */
    getHealth(): int;
    /** Returns the actor's distance from ground
    *
    * https://library.sannybuilder.com/#/sa?q=0819 */
    getHeightAboveGround(): float;
    /** Gets the characters active ped event
    *
    * https://library.sannybuilder.com/#/sa?q=080E */
    getHighestPriorityEvent(): int;
    /** Returns the characters model
    *
    * https://library.sannybuilder.com/#/sa?q=0665 */
    getModel(modelId: int): void;
    /** Gets the name of the characters interior
    *
    * https://library.sannybuilder.com/#/sa?q=094B */
    getNameOfEntryExitUsed(): string;
    /** Returns the number of members which are in a group of the character (01DE)
    *
    * https://library.sannybuilder.com/#/sa?q=046D */
    getNumberOfFollowers(): int;
    /** Returns the coordinates of the character, with an offset
    *
    * https://library.sannybuilder.com/#/sa?q=04C4 */
    getOffsetInWorldCoords(xOffset: float, yOffset: float, zOffset: float): {
        x: float;
        y: float;
        z: float;
    };
    /** Gets the ped type of the character
    *
    * https://library.sannybuilder.com/#/sa?q=089F */
    getPedType(): int;
    /** Returns the coordinates and heading of the entry (enex) marker the character used to get to the current interior
    *
    * https://library.sannybuilder.com/#/sa?q=094C */
    getPositionOfEntryExitCharUsed(): {
        x: float;
        y: float;
        z: float;
        heading: float;
    };
    /** Returns the status of the specified script task of the character
    *
    * https://library.sannybuilder.com/#/sa?q=062E */
    getScriptTaskStatus(taskId: int): int;
    /** Gets the characters task sequence progress, as started by 0618
    *
    * https://library.sannybuilder.com/#/sa?q=0646 */
    getSequenceProgress(): int;
    getSequenceProgressRecursive(): {
        _p2: int;
        _p3: int;
    };
    /** Returns the actor's movement speed
    *
    * https://library.sannybuilder.com/#/sa?q=06AC */
    getSpeed(speed: float): void;
    getSwimState(): int;
    /** Gets the characters velocity
    *
    * https://library.sannybuilder.com/#/sa?q=083D */
    getVelocity(x: float, y: float, z: float): void;
    /** Returns the weapon type, ammo and model from the specified slot
    *
    * https://library.sannybuilder.com/#/sa?q=04B8 */
    getWeaponInSlot(weaponSlotId: int): {
        weaponType: int;
        weaponAmmo: int;
        weaponModel: int;
    };
    /** Sets the specified characters fighting style and moves
    *
    * https://library.sannybuilder.com/#/sa?q=07FE */
    giveMeleeAttack(fightStyle: int, moveId: int): void;
    /** Gives the character the weapon with the specified amount of ammo
    *
    * https://library.sannybuilder.com/#/sa?q=01B2 */
    giveWeapon(weaponType: int, ammo: int): void;
    /** Returns true if the character has been arrested
    *
    * https://library.sannybuilder.com/#/sa?q=0741 */
    hasBeenArrested(): boolean;
    /** Returns true if the actor has been hurt by the specified vehicle
    *
    * https://library.sannybuilder.com/#/sa?q=051B */
    hasBeenDamagedByCar(handle: Car): boolean;
    /** Returns true if the character has been hurt by the other character
    *
    * https://library.sannybuilder.com/#/sa?q=051A */
    hasBeenDamagedByChar(handle: Char): boolean;
    /** Returns true if the character has been hit by the specified weapon
    *
    * https://library.sannybuilder.com/#/sa?q=031D */
    hasBeenDamagedByWeapon(weaponType: int): boolean;
    /** Returns true if the character has been photographed
    *
    * https://library.sannybuilder.com/#/sa?q=04C5 */
    hasBeenPhotographed(): boolean;
    /** Returns true if the character has the specified weapon
    *
    * https://library.sannybuilder.com/#/sa?q=0491 */
    hasGotWeapon(weaponType: int): boolean;
    /** Returns true if the character can see the target character
    *
    * https://library.sannybuilder.com/#/sa?q=0364 */
    hasSpottedChar(target: Char): boolean;
    /** Returns true if the character can see the other character in front of them
    *
    * https://library.sannybuilder.com/#/sa?q=09ED */
    hasSpottedCharInFront(handle: Char): boolean;
    /** Hides all of the specified actor's weapons
    *
    * https://library.sannybuilder.com/#/sa?q=06AB */
    hideWeaponForScriptedCutscene(state: boolean): void;
    ignoreHeightDifferenceFollowingNodes(state: boolean): void;
    isAtScriptedAttractor(handle: Attractor): boolean;
    /** Returns true if the actor is turreted on any vehicle
    *
    * https://library.sannybuilder.com/#/sa?q=0A32 */
    isAttachedToAnyCar(): boolean;
    /** Returns true if the character is holding the given type of weapon
    *
    * https://library.sannybuilder.com/#/sa?q=02D8 */
    isCurrentWeapon(weaponType: int): boolean;
    /** Returns true if the specified character is crouching
    *
    * https://library.sannybuilder.com/#/sa?q=0597 */
    isDucking(): boolean;
    /** Returns true if the character is entering a car, but is not in the car
    *
    * https://library.sannybuilder.com/#/sa?q=09DE */
    isGettingInToACar(): boolean;
    /** Returns true if the character is the leader of the specified group
    *
    * https://library.sannybuilder.com/#/sa?q=06EF */
    isGroupLeader(handle: Group): boolean;
    /** Returns true if the character is a member of the specified group
    *
    * https://library.sannybuilder.com/#/sa?q=06EE */
    isGroupMember(handle: Group): boolean;
    /** Returns true if the character has had its head shot off
    *
    * https://library.sannybuilder.com/#/sa?q=09A8 */
    isHeadMissing(): boolean;
    /** Returns true if the character's health is over the specified value
    *
    * https://library.sannybuilder.com/#/sa?q=0184 */
    isHealthGreater(health: int): boolean;
    /** Returns true if the actor is lifting the specified object
    *
    * https://library.sannybuilder.com/#/sa?q=0737 */
    isHoldingObject(handle: ScriptObject): boolean;
    /** Returns true if the character is in the air
    *
    * https://library.sannybuilder.com/#/sa?q=0818 */
    isInAir(): boolean;
    /** Checks if the character is within the angled 2D area
    *
    * https://library.sannybuilder.com/#/sa?q=05F6 */
    isInAngledArea2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, angle: float, drawSphere: boolean): boolean;
    /** Checks if the character is within the angled 3D area
    *
    * https://library.sannybuilder.com/#/sa?q=05FC */
    isInAngledArea3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, angle: float, drawSphere: boolean): boolean;
    /** Checks if the character is in a car which is within the angled 2D area
    *
    * https://library.sannybuilder.com/#/sa?q=05F8 */
    isInAngledAreaInCar2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, angle: float, drawSphere: boolean): boolean;
    isInAngledAreaInCar3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, angle: float, drawSphere: boolean): boolean;
    /** Checks if the character is within the angled 2D area
    *
    * https://library.sannybuilder.com/#/sa?q=05F7 */
    isInAngledAreaOnFoot2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, angle: float, drawSphere: boolean): boolean;
    /** Checks if the character is within the angled 3D area
    *
    * https://library.sannybuilder.com/#/sa?q=05FD */
    isInAngledAreaOnFoot3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, angle: float, drawSphere: boolean): boolean;
    /** Returns true if the character is driving a boat
    *
    * https://library.sannybuilder.com/#/sa?q=04A7 */
    isInAnyBoat(): boolean;
    /** Returns true if the character has a vehicle, even if they are not actually sat inside it (opening and closing the door)
    *
    * https://library.sannybuilder.com/#/sa?q=00DF */
    isInAnyCar(): boolean;
    /** Returns true if the character is flying a helicopter
    *
    * https://library.sannybuilder.com/#/sa?q=04A9 */
    isInAnyHeli(): boolean;
    /** Returns true if the character is in a plane
    *
    * https://library.sannybuilder.com/#/sa?q=04AB */
    isInAnyPlane(): boolean;
    /** Returns true if the character is driving a police vehicle
    *
    * https://library.sannybuilder.com/#/sa?q=056C */
    isInAnyPoliceVehicle(): boolean;
    /** Returns the handle for the searchlight that's targeting the character
    *
    * https://library.sannybuilder.com/#/sa?q=07A9 */
    isInAnySearchlight(): boolean;
    /** Returns true if the specified character is in a train
    *
    * https://library.sannybuilder.com/#/sa?q=09AE */
    isInAnyTrain(): boolean;
    /** Returns true if the character is within the specified 2D area
    *
    * https://library.sannybuilder.com/#/sa?q=00A3 */
    isInArea2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the specified 3D area
    *
    * https://library.sannybuilder.com/#/sa?q=00A4 */
    isInArea3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the specified 2D area in a vehicle
    *
    * https://library.sannybuilder.com/#/sa?q=01A2 */
    isInAreaInCar2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the specified 3D area in a vehicle
    *
    * https://library.sannybuilder.com/#/sa?q=01A7 */
    isInAreaInCar3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the specified 2D area on foot
    *
    * https://library.sannybuilder.com/#/sa?q=01A1 */
    isInAreaOnFoot2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the specified 3D area on foot
    *
    * https://library.sannybuilder.com/#/sa?q=01A6 */
    isInAreaOnFoot3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, drawSphere: boolean): boolean;
    /** Returns true if the character is in the specified vehicle
    *
    * https://library.sannybuilder.com/#/sa?q=00DB */
    isInCar(vehicle: Car): boolean;
    /** Returns true if the character is in a flying vehicle
    *
    * https://library.sannybuilder.com/#/sa?q=04C8 */
    isInFlyingVehicle(): boolean;
    /** Returns true if the character is driving a vehicle with the specified model
    *
    * https://library.sannybuilder.com/#/sa?q=00DD */
    isInModel(modelId: int): boolean;
    /** Returns true if the character is driving a taxi
    *
    * https://library.sannybuilder.com/#/sa?q=0602 */
    isInTaxi(): boolean;
    /** Returns true if the character is in water
    *
    * https://library.sannybuilder.com/#/sa?q=04AD */
    isInWater(): boolean;
    /** Returns true if the character is in the specified map zone
    *
    * https://library.sannybuilder.com/#/sa?q=0154 */
    isInZone(zone: string): boolean;
    /** Returns true if the character is male
    *
    * https://library.sannybuilder.com/#/sa?q=03A3 */
    isMale(): boolean;
    /** Returns true if the character's model ID is equivalent to the model ID passed
    *
    * https://library.sannybuilder.com/#/sa?q=02F2 */
    isModel(modelId: int): boolean;
    /** Returns true if any characters are within range of the character
    *
    * https://library.sannybuilder.com/#/sa?q=06FF */
    isNearAnyChars(radius: float): boolean;
    /** Returns true if the character is driving a bike
    *
    * https://library.sannybuilder.com/#/sa?q=047A */
    isOnAnyBike(): boolean;
    /** Returns true if the character is on foot, and not occupying a vehicle
    *
    * https://library.sannybuilder.com/#/sa?q=044B */
    isOnFoot(): boolean;
    /** Returns true if the character is visible
    *
    * https://library.sannybuilder.com/#/sa?q=02CB */
    isOnScreen(): boolean;
    /** Returns true if character is performing the specified animation
    *
    * https://library.sannybuilder.com/#/sa?q=0611 */
    isPlayingAnim(animationName: string): boolean;
    /** Returns true if the character is responding to the specified ped event
    *
    * https://library.sannybuilder.com/#/sa?q=074F */
    isRespondingToEvent(eventId: int): boolean;
    /** Returns true if the character is firing a weapon
    *
    * https://library.sannybuilder.com/#/sa?q=02E0 */
    isShooting(): boolean;
    /** Returns true if the character fired a weapon within the specified 2D area
    *
    * https://library.sannybuilder.com/#/sa?q=02D6 */
    isShootingInArea(leftBottomX: float, leftBottomY: float, topRightX: float, topRightY: float, drawSphere: boolean): boolean;
    /** Returns true if the character is sitting in any vehicle
    *
    * https://library.sannybuilder.com/#/sa?q=0449 */
    isSittingInAnyCar(): boolean;
    /** Returns true if the character is sitting in the specified vehicle
    *
    * https://library.sannybuilder.com/#/sa?q=0448 */
    isSittingInCar(vehicle: Car): boolean;
    /** Returns true if the character is not moving
    *
    * https://library.sannybuilder.com/#/sa?q=02A0 */
    isStopped(): boolean;
    /** Checks if the character is within the angled 2D area and is motionless
    *
    * https://library.sannybuilder.com/#/sa?q=05F9 */
    isStoppedInAngledArea2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, angle: float, drawSphere: boolean): boolean;
    isStoppedInAngledArea3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, angle: float, drawSphere: boolean): boolean;
    /** Checks if the character is in a motionless car within the angled 2D area
    *
    * https://library.sannybuilder.com/#/sa?q=05FB */
    isStoppedInAngledAreaInCar2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, angle: float, drawSphere: boolean): boolean;
    isStoppedInAngledAreaInCar3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, angle: float, drawSphere: boolean): boolean;
    /** Checks if the character is within the angled 2D area
    *
    * https://library.sannybuilder.com/#/sa?q=05FA */
    isStoppedInAngledAreaOnFoot2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, angle: float, drawSphere: boolean): boolean;
    isStoppedInAngledAreaOnFoot3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, angle: float, drawSphere: boolean): boolean;
    /** Returns true if the character stopped within the specified 2D area
    *
    * https://library.sannybuilder.com/#/sa?q=01A3 */
    isStoppedInArea2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, drawSphere: boolean): boolean;
    /** Returns true if the character stopped within the specified 3D area
    *
    * https://library.sannybuilder.com/#/sa?q=01A8 */
    isStoppedInArea3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, drawSphere: boolean): boolean;
    /** Returns true if the character stopped within the specified 2D area in a vehicle
    *
    * https://library.sannybuilder.com/#/sa?q=01A5 */
    isStoppedInAreaInCar2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, drawSphere: boolean): boolean;
    /** Returns true if the character stopped within the specified 3D area in a vehicle
    *
    * https://library.sannybuilder.com/#/sa?q=01AA */
    isStoppedInAreaInCar3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, drawSphere: boolean): boolean;
    /** Returns true if the character stopped within the specified 2D area on foot
    *
    * https://library.sannybuilder.com/#/sa?q=01A4 */
    isStoppedInAreaOnFoot2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, drawSphere: boolean): boolean;
    /** Returns true if the character stopped within the specified 3D area on foot
    *
    * https://library.sannybuilder.com/#/sa?q=01A9 */
    isStoppedInAreaOnFoot3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, drawSphere: boolean): boolean;
    /** Returns true if the actor is stuck under a car
    *
    * https://library.sannybuilder.com/#/sa?q=095D */
    isStuckUnderCar(): boolean;
    isSwimming(): boolean;
    /** Returns true if the character is playing any speech
    *
    * https://library.sannybuilder.com/#/sa?q=094D */
    isTalking(): boolean;
    /** Returns true if the character is touching the other character
    *
    * https://library.sannybuilder.com/#/sa?q=0A1B */
    isTouchingChar(handle: Char): boolean;
    /** Returns true if the character is colliding with the specified object
    *
    * https://library.sannybuilder.com/#/sa?q=0179 */
    isTouchingObject(object: ScriptObject): boolean;
    /** Returns true if the character is colliding with the specified object on foot
    *
    * https://library.sannybuilder.com/#/sa?q=023B */
    isTouchingObjectOnFoot(object: ScriptObject): boolean;
    /** Returns true if the character is colliding with a car
    *
    * https://library.sannybuilder.com/#/sa?q=0547 */
    isTouchingVehicle(handle: Car): boolean;
    /** Returns true if the character is using a map attractor
    *
    * https://library.sannybuilder.com/#/sa?q=09C5 */
    isUsingMapAttractor(): boolean;
    isWaitingForWorldCollision(): boolean;
    listenToPlayerGroupCommands(state: boolean): void;
    /** Returns true if the character is within the 2D radius of the coordinates point
    *
    * https://library.sannybuilder.com/#/sa?q=00EC */
    locateAnyMeans2D(x: float, y: float, xRadius: float, yRadius: float, drawSphere: Sphere): boolean;
    /** Returns true if the character is within the 3D radius of the coordinates point
    *
    * https://library.sannybuilder.com/#/sa?q=00FE */
    locateAnyMeans3D(x: float, y: float, z: float, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 2D radius of the vehicle
    *
    * https://library.sannybuilder.com/#/sa?q=0202 */
    locateAnyMeansCar2D(vehicle: Car, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 3D radius of the vehicle
    *
    * https://library.sannybuilder.com/#/sa?q=0205 */
    locateAnyMeansCar3D(vehicle: Car, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 2D radius of the other character
    *
    * https://library.sannybuilder.com/#/sa?q=00F2 */
    locateAnyMeansChar2D(target: Char, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 3D radius of the other character
    *
    * https://library.sannybuilder.com/#/sa?q=0104 */
    locateAnyMeansChar3D(target: Char, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 2D radius of the object
    *
    * https://library.sannybuilder.com/#/sa?q=0471 */
    locateAnyMeansObject2D(object: ScriptObject, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 3D radius of the object
    *
    * https://library.sannybuilder.com/#/sa?q=0474 */
    locateAnyMeansObject3D(object: ScriptObject, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 2D radius of the coordinates point in a vehicle
    *
    * https://library.sannybuilder.com/#/sa?q=00EE */
    locateInCar2D(x: float, y: float, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 3D radius of the coordinates point in a vehicle
    *
    * https://library.sannybuilder.com/#/sa?q=0100 */
    locateInCar3D(x: float, y: float, z: float, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 2D radius of the vehicle in a vehicle
    *
    * https://library.sannybuilder.com/#/sa?q=0204 */
    locateInCarCar2D(handle: Car, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 3D radius of the vehicle in a vehicle
    *
    * https://library.sannybuilder.com/#/sa?q=0207 */
    locateInCarCar3D(vehicle: Car, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 2D radius of the other character in a vehicle
    *
    * https://library.sannybuilder.com/#/sa?q=00F4 */
    locateInCarChar2D(otherChar: Char, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 3D radius of the other character in a vehicle
    *
    * https://library.sannybuilder.com/#/sa?q=0106 */
    locateInCarChar3D(target: Char, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 2D radius of the object in a vehicle
    *
    * https://library.sannybuilder.com/#/sa?q=0473 */
    locateInCarObject2D(object: ScriptObject, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 3D radius of the object in a vehicle
    *
    * https://library.sannybuilder.com/#/sa?q=0476 */
    locateInCarObject3D(object: ScriptObject, xRadius: float, yRadius: float, zRadius: float, drawSphere: int): boolean;
    /** Returns true if the character is within the 2D radius of the coordinates point on foot
    *
    * https://library.sannybuilder.com/#/sa?q=00ED */
    locateOnFoot2D(x: float, y: float, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 3D radius of the coordinates point on foot
    *
    * https://library.sannybuilder.com/#/sa?q=00FF */
    locateOnFoot3D(x: float, y: float, z: float, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 2D radius of the vehicle on foot
    *
    * https://library.sannybuilder.com/#/sa?q=0203 */
    locateOnFootCar2D(vehicle: Car, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 3D radius of the vehicle on foot
    *
    * https://library.sannybuilder.com/#/sa?q=0206 */
    locateOnFootCar3D(vehicle: Car, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 2D radius of the other character on foot
    *
    * https://library.sannybuilder.com/#/sa?q=00F3 */
    locateOnFootChar2D(target: Char, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 3D radius of the other character on foot
    *
    * https://library.sannybuilder.com/#/sa?q=0105 */
    locateOnFootChar3D(target: Char, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 2D radius of the object on foot
    *
    * https://library.sannybuilder.com/#/sa?q=0472 */
    locateOnFootObject2D(object: ScriptObject, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 3D radius of the object on foot
    *
    * https://library.sannybuilder.com/#/sa?q=0475 */
    locateOnFootObject3D(object: ScriptObject, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character stopped within the 2D radius of the coordinates point
    *
    * https://library.sannybuilder.com/#/sa?q=00EF */
    locateStoppedAnyMeans2D(x: float, y: float, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character stopped within the 3D radius of the coordinates point
    *
    * https://library.sannybuilder.com/#/sa?q=0101 */
    locateStoppedAnyMeans3D(x: float, y: float, z: float, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character stopped within the 2D radius of the coordinates point in a vehicle
    *
    * https://library.sannybuilder.com/#/sa?q=00F1 */
    locateStoppedInCar2D(x: float, y: float, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character stopped within the 3D radius of the coordinates point in a vehicle
    *
    * https://library.sannybuilder.com/#/sa?q=0103 */
    locateStoppedInCar3D(x: float, y: float, z: float, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character stopped within the 2D radius of the coordinates point on foot
    *
    * https://library.sannybuilder.com/#/sa?q=00F0 */
    locateStoppedOnFoot2D(x: float, y: float, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character stopped within the 3D radius of the coordinates point on foot
    *
    * https://library.sannybuilder.com/#/sa?q=0102 */
    locateStoppedOnFoot3D(x: float, y: float, z: float, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Allows the character to be deleted by the game if necessary, and also removes them from the mission cleanup list, if applicable
    *
    * https://library.sannybuilder.com/#/sa?q=01C2 */
    markAsNoLongerNeeded(): void;
    /** Assigns the character to the specified action sequence
    *
    * https://library.sannybuilder.com/#/sa?q=0618 */
    performSequence(sequence: Sequence): void;
    performSequenceFromProgress(sequence: Sequence, _p3: int, _p4: int): void;
    /** Removes the characters weapons
    *
    * https://library.sannybuilder.com/#/sa?q=048F */
    removeAllWeapons(): void;
    /** Removes the character with a fade, freeing game memory
    *
    * https://library.sannybuilder.com/#/sa?q=034F */
    removeElegantly(): void;
    /** Removes the character from the vehicle
    *
    * https://library.sannybuilder.com/#/sa?q=09C9 */
    removeFromCarMaintainPosition(handle: Car): void;
    /** Removes the character from their current group
    *
    * https://library.sannybuilder.com/#/sa?q=06C9 */
    removeFromGroup(): void;
    /** Removes the weapon from the character
    *
    * https://library.sannybuilder.com/#/sa?q=0555 */
    removeWeapon(weaponType: int): void;
    /** Affects how often the character will hit the target when attacking with a weapon
    *
    * https://library.sannybuilder.com/#/sa?q=02E2 */
    setAccuracy(accuracy: int): void;
    /** Sets whether the character can crouch
    *
    * https://library.sannybuilder.com/#/sa?q=0856 */
    setAllowedToDuck(state: boolean): void;
    /** Sets the amount of ammo the character has in the specified weapon
    *
    * https://library.sannybuilder.com/#/sa?q=017B */
    setAmmo(weaponType: int, ammo: int): void;
    /** Sets how far through the animation the character is, with 1
    *
    * https://library.sannybuilder.com/#/sa?q=0614 */
    setAnimCurrentTime(animationName: string, time: float): void;
    /** Sets the animation group for the character
    *
    * https://library.sannybuilder.com/#/sa?q=0245 */
    setAnimGroup(animGroup: int): void;
    /** Sets whether the animation is playing
    *
    * https://library.sannybuilder.com/#/sa?q=0612 */
    setAnimPlayingFlag(animationName: string, flag: boolean): void;
    /** Makes an actor perform an animation at the specified speed
    *
    * https://library.sannybuilder.com/#/sa?q=0393 */
    setAnimSpeed(animName: string, animSpeed: float): void;
    /** Sets the interior that the char is in
    *
    * https://library.sannybuilder.com/#/sa?q=0860 */
    setAreaVisible(interiorId: int): void;
    /** Makes a character bleed
    *
    * https://library.sannybuilder.com/#/sa?q=0332 */
    setBleeding(state: boolean): void;
    /** Specifies that the character should only use upper-body damage animations, meaning they can still run if shot in the legs etc
    *
    * https://library.sannybuilder.com/#/sa?q=093B */
    setBulletproofVest(state: boolean): void;
    /** Sets whether the character can fall off their bike in collisions
    *
    * https://library.sannybuilder.com/#/sa?q=08C6 */
    setCanBeKnockedOffBike(state: boolean): void;
    /** Makes the character immune to a damage while in a vehicle
    *
    * https://library.sannybuilder.com/#/sa?q=054A */
    setCanBeShotInVehicle(state: boolean): void;
    /** Locks the character while in a car
    *
    * https://library.sannybuilder.com/#/sa?q=039E */
    setCantBeDraggedOut(state: boolean): void;
    /** Sets whether collision detection is enabled for the character
    *
    * https://library.sannybuilder.com/#/sa?q=0619 */
    setCollision(state: boolean): void;
    /** Puts the character at the specified location
    *
    * https://library.sannybuilder.com/#/sa?q=00A1 */
    setCoordinates(x: float, y: float, z: float): void;
    /** Sets the character's coordinates without warping the rest of their group
    *
    * https://library.sannybuilder.com/#/sa?q=08C7 */
    setCoordinatesDontWarpGang(x: float, y: float, z: float): void;
    /** This command is a combination of 0972 and 08C7
    *
    * https://library.sannybuilder.com/#/sa?q=09BC */
    setCoordinatesDontWarpGangNoOffset(x: float, y: float, z: float): void;
    /** Puts the characters at the coordinates by the center of body instead of the feet
    *
    * https://library.sannybuilder.com/#/sa?q=0972 */
    setCoordinatesNoOffset(x: float, y: float, z: float): void;
    /** Sets the character's currently held weapon
    *
    * https://library.sannybuilder.com/#/sa?q=01B9 */
    setCurrentWeapon(weaponType: int): void;
    /** Prevents pickups, which are created when this character dies, from disappearing until picked up by the player
    *
    * https://library.sannybuilder.com/#/sa?q=0A27 */
    setDeathWeaponsPersist(state: boolean): void;
    /** Sets the decision maker for the character
    *
    * https://library.sannybuilder.com/#/sa?q=060B */
    setDecisionMaker(maskOrHandle: DecisionMakerChar): void;
    /** Sets whether the character will drop any of their weapons when they die
    *
    * https://library.sannybuilder.com/#/sa?q=087E */
    setDropsWeaponsWhenDead(state: boolean): void;
    /** Controls whether the character can drown in water
    *
    * https://library.sannybuilder.com/#/sa?q=04D8 */
    setDrownsInWater(state: boolean): void;
    setDruggedUp(state: boolean): void;
    /** Sets the range within which the char responds to events
    *
    * https://library.sannybuilder.com/#/sa?q=0648 */
    setFollowNodeThresholdDistance(range: float): void;
    /** Makes a character remain in the car upon death
    *
    * https://library.sannybuilder.com/#/sa?q=0982 */
    setForceDieInCar(state: boolean): void;
    /** Controls whether the character will try to exit an upside-down car until it is on fire
    *
    * https://library.sannybuilder.com/#/sa?q=09F6 */
    setGetOutUpsideDownCar(state: boolean): void;
    /** Locates the entry/exit marker in the specified radius of the specified coordinates and links it to the character, also setting the appropriate interior ID for the character and setting the appropriate sky color if the character is player-controlled
    *
    * https://library.sannybuilder.com/#/sa?q=08AD */
    setHasUsedEntryExit(x: float, y: float, radius: float): void;
    /** Sets the character's heading (z-angle)
    *
    * https://library.sannybuilder.com/#/sa?q=0173 */
    setHeading(heading: float): void;
    /** Sets the heading limit for a character attached to an object or vehicle
    *
    * https://library.sannybuilder.com/#/sa?q=0887 */
    setHeadingLimitForAttached(orientation: int, headingLimit: float): void;
    /** Sets the character's health
    *
    * https://library.sannybuilder.com/#/sa?q=0223 */
    setHealth(health: int): void;
    setInformRespectedFriends(radius: float, _p3: int): void;
    /** Sets whether the character is a psychotic killer or not
    *
    * https://library.sannybuilder.com/#/sa?q=0433 */
    setIsChrisCriminal(state: boolean): void;
    /** Causes the auto aim to be more likely to target the specified actor than actors without this flag
    *
    * https://library.sannybuilder.com/#/sa?q=0770 */
    setIsTargetPriority(state: boolean): void;
    /** Sets whether the character should keep their tasks after mission cleanup (basically cleanup will be skipped for this character)
    *
    * https://library.sannybuilder.com/#/sa?q=0961 */
    setKeepTask(state: boolean): void;
    /** Sets whether the character shouldn't chase their victim far (to attempt a melee attack or get in weapon range)
    *
    * https://library.sannybuilder.com/#/sa?q=0816 */
    setKindaStayInSamePlace(state: boolean): void;
    setLoadCollisionFlag(state: boolean): void;
    /** Sets the characters max health
    *
    * https://library.sannybuilder.com/#/sa?q=08AF */
    setMaxHealth(maxHealth: int): void;
    /** Sets the character's cash sum, setting how much cash they will drop when dead
    *
    * https://library.sannybuilder.com/#/sa?q=03FE */
    setMoney(amount: int): void;
    /** Prevents the character from leaving their group
    *
    * https://library.sannybuilder.com/#/sa?q=087F */
    setNeverLeavesGroup(state: boolean): void;
    /** Sets whether the character won't be targeted by the autoaim system
    *
    * https://library.sannybuilder.com/#/sa?q=0568 */
    setNeverTargeted(state: boolean): void;
    /** Makes a character immune to everything except the player
    *
    * https://library.sannybuilder.com/#/sa?q=02A9 */
    setOnlyDamagedByPlayer(state: boolean): void;
    /** Sets the character's immunities
    *
    * https://library.sannybuilder.com/#/sa?q=02AB */
    setProofs(bulletProof: boolean, fireProof: boolean, explosionProof: boolean, collisionProof: boolean, meleeProof: boolean): void;
    setRelationship(relationshipType: int, pedType: int): void;
    /** Sets the characters rotation
    *
    * https://library.sannybuilder.com/#/sa?q=083E */
    setRotation(x: float, y: float, z: float): void;
    /** Works similar to 05C1, but returns which phrase was spoken and is not run as a task
    *
    * https://library.sannybuilder.com/#/sa?q=0947 */
    setSayContext(speech: int): int;
    setSayContextImportant(_p2: int, _p3: boolean, _p4: boolean, _p5: boolean): int;
    setSayScript(_p2: int, _p3: boolean, _p4: boolean, _p5: boolean): void;
    /** Sets the characters melee accuracy
    *
    * https://library.sannybuilder.com/#/sa?q=060F */
    setSenseRange(meleeAccuracy: float): void;
    /** Sets the attack rate of the actor
    *
    * https://library.sannybuilder.com/#/sa?q=07DD */
    setShootRate(rate: int): void;
    /** Sets whether the character signals after killing
    *
    * https://library.sannybuilder.com/#/sa?q=09B5 */
    setSignalAfterKill(state: boolean): void;
    /** Makes the character stay in the vehicle when it is jacked (characters let themselves get "kidnapped")
    *
    * https://library.sannybuilder.com/#/sa?q=0526 */
    setStayInCarWhenJacked(state: boolean): void;
    /** Makes the character maintain their position when attacked
    *
    * https://library.sannybuilder.com/#/sa?q=0350 */
    setStayInSamePlace(state: boolean): void;
    /** Sets whether the specified character is immune to headshots
    *
    * https://library.sannybuilder.com/#/sa?q=0446 */
    setSuffersCriticalHits(state: boolean): void;
    /** Sets the speed that the character swims at, changing their swimming animation speed
    *
    * https://library.sannybuilder.com/#/sa?q=0A28 */
    setSwimSpeed(speed: float): void;
    setUsesUpperbodyDamageAnimsOnly(state: boolean): void;
    /** Sets the characters velocity
    *
    * https://library.sannybuilder.com/#/sa?q=083C */
    setVelocity(x: float, y: float, z: float): void;
    /** Sets whether the character is visible or not
    *
    * https://library.sannybuilder.com/#/sa?q=0337 */
    setVisible(state: boolean): void;
    /** Sets whether police should chase the character
    *
    * https://library.sannybuilder.com/#/sa?q=09B6 */
    setWantedByPolice(state: boolean): void;
    /** Sets the characters weapon accuracy
    *
    * https://library.sannybuilder.com/#/sa?q=081A */
    setWeaponSkill(skillId: int): void;
    /** Sets the character ability to talk
    *
    * https://library.sannybuilder.com/#/sa?q=0489 */
    shutUp(state: boolean): void;
    /** Works similar to 0489, but mutes more things, including ambient speeches (needs confirming)
    *
    * https://library.sannybuilder.com/#/sa?q=0A09 */
    shutUpForScriptedSpeech(state: boolean): void;
    /** Makes a character move their mouth as if they were talking
    *
    * https://library.sannybuilder.com/#/sa?q=0967 */
    startFacialTalk(duration: int): void;
    /** Stops the character moving their mouth as if they were talking
    *
    * https://library.sannybuilder.com/#/sa?q=0968 */
    stopFacialTalk(): void;
    /** Returns the vehicle the character is attached to
    *
    * https://library.sannybuilder.com/#/sa?q=0A33 */
    storeCarIsAttachedToNoSave(): Car;
    /** Returns the current vehicle of the character and adds it to the mission cleanup list
    *
    * https://library.sannybuilder.com/#/sa?q=00D9 */
    storeCarIsIn(): Car;
    /** Returns the character's vehicle handle without marking it as used by the script, therefore allowing it to be deleted by the game at any time
    *
    * https://library.sannybuilder.com/#/sa?q=03C0 */
    storeCarIsInNoSave(): Car;
    /** Stores the handles of a ped and vehicle being closest to the char or -1 otherwise
    *
    * https://library.sannybuilder.com/#/sa?q=0AB5 */
    storeClosestEntities(): {
        charHandle: Char;
        carHandle: Car;
    };
    /** Pulls the character out of their car and places at the location
    *
    * https://library.sannybuilder.com/#/sa?q=0362 */
    warpFromCarToCoord(x: float, y: float, z: float): void;
    /** Puts the character in the specified vehicle
    *
    * https://library.sannybuilder.com/#/sa?q=036A */
    warpIntoCar(vehicle: Car): void;
    /** Puts the character into a vehicle's passenger seat
    *
    * https://library.sannybuilder.com/#/sa?q=0430 */
    warpIntoCarAsPassenger(handle: Car, seatId: int): void;
}
/** 
 * 
 * https://library.sannybuilder.com/#/sa/classes/Checkpoint */
declare class Checkpoint {
    constructor(handle: number);
    static Create(type: int, x: float, y: float, z: float, pointX: float, pointY: float, pointZ: float, radius: float): Checkpoint;
    delete(): void;
    setCoords(x: float, y: float, z: float): void;
    setHeading(heading: float): void;
}
/** 
 * 
 * https://library.sannybuilder.com/#/sa/classes/Clipboard */
interface Clipboard {
    ReadData(memory: int, size: int): void;
    WriteData(memory: int, size: int): void;
}
declare var Clipboard: Clipboard
/** 
 * 
 * https://library.sannybuilder.com/#/sa/classes/Clock */
interface Clock {
    /** Returns the in-game day of the month and month of the year
    *
    * https://library.sannybuilder.com/#/sa?q=0835 */
    GetCurrentDate(): {
        day: int;
        month: int;
    };
    /** Returns an integer representation of the in-game day of the week
    *
    * https://library.sannybuilder.com/#/sa?q=07D0 */
    GetCurrentDayOfWeek(): int;
    /** Returns the time passed in milliseconds since the game started
    *
    * https://library.sannybuilder.com/#/sa?q=01BD */
    GetGameTimer(): int;
    /** Returns the number of minutes left until the clock matches the time specified
    *
    * https://library.sannybuilder.com/#/sa?q=00C1 */
    GetMinutesToTimeOfDay(hours: int, minutes: int): int;
    /** Returns the number of hours and minutes passed since midnight
    *
    * https://library.sannybuilder.com/#/sa?q=00BF */
    GetTimeOfDay(): {
        hours: int;
        minutes: int;
    };
    /** Restores the game time to the time when it was saved with 0253
    *
    * https://library.sannybuilder.com/#/sa?q=0254 */
    Restore(): void;
    /** Sets the current in-game time
    *
    * https://library.sannybuilder.com/#/sa?q=00C0 */
    SetTimeOfDay(hours: int, minutes: int): void;
    /** Progresses the game to the next day
    *
    * https://library.sannybuilder.com/#/sa?q=088E */
    SetTimeOneDayForward(): void;
    /** Sets the game to run at the specified speed
    *
    * https://library.sannybuilder.com/#/sa?q=015D */
    SetTimeScale(scale: float): void;
    /** Saves the current time in game
    *
    * https://library.sannybuilder.com/#/sa?q=0253 */
    Store(): void;
}
declare var Clock: Clock
/** 
 * 
 * https://library.sannybuilder.com/#/sa/classes/Conversation */
interface Conversation {
    ClearForChar(handle: Char): void;
    /** Pauses the scripted conversation assigned to the specified character
    *
    * https://library.sannybuilder.com/#/sa?q=089C */
    Enable(handle: Char, state: boolean): void;
    /** Begins a script-controlled conversation
    *
    * https://library.sannybuilder.com/#/sa?q=0719 */
    FinishSettingUp(): void;
    FinishSettingUpNoSubtitles(): void;
    /** Returns true if the conversation is at the specified node
    *
    * https://library.sannybuilder.com/#/sa?q=071A */
    IsAtNode(handle: Char, speech: string): boolean;
    /** Returns true if there is a conversation going on between the character and the player and both the character and the player are able to communicate with one another
    *
    * https://library.sannybuilder.com/#/sa?q=089B */
    IsPlayerInPosition(handle: Char): boolean;
    /** Sets the script audio ID (see 03CF) for the specified conversation response node
    *
    * https://library.sannybuilder.com/#/sa?q=0A3C */
    SetUpEndNodeWithScriptedSpeech(speech: string, speechSoundId: int): void;
    /** Sets the speech ID for the specified conversation response node
    *
    * https://library.sannybuilder.com/#/sa?q=09AA */
    SetUpEndNodeWithSpeech(speech: string, speechSoundId: int): void;
    /** Adds a new line to the scripted conversation
    *
    * https://library.sannybuilder.com/#/sa?q=0A18 */
    SetUpNodeWithScriptedSpeech(question: string, positiveAnswer: string, negativeAnswer: string, questionSoundId: int, positiveAnswerSoundId: int, negativeAnswerSoundId: int): void;
    /** Specifies the dialogue GXT's and audio ID's
    *
    * https://library.sannybuilder.com/#/sa?q=09A4 */
    SetUpNodeWithSpeech(question: string, positiveAnswer: string, negativeAnswer: string, questionSoundId: int, positiveAnswerSoundId: int, negativeAnswerSoundId: int): void;
    /** Starts a conversation between the character and the player and clears the conversation lines
    *
    * https://library.sannybuilder.com/#/sa?q=0717 */
    StartSettingUp(handle: Char): void;
}
declare var Conversation: Conversation
/** 
 * 
 * https://library.sannybuilder.com/#/sa/classes/Crane */
interface Crane {
    /** Enables/disables individual crane controls
    *
    * https://library.sannybuilder.com/#/sa?q=0898 */
    EnableControls(up: boolean, down: boolean, release: boolean): void;
    /** Puts the player in the San Fierro building site crane
    *
    * https://library.sannybuilder.com/#/sa?q=079E */
    PlayerEnteredBuildingsiteCrane(): void;
    /** Puts the player in the San Fierro dock crane
    *
    * https://library.sannybuilder.com/#/sa?q=079D */
    PlayerEnteredDockCrane(): void;
    /** Puts the player in the crane at the building site in Las Venturras
    *
    * https://library.sannybuilder.com/#/sa?q=07FA */
    PlayerEnteredLasVegasCrane(): void;
    /** Puts the player in the crane at the quarry near Las Venturras
    *
    * https://library.sannybuilder.com/#/sa?q=07F9 */
    PlayerEnteredQuarryCrane(): void;
    /** Removes the player from the current crane
    *
    * https://library.sannybuilder.com/#/sa?q=079F */
    PlayerLeftCrane(): void;
}
declare var Crane: Crane
/** 
 * 
 * https://library.sannybuilder.com/#/sa/classes/Credits */
interface Credits {
    /** Returns true if the credits have finished
    *
    * https://library.sannybuilder.com/#/sa?q=0436 */
    AreFinished(): boolean;
    /** Makes the credits scroll up the screen
    *
    * https://library.sannybuilder.com/#/sa?q=0434 */
    Start(): void;
    /** Stops the credits text from showing
    *
    * https://library.sannybuilder.com/#/sa?q=0435 */
    Stop(): void;
}
declare var Credits: Credits
/** 
 * 
 * https://library.sannybuilder.com/#/sa/classes/Cutscene */
interface Cutscene {
    AppendToNext(_p1: string, _p2: string): void;
    /** Ends the current cutscene, freeing game memory
    *
    * https://library.sannybuilder.com/#/sa?q=02EA */
    Clear(): void;
    /** Stores the offset of the currently loaded cutscene
    *
    * https://library.sannybuilder.com/#/sa?q=08D1 */
    GetOffset(): {
        xOffset: float;
        yOffset: float;
        zOffset: float;
    };
    /** Returns the time in milliseconds passed since the cutscene has started (02E7)
    *
    * https://library.sannybuilder.com/#/sa?q=02E8 */
    GetTime(): int;
    /** Returns true if the cutscene has finished
    *
    * https://library.sannybuilder.com/#/sa?q=02E9 */
    HasFinished(): boolean;
    /** Returns true if the cutscene has finished loading
    *
    * https://library.sannybuilder.com/#/sa?q=06B9 */
    HasLoaded(): boolean;
    /** Loads the data for the specified cutscene
    *
    * https://library.sannybuilder.com/#/sa?q=02E4 */
    Load(name: string): void;
    /** Sets the position for a cutscene
    *
    * https://library.sannybuilder.com/#/sa?q=0244 */
    SetOffset(x: float, y: float, z: float): void;
    /** Starts the loaded cutscene (02E4)
    *
    * https://library.sannybuilder.com/#/sa?q=02E7 */
    Start(): void;
    /** Returns true if the cutscene was skipped
    *
    * https://library.sannybuilder.com/#/sa?q=056A */
    WasSkipped(): boolean;
}
declare var Cutscene: Cutscene
/** 
 * 
 * https://library.sannybuilder.com/#/sa/classes/Debugger */
interface Debugger {
    /** Checks whether the task is skipped (debugging function, the game has a menu page for selecting a task, and you can choose to skip a task. The official version of the game is not enabled), if you skip the task, return to the page where the current task is located, and the ID of the current task. This command is always invalid in the mobile version of SA, returns false, and the returned 2 values are 0
    *
    * https://library.sannybuilder.com/#/sa?q=0A57 */
    DoMissionSkip(): boolean;
    DoStuff(): void;
    /** Returns the ID of the next task (0A57), otherwise -1
    *
    * https://library.sannybuilder.com/#/sa?q=0A58 */
    GetMissionNum(): boolean;
    /** Returns the page where the next task (0A57) is located, otherwise 0
    *
    * https://library.sannybuilder.com/#/sa?q=0A59 */
    GetMissionPage(): boolean;
    IsDebugCameraOn(): boolean;
    /** Makes the current script skip the next 128 bytes of the code
    *
    * https://library.sannybuilder.com/#/sa?q=05B6 */
    SaveStringToDebugFile(msg: int): void;
    WriteLog(_p1: int): void;
    WriteLogFloat(_p1: float, _p2: float, _p3: float, _p4: int): void;
    WriteLogInt(_p1: int, _p2: int, _p3: int, _p4: int): void;
}
declare var Debugger: Debugger
/** 
 * 
 * https://library.sannybuilder.com/#/sa/classes/DecisionMaker */
declare class DecisionMaker {
    constructor(handle: number);
    /** Returns true if the handle is a valid decision maker handle
    *
    * https://library.sannybuilder.com/#/sa?q=09F2 */
    static DoesExist(handle: int): boolean;
    /** Removes the decision maker
    *
    * https://library.sannybuilder.com/#/sa?q=065C */
    remove(): void;
}
/** 
 * 
 * https://library.sannybuilder.com/#/sa/classes/DynamicLibrary */
declare class DynamicLibrary {
    constructor(handle: number);
    static Load(libraryFileName: string): boolean;
    free(): void;
    getProcedure(self: DynamicLibrary): boolean;
}
/** 
 * 
 * https://library.sannybuilder.com/#/sa/classes/File */
declare class File {
    constructor(handle: number);
    static FindFirst(filePathName: string, fileName: string): boolean;
    /** Opens the file in the specified mode, sets the condition result to True if the open operation has been successful, or to False otherwise, and writes the file handle to the variable
    *
    * https://library.sannybuilder.com/#/sa?q=0A9A */
    static Open(filePathName: string, mode: int): boolean;
    /** Closes the file and frees the memory
    *
    * https://library.sannybuilder.com/#/sa?q=0A9B */
    close(): void;
    findClose(): void;
    findNext(): boolean;
    /** Gets the file size in bytes
    *
    * https://library.sannybuilder.com/#/sa?q=0A9C */
    getSize(): int;
    /** Returns true if the end of the specified file has been reached
    *
    * https://library.sannybuilder.com/#/sa?q=0AD6 */
    isEndReached(): boolean;
    /** Reads the specified number of bytes from the opened file and writes them to the memory region starting from the address of the destination variable
    *
    * https://library.sannybuilder.com/#/sa?q=0A9D */
    read(size: int): int;
    /** Reads data from the file into the buffer until either the end of buffer is reached, the newline character is read, or the end-of-file is reached, whichever comes first
    *
    * https://library.sannybuilder.com/#/sa?q=0AD7 */
    readString(buffer: string, size: int): boolean;
    scan(format: string, ...args: number[]): boolean;
    /** Sets the position of the file to the given offset from the origin
    *
    * https://library.sannybuilder.com/#/sa?q=0AD5 */
    seek(offset: int, origin: int): boolean;
    /** Copies the specified number of bytes of the memory region starting from the address of the source variable to the file
    *
    * https://library.sannybuilder.com/#/sa?q=0A9E */
    write(size: int, source: int): void;
    /** Writes a formatted string to the file
    *
    * https://library.sannybuilder.com/#/sa?q=0AD9 */
    writeFormattedString(format: string, ...args: number[]): void;
    /** Copies data from the source string to the file up to but not including the null character
    *
    * https://library.sannybuilder.com/#/sa?q=0AD8 */
    writeString(source: string): boolean;
}
/** 
 * 
 * https://library.sannybuilder.com/#/sa/classes/Fs */
interface Fs {
    /** Copies an existing directory to a new directory and returns true if the operation is successful
    *
    * https://library.sannybuilder.com/#/sa?q=0B05 */
    CopyDirectory(dirPath: string, newDirPath: string): boolean;
    /** Copies an existing file to a new file and returns true if the operation is successful
    *
    * https://library.sannybuilder.com/#/sa?q=0B04 */
    CopyFile(fileName: string, newFileName: string): boolean;
    /** Creates a directory at the given path
    *
    * https://library.sannybuilder.com/#/sa?q=0AE5 */
    CreateDirectory(dirName: string): boolean;
    /** Deletes a directory at the given path and returns true if the operation is successful
    *
    * https://library.sannybuilder.com/#/sa?q=0B01 */
    DeleteDirectory(dirPath: string, recursive: boolean): boolean;
    /** Deletes a file at the given path and returns true if the operation is successful
    *
    * https://library.sannybuilder.com/#/sa?q=0B00 */
    DeleteFile(fileName: string): boolean;
    /** Returns true if a directory at the given path exists
    *
    * https://library.sannybuilder.com/#/sa?q=0AE4 */
    DoesDirectoryExist(dirPath: string): boolean;
    /** Returns true if a file at the given path exists
    *
    * https://library.sannybuilder.com/#/sa?q=0AAB */
    DoesFileExist(path: string): boolean;
    /** Moves an existing directory and returns true if the operation is successful
    *
    * https://library.sannybuilder.com/#/sa?q=0B03 */
    MoveDirectory(dirPath: string, newDirPath: string): boolean;
    /** Moves an existing file and returns true if the operation is successful
    *
    * https://library.sannybuilder.com/#/sa?q=0B02 */
    MoveFile(fileName: string, newFileName: string): boolean;
    /** Sets the current working directory (cwd) to a predefined location with a value of 0 or 1, or to an arbitrary path with a string value
    *
    * https://library.sannybuilder.com/#/sa?q=0A99 */
    SetCurrentDirectory(path: int): void;
}
declare var Fs: Fs
/** 
 * 
 * https://library.sannybuilder.com/#/sa/classes/Fx */
interface Fx {
    /** Creates a gun flash particle effect
    *
    * https://library.sannybuilder.com/#/sa?q=058A */
    AddBigGunFlash(fromX: float, fromY: float, fromZ: float, toX: float, toY: float, toZ: float): void;
    AddBlood(x: float, y: float, z: float, offsetX: float, offsetY: float, offsetZ: float, density: int, handle: Char): void;
    /** Creates an explosion at the point
    *
    * https://library.sannybuilder.com/#/sa?q=020C */
    AddExplosion(x: float, y: float, z: float, type: int): void;
    /** Creates an explosion with no sound
    *
    * https://library.sannybuilder.com/#/sa?q=0565 */
    AddExplosionNoSound(x: float, y: float, z: float, type: int): void;
    /** Creates an explosion at the specified coordinates
    *
    * https://library.sannybuilder.com/#/sa?q=0948 */
    AddExplosionVariableShake(x: float, y: float, z: float, type: int, shake: float): void;
    AddSmokeParticle(x: float, y: float, z: float, velocityX: float, velocityY: float, velocityZ: float, red: int, green: int, blue: int, alpha: int, size: float, lastFactor: float): void;
    AddSparks(x: float, y: float, z: float, velocityX: float, velocityY: float, velocityZ: float, density: int): void;
    /** Displays a corona at the specified location
    *
    * https://library.sannybuilder.com/#/sa?q=024F */
    DrawCorona(x: float, y: float, z: float, size: float, coronaType: int, flareType: int, r: int, g: int, b: int): void;
    /** Draws colored light in radius of the specified point
    *
    * https://library.sannybuilder.com/#/sa?q=09E5 */
    DrawLightWithRange(x: float, y: float, z: float, red: int, green: int, blue: int, radius: float): void;
    /** Draws a shadow in the current frame
    *
    * https://library.sannybuilder.com/#/sa?q=016F */
    DrawShadow(textureType: int, x: float, y: float, z: float, angle: float, length: float, intensity: int, r: int, g: int, b: int): void;
    /** Displays a corona with the lowered draw distance at the specified coordinates
    *
    * https://library.sannybuilder.com/#/sa?q=04D5 */
    DrawWeaponshopCorona(x: float, y: float, z: float, size: float, coronaType: int, flareType: int, r: int, g: int, b: int): void;
}
declare var Fx: Fx
/** 
 * 
 * https://library.sannybuilder.com/#/sa/classes/Game */
interface Game {
    /** Enables ped spawning in interiors
    *
    * https://library.sannybuilder.com/#/sa?q=084D */
    ActivateInteriorPeds(state: boolean): void;
    /** Sets whether sleeping with a prostitute earns you money instead of taking it away from you
    *
    * https://library.sannybuilder.com/#/sa?q=0A3D */
    ActivatePimpCheat(state: boolean): void;
    /** Displays a screen prompting the player to save
    *
    * https://library.sannybuilder.com/#/sa?q=03D8 */
    ActivateSaveMenu(): void;
    /** Enables the player to access the pause menu while widescreen is enabled
    *
    * https://library.sannybuilder.com/#/sa?q=0A48 */
    AllowPauseInWidescreen(state: boolean): void;
    /** Returns true if the player has used any of the cheats
    *
    * https://library.sannybuilder.com/#/sa?q=0445 */
    AreAnyCarCheatsActivated(): boolean;
    /** Returns true if the game uses metric measurements (meters instead of inches)
    *
    * https://library.sannybuilder.com/#/sa?q=0424 */
    AreMeasurementsInMeters(): boolean;
    /** Returns true if subtitles are switched on in the settings menu
    *
    * https://library.sannybuilder.com/#/sa?q=09C8 */
    AreSubtitlesSwitchedOn(): boolean;
    /** Sets an animation pack to be loaded along with the specified model
    *
    * https://library.sannybuilder.com/#/sa?q=08E8 */
    AttachAnimsToModel(pedModelId: int, animationFile: string): void;
    /** Saves the game progress (with setting SaveGameStateType to 1)
    *
    * https://library.sannybuilder.com/#/sa?q=0A72 */
    AutoSave(): void;
    /** Awards the achievement in the REMASTERED version of SA
    *
    * https://library.sannybuilder.com/#/sa?q=0A8E */
    AwardAchievement(_p1: int): void;
    /** Allows the player to provoke turf wars while a mission is active
    *
    * https://library.sannybuilder.com/#/sa?q=08A3 */
    CanTriggerGangWarWhenOnAMission(state: boolean): void;
    CheckPointSave(_p1: int): void;
    CheckpointSaveOddjob(_p1: int): void;
    ClearRelationship(relationshipType: int, ofPedType: int, toPedType: int): void;
    /** Enables turf wars to be provoked in all zones
    *
    * https://library.sannybuilder.com/#/sa?q=090D */
    ClearSpecificZonesToTriggerGangWar(): void;
    /** Suspends the current players wanted level
    *
    * https://library.sannybuilder.com/#/sa?q=09D4 */
    ClearWantedLevelInGarage(): void;
    /** Enables the entry/exit marker in the specified radius of the coordinates
    *
    * https://library.sannybuilder.com/#/sa?q=0864 */
    EnableEntryExitPlayerGroupWarping(x: float, y: float, radius: float, state: boolean): void;
    /** Terminates the active mission by executing its mission cleanup routine
    *
    * https://library.sannybuilder.com/#/sa?q=045C */
    FailCurrentMission(): void;
    FindMaxNumberOfGroupMembers(): int;
    /** Disables all vehicle lights from being rendered if enabled
    *
    * https://library.sannybuilder.com/#/sa?q=0A37 */
    ForceAllVehicleLightsOff(state: boolean): void;
    ForceDeathRestart(): void;
    /** Returns the current language set in the menu language settings
    *
    * https://library.sannybuilder.com/#/sa?q=09FB */
    GetCurrentLanguage(): int;
    /** Gets the maximum wanted level the player can receive
    *
    * https://library.sannybuilder.com/#/sa?q=050F */
    GetMaxWantedLevel(): int;
    /** Cancels any prostitute invitations received in-game and makes any current prostitutes quit
    *
    * https://library.sannybuilder.com/#/sa?q=0A43 */
    GetRidOfPlayerProstitute(): void;
    GetWeaponTypeModel(weaponType: int): int;
    GetWeaponTypeSlot(weaponType: int): int;
    /** Returns true if the player just exited the menu on the last frame
    *
    * https://library.sannybuilder.com/#/sa?q=09FA */
    HasGameJustReturnedFromFrontend(): boolean;
    /** Returns true if the current language set is different from the previous language set
    *
    * https://library.sannybuilder.com/#/sa?q=0A0F */
    HasLanguageChanged(): boolean;
    /** Returns true if the player has saved their game
    *
    * https://library.sannybuilder.com/#/sa?q=03D9 */
    HasSaveGameFinished(): boolean;
    HideAllFrontendBlips(state: boolean): void;
    /** Returns true if the game is in 2-player mode
    *
    * https://library.sannybuilder.com/#/sa?q=0800 */
    Is2PlayerGameGoingOn(): boolean;
    /** Returns true if the current game is an Australian release
    *
    * https://library.sannybuilder.com/#/sa?q=059A */
    IsAustralian(): boolean;
    IsCheckPointResuming(_p1: boolean): boolean;
    /** Returns true if this is the final build of the game (always true)
    *
    * https://library.sannybuilder.com/#/sa?q=0A65 */
    IsFinalbuild(): boolean;
    /** Returns true if the player provoked a gang war or is defending territory
    *
    * https://library.sannybuilder.com/#/sa?q=0A03 */
    IsGangWarFightingGoingOn(): boolean;
    /** Returns true if there is a gang war happening
    *
    * https://library.sannybuilder.com/#/sa?q=087A */
    IsGangWarGoingOn(): boolean;
    /** Returns true if the game language is set to German
    *
    * https://library.sannybuilder.com/#/sa?q=040C */
    IsGerman(): boolean;
    /** Returns true if 09BD has been used in any script to disable help messages
    *
    * https://library.sannybuilder.com/#/sa?q=09BE */
    IsMinigameInProgress(): boolean;
    /** Returns true if night vision is active
    *
    * https://library.sannybuilder.com/#/sa?q=099D */
    IsNightVisionActive(): boolean;
    /** Returns true if players controls are set to joystick and not mouse+keyboard
    *
    * https://library.sannybuilder.com/#/sa?q=0A4B */
    IsPcUsingJoypad(): boolean;
    /** Returns true on PC versions of the game
    *
    * https://library.sannybuilder.com/#/sa?q=0485 */
    IsPcVersion(): boolean;
    /** Returns true in interactive interiors
    *
    * https://library.sannybuilder.com/#/sa?q=0867 */
    IsProceduralInteriorActive(interiorId: int): boolean;
    /** Returns true if the specified relationship between ped types is set
    *
    * https://library.sannybuilder.com/#/sa?q=07E8 */
    IsRelationshipSet(ofPedType: int, toPedType: int, relationshipType: int): boolean;
    /** Returns true if the game version is vanilla 1.0
    *
    * https://library.sannybuilder.com/#/sa?q=0AA9 */
    IsVersionOriginal(): boolean;
    /** Returns true if widescreen is switched on in the display settings
    *
    * https://library.sannybuilder.com/#/sa?q=0A2B */
    IsWidescreenOnInOptions(): boolean;
    /** Sets how far apart players can get on 2-player mode
    *
    * https://library.sannybuilder.com/#/sa?q=06F1 */
    LimitTwoPlayerDistance(distance: float): void;
    /** Ensures there is x amount of space for new members to be added to the players gang
    *
    * https://library.sannybuilder.com/#/sa?q=09DD */
    MakeRoomInPlayerGangForMissionPeds(_p1: int): void;
    ManageAllPopulation(): void;
    /** Emulates the shared effects of being wasted or busted
    *
    * https://library.sannybuilder.com/#/sa?q=0974 */
    ResetStuffUponResurrection(): void;
    /** Enables missiles to be fired from the aircraft carrier by Easter Bay Naval Station, San Fierro
    *
    * https://library.sannybuilder.com/#/sa?q=09E4 */
    SetAircraftCarrierSamSite(state: boolean): void;
    /** Sets whether all cars receive damage
    *
    * https://library.sannybuilder.com/#/sa?q=03F4 */
    SetAllCarsCanBeDamaged(state: boolean): void;
    /** Toggles whether all taxis have nitrous
    *
    * https://library.sannybuilder.com/#/sa?q=0572 */
    SetAllTaxisHaveNitro(state: boolean): void;
    /** Enables or disables the SAM site at the Area 51
    *
    * https://library.sannybuilder.com/#/sa?q=07A8 */
    SetArea51SamSite(state: boolean): void;
    /** Sets the total number of hidden packages to collect
    *
    * https://library.sannybuilder.com/#/sa?q=02ED */
    SetCollectableTotal(amount: int): void;
    /** Makes pedestrians pay no attention to the player
    *
    * https://library.sannybuilder.com/#/sa?q=03BF */
    SetEveryoneIgnorePlayer(handle: Player, state: boolean): void;
    /** Forces all cars spawned to be of the specified model
    *
    * https://library.sannybuilder.com/#/sa?q=09BF */
    SetForceRandomCarModel(modelId: int): void;
    /** Defines whether the player can respray their car for free
    *
    * https://library.sannybuilder.com/#/sa?q=0335 */
    SetFreeResprays(state: boolean): void;
    /** Sets whether gang wars can be started by the player or enemy gangs
    *
    * https://library.sannybuilder.com/#/sa?q=0879 */
    SetGangWarsActive(state: boolean): void;
    /** Disables highlighting of gang territory on the map and radar
    *
    * https://library.sannybuilder.com/#/sa?q=08AC */
    SetGangWarsTrainingMission(state: boolean): void;
    SetGunshotSenseRangeForRiot2(range: float): void;
    /** Enables thermal vision effects
    *
    * https://library.sannybuilder.com/#/sa?q=08B2 */
    SetInfraredVision(state: boolean): void;
    /** Greys out the radar
    *
    * https://library.sannybuilder.com/#/sa?q=057E */
    SetIsInStadium(state: boolean): void;
    /** Sets the limit on how many fires can be created from other fires when "propagation" was enabled on 02CF
    *
    * https://library.sannybuilder.com/#/sa?q=0828 */
    SetMaxFireGenerations(limit: int): void;
    /** Sets the maximum wanted level the player can receive
    *
    * https://library.sannybuilder.com/#/sa?q=01F0 */
    SetMaxWantedLevel(wantedLevel: int): void;
    /** Disables displaying help messages in other scripts
    *
    * https://library.sannybuilder.com/#/sa?q=09BD */
    SetMinigameInProgress(state: boolean): void;
    /** Sets the specified enex flag
    *
    * https://library.sannybuilder.com/#/sa?q=098E */
    SetNamedEntryExitFlag(name: string, bitmask: int, state: boolean): void;
    /** Enables night vision effects
    *
    * https://library.sannybuilder.com/#/sa?q=08B1 */
    SetNightVision(state: boolean): void;
    /** Disables respray garages from opening for the player
    *
    * https://library.sannybuilder.com/#/sa?q=0A14 */
    SetNoResprays(state: boolean): void;
    /** Sets the attitude of peds with one pedtype towards peds of another pedtype
    *
    * https://library.sannybuilder.com/#/sa?q=0746 */
    SetRelationship(relationshipType: int, ofPedType: int, toPedType: int): void;
    /** Sets an unused flag at address 0x96A8A8
    *
    * https://library.sannybuilder.com/#/sa?q=0A3F */
    SetScriptCoopGame(state: boolean): void;
    /** Sets the maximum number of members that the player can recruit
    *
    * https://library.sannybuilder.com/#/sa?q=08F4 */
    SetScriptLimitToGangSize(maxSize: int): void;
    /** Sets sensitivity to crime, changing how many crimes a player can commit before police begin to pursue
    *
    * https://library.sannybuilder.com/#/sa?q=03C7 */
    SetWantedMultiplier(multiplier: float): void;
    /** Enables entity blips showing on the radar and map while in interiors
    *
    * https://library.sannybuilder.com/#/sa?q=09A6 */
    ShowBlipsOnAllLevels(state: boolean): void;
    /** Prevents all peds from attempting to start conversations with the player
    *
    * https://library.sannybuilder.com/#/sa?q=09F5 */
    ShutAllCharsUp(state: boolean): void;
    /** Enables or disables planes
    *
    * https://library.sannybuilder.com/#/sa?q=0923 */
    SwitchAmbientPlanes(state: boolean): void;
    /** Sets whether or not the player loses their weapons and inventory when busted
    *
    * https://library.sannybuilder.com/#/sa?q=08DE */
    SwitchArrestPenalties(state: boolean): void;
    /** Disables the game from creating police bikes and their riders on the roads
    *
    * https://library.sannybuilder.com/#/sa?q=072C */
    SwitchCopsOnBikes(state: boolean): void;
    /** Sets whether or not the player loses their weapons and inventory when taken to hospital
    *
    * https://library.sannybuilder.com/#/sa?q=08DD */
    SwitchDeathPenalties(state: boolean): void;
    /** Sets whether emergency traffic spawns
    *
    * https://library.sannybuilder.com/#/sa?q=06D0 */
    SwitchEmergencyServices(state: boolean): void;
    /** Enables or disables all triggers of the specified type (0928 or 0929)
    *
    * https://library.sannybuilder.com/#/sa?q=0A46 */
    SwitchObjectBrains(type: int, state: boolean): void;
    /** Sets whether ghetto birds spawn
    *
    * https://library.sannybuilder.com/#/sa?q=096A */
    SwitchPoliceHelis(state: boolean): void;
    /** Takes a screenshot of the screen without any HUD elements and stores the file in the "GTA San Andreas User FilesGallery" folder
    *
    * https://library.sannybuilder.com/#/sa?q=0A1E */
    TakePhoto(_p1: boolean): void;
}
declare var Game: Game
/** 
 * 
 * https://library.sannybuilder.com/#/sa/classes/Gang */
interface Gang {
    /** Sets the weapons that the specified gang can use
    *
    * https://library.sannybuilder.com/#/sa?q=0237 */
    SetWeapons(gangId: int, weaponType1: int, weaponType2: int, weaponType3: int): void;
}
declare var Gang: Gang
/** 
 * 
 * https://library.sannybuilder.com/#/sa/classes/Garage */
interface Garage {
    /** Activates the garage
    *
    * https://library.sannybuilder.com/#/sa?q=0299 */
    Activate(garageId: string): void;
    /** Sets the garage's type
    *
    * https://library.sannybuilder.com/#/sa?q=02FA */
    ChangeType(garageId: string, type: int): void;
    /** Closes the garage
    *
    * https://library.sannybuilder.com/#/sa?q=0361 */
    Close(garageId: string): void;
    /** Deactivates the garage
    *
    * https://library.sannybuilder.com/#/sa?q=02B9 */
    Deactivate(garageId: string): void;
    /** Returns true if the garage's door is closed
    *
    * https://library.sannybuilder.com/#/sa?q=03B1 */
    IsClosed(garageId: string): boolean;
    /** Returns true if the garage's door is open
    *
    * https://library.sannybuilder.com/#/sa?q=03B0 */
    IsOpen(garageId: string): boolean;
    /** Opens the garage
    *
    * https://library.sannybuilder.com/#/sa?q=0360 */
    Open(garageId: string): void;
    SetResprayFree(garageId: string, state: boolean): void;
    /** Sets the specified garage to only accept the specified vehicle
    *
    * https://library.sannybuilder.com/#/sa?q=021B */
    SetTargetCarForMission(garageName: int, vehicle: Car): void;
}
declare var Garage: Garage
/** 
 * 
 * https://library.sannybuilder.com/#/sa/classes/Group */
declare class Group {
    constructor(handle: number);
    /** Creates a new group, which multiple characters can be assigned to, allowing control over all of them as a group
    *
    * https://library.sannybuilder.com/#/sa?q=062F */
    static Create(type: int): Group;
    /** Returns true if the handle is a valid group handle
    *
    * https://library.sannybuilder.com/#/sa?q=07FD */
    static DoesExist(handle: int): boolean;
    /** Returns the nth group member
    *
    * https://library.sannybuilder.com/#/sa?q=092B */
    getMember(slotId: int): Char;
    getSize(): {
        numLeaders: int;
        numMembers: int;
    };
    /** Releases the group
    *
    * https://library.sannybuilder.com/#/sa?q=0632 */
    remove(): void;
    /** Sets the decision maker for a group of characters
    *
    * https://library.sannybuilder.com/#/sa?q=06AD */
    setDecisionMaker(maskOrHandle: DecisionMakerGroup): void;
    setDefaultTaskAllocator(commandId: int): void;
    /** Sets whether the group members enter a car when the leader does
    *
    * https://library.sannybuilder.com/#/sa?q=0940 */
    setFollowStatus(state: boolean): void;
    /** Puts the specified character into the group as the leader
    *
    * https://library.sannybuilder.com/#/sa?q=0630 */
    setLeader(handle: Char): void;
    /** Puts the specified character into the group as a member
    *
    * https://library.sannybuilder.com/#/sa?q=0631 */
    setMember(handle: Char): void;
    /** Sets how far members of the group can be from the leader before they are removed from the group
    *
    * https://library.sannybuilder.com/#/sa?q=06F0 */
    setSeparationRange(range: float): void;
    /** Sets the default task sequence for members of the group
    *
    * https://library.sannybuilder.com/#/sa?q=087D */
    setSequence(sequence: Sequence): void;
}
/** 
 * 
 * https://library.sannybuilder.com/#/sa/classes/Hid */
interface Hid {
    Implements(hidId: int): boolean;
    IsPressed(hidId: int): boolean;
    IsReleased(hidId: int): boolean;
    IsTouchEnabled(): boolean;
}
declare var Hid: Hid
/** 
 * 
 * https://library.sannybuilder.com/#/sa/classes/Hud */
interface Hud {
    /** Removes the onscreen counter (0150 or 03C4)
    *
    * https://library.sannybuilder.com/#/sa?q=0151 */
    ClearCounter(counter: int): void;
    /** Removes the onscreen timer
    *
    * https://library.sannybuilder.com/#/sa?q=014F */
    ClearTimer(timer: int): void;
    /** Sets whether the HUD displays
    *
    * https://library.sannybuilder.com/#/sa?q=0826 */
    Display(state: boolean): void;
    /** Sets whether the name of the current vehicle should be displayed
    *
    * https://library.sannybuilder.com/#/sa?q=09B9 */
    DisplayCarNames(state: boolean): void;
    /** Displays an onscreen counter with the text, either shown in numbers or as a bar
    *
    * https://library.sannybuilder.com/#/sa?q=03C4 */
    DisplayCounterWithString(counter: int, display: int, text: string): void;
    /** Displays an onscreen counter with the text in the specified slot, either shown in numbers or as a bar
    *
    * https://library.sannybuilder.com/#/sa?q=04F7 */
    DisplayNthCounterWithString(counter: int, direction: int, slot: int, text: string): void;
    /** Displays or hides the radar
    *
    * https://library.sannybuilder.com/#/sa?q=0581 */
    DisplayRadar(state: boolean): void;
    /** Creates a countdown or countup onscreen timer
    *
    * https://library.sannybuilder.com/#/sa?q=014E */
    DisplayTimer(timer: int, direction: int): void;
    /** Creates a countdown or countup onscreen timer with the text
    *
    * https://library.sannybuilder.com/#/sa?q=03C3 */
    DisplayTimerWithString(timer: int, direction: int, text: string): void;
    /** Sets whether the area text for the current area should show
    *
    * https://library.sannybuilder.com/#/sa?q=09BA */
    DisplayZoneNames(state: boolean): void;
    /** Sets whether the HUD should always display weapon aiming crosshairs, used in the mission 'Catalyst' where the player must throw crates of ammo to Ryder
    *
    * https://library.sannybuilder.com/#/sa?q=09A3 */
    DrawCrosshair(state: boolean): void;
    /** Draws a box at the specified screen X and Y position, with the specified size and RGBA colors
    *
    * https://library.sannybuilder.com/#/sa?q=038E */
    DrawRect(x: float, y: float, width: float, height: float, r: int, g: int, b: int, a: int): void;
    /** Draws a loaded texture (038F) at the specified on-screen X and Y coordinates, with the specified size and RGBA color
    *
    * https://library.sannybuilder.com/#/sa?q=038D */
    DrawSprite(memorySlot: int, offsetLeft: float, offsetTop: float, width: float, height: float, r: int, g: int, b: int, a: int): void;
    /** This is an extended version of 038D with scale and angle parameters
    *
    * https://library.sannybuilder.com/#/sa?q=074B */
    DrawSpriteWithRotation(memorySlot: int, offsetLeft: float, offsetTop: float, height: float, width: float, angle: float, red: int, green: int, blue: int, alpha: int): void;
    /** Draws a black box with styled text from corner A to corner B
    *
    * https://library.sannybuilder.com/#/sa?q=0937 */
    DrawWindow(leftTopX: float, leftTopY: float, rightBottomX: float, rightBottomY: float, header: string, zIndex: int): void;
    /** Makes a specific part of the HUD disappear and reappear several times
    *
    * https://library.sannybuilder.com/#/sa?q=03E7 */
    FlashObject(object: int): void;
    /** Makes the on-screen timer stop updating
    *
    * https://library.sannybuilder.com/#/sa?q=0396 */
    FreezeTimer(state: boolean): void;
    /** Returns the RGBA of the specified HUD color
    *
    * https://library.sannybuilder.com/#/sa?q=0904 */
    GetColor(hudObject: int): {
        red: int;
        green: int;
        blue: int;
        alpha: int;
    };
    SetOnscreenCounterFlashWhenFirstDisplayed(counter: int, state: boolean): void;
    SetRadarZoom(zoom: int): void;
    /** Causes the next texture to be drawn (038D) before the fade is drawn
    *
    * https://library.sannybuilder.com/#/sa?q=03E3 */
    SetSpritesDrawBeforeFade(state: boolean): void;
    /** Starts a sound when the countdown timer reaches the specified number of seconds
    *
    * https://library.sannybuilder.com/#/sa?q=0890 */
    SetTimerBeepCountdownTime(timer: int, timeInSec: int): void;
    /** Enables widescreen
    *
    * https://library.sannybuilder.com/#/sa?q=02A3 */
    SwitchWidescreen(state: boolean): void;
}
declare var Hud: Hud
/** 
 * 
 * https://library.sannybuilder.com/#/sa/classes/IniFile */
interface IniFile {
    /** Reads a floating-point value from the ini file
    *
    * https://library.sannybuilder.com/#/sa?q=0AF2 */
    ReadFloat(path: string, section: string, key: string): float;
    /** Reads an integer value from the ini file
    *
    * https://library.sannybuilder.com/#/sa?q=0AF0 */
    ReadInt(path: string, section: string, key: string): int;
    /** Reads a string value from the ini file
    *
    * https://library.sannybuilder.com/#/sa?q=0AF4 */
    ReadString(path: string, section: string, key: string): string;
    /** Writes the floating-point value to the ini file
    *
    * https://library.sannybuilder.com/#/sa?q=0AF3 */
    WriteFloat(value: float, path: string, section: string, key: string): void;
    /** Writes the integer value to the ini file
    *
    * https://library.sannybuilder.com/#/sa?q=0AF1 */
    WriteInt(value: int, path: string, section: string, key: string): void;
    /** Writes the string value to the ini file
    *
    * https://library.sannybuilder.com/#/sa?q=0AF5 */
    WriteString(value: string, path: string, section: string, key: string): void;
}
declare var IniFile: IniFile
/** 
 * 
 * https://library.sannybuilder.com/#/sa/classes/KillFrenzy */
interface KillFrenzy {
    /** Cancels current rampage, setting the rampage status to failed
    *
    * https://library.sannybuilder.com/#/sa?q=09C2 */
    Fail(): void;
    /** Returns the status of the current rampage
    *
    * https://library.sannybuilder.com/#/sa?q=01FA */
    ReadStatus(): int;
    /** Starts a rampage
    *
    * https://library.sannybuilder.com/#/sa?q=01F9 */
    Start(text: string, weaponType: int, timeInMs: int, targetsNum: int, targetModel1: int, targetModel2: int, targetModel3: int, targetModel4: int, betaSoundsAndMessages: boolean): void;
}
declare var KillFrenzy: KillFrenzy
/** 
 * 
 * https://library.sannybuilder.com/#/sa/classes/Math */
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
    * https://library.sannybuilder.com/#/sa?q=042D */
    ConvertMetersToFeet(meters: int): int;
    /** Gets the angle between the two 2D vectors
    *
    * https://library.sannybuilder.com/#/sa?q=05A4 */
    GetAngleBetween2DVectors(x1: float, y1: float, x2: float, y2: float): float;
    /** Gets the distance between two points
    *
    * https://library.sannybuilder.com/#/sa?q=0509 */
    GetDistanceBetweenCoords2D(fromX: float, fromY: float, toX: float, toZ: float): float;
    /** Gets the distance between two points
    *
    * https://library.sannybuilder.com/#/sa?q=050A */
    GetDistanceBetweenCoords3D(fromX: float, fromY: float, fromZ: float, toX: float, toY: float, toZ: float): float;
    /** Gets the angle for the XY offset
    *
    * https://library.sannybuilder.com/#/sa?q=0604 */
    GetHeadingFromVector2D(x: float, y: float): float;
    /** Gets the exact angle of an angle
    *
    * https://library.sannybuilder.com/#/sa?q=0656 */
    LimitAngle(value: float): float;
    /** Returns a random float between the specified ranges
    *
    * https://library.sannybuilder.com/#/sa?q=0208 */
    RandomFloatInRange(min: float, max: float): float;
    /** Returns a random integer between the specified ranges
    *
    * https://library.sannybuilder.com/#/sa?q=0209 */
    RandomIntInRange(min: int, max: int): int;
}
declare var Math: Math
/** 
 * 
 * https://library.sannybuilder.com/#/sa/classes/Memory */
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
    * https://library.sannybuilder.com/#/sa?q=0AC8 */
    Allocate(size: int): int;
    /** Calls a function at the address with the given arguments and the calling convention defined by the pop parameter where 0 means 'stdcall' and a value equal to numParams means  'cdecl'
    *
    * https://library.sannybuilder.com/#/sa?q=0AA5 */
    CallFunction(address: int, numParams: int, pop: int, ...funcParams: number[]): void;
    /** Calls a function similarly to 0AA5 and writes the result into the variable following the arguments list
    *
    * https://library.sannybuilder.com/#/sa?q=0AA7 */
    CallFunctionReturn(address: int, numParams: int, pop: int, ...funcParams: number[]): int;
    /** Calls a method of the object (struct) with the given arguments and the 'thiscall' calling convention (pop is always 0)
    *
    * https://library.sannybuilder.com/#/sa?q=0AA6 */
    CallMethod(address: int, struct: int, numParams: int, pop: int, ...funcParams: number[]): void;
    /** Calls a method of the object (struct) similarly to 0AA6 and writes the result into the variable following the arguments list
    *
    * https://library.sannybuilder.com/#/sa?q=0AA8 */
    CallMethodReturn(address: int, struct: int, numParams: int, pop: int, ...funcParams: number[]): int;
    /** Frees the memory allocated with 0AC8
    *
    * https://library.sannybuilder.com/#/sa?q=0AC9 */
    Free(address: int): void;
    /** Stores the absolute address of a code location marked with the label
    *
    * https://library.sannybuilder.com/#/sa?q=0AC6 */
    GetLabelPointer(_: int): int;
    /** Gets the address of the object struct in the game memory by its handle
    *
    * https://library.sannybuilder.com/#/sa?q=0A98 */
    GetObjectPointer(object: ScriptObject): int;
    /** Gets the corresponding handle of the object located at the given address in memory
    *
    * https://library.sannybuilder.com/#/sa?q=0AEC */
    GetObjectRef(address: int): ScriptObject;
    /** Gets the address of the ped struct in the game memory by its handle
    *
    * https://library.sannybuilder.com/#/sa?q=0A96 */
    GetPedPointer(char: Char): int;
    /** Gets the corresponding handle of the char located at the given address in memory
    *
    * https://library.sannybuilder.com/#/sa?q=0AEA */
    GetPedRef(address: int): Char;
    /** Gets the address of a running script which name matches the given string or 0 otherwise
    *
    * https://library.sannybuilder.com/#/sa?q=0AAA */
    GetScriptStructNamed(scriptName: string): int;
    /** Gets the address of the current script structure in the game memory
    *
    * https://library.sannybuilder.com/#/sa?q=0A9F */
    GetThisScriptStruct(): int;
    /** Stores the absolute address of the variable
    *
    * https://library.sannybuilder.com/#/sa?q=0AC7 */
    GetVarPointer(_: int): int;
    /** Gets the address of the vehicle struct in the game memory by its handle
    *
    * https://library.sannybuilder.com/#/sa?q=0A97 */
    GetVehiclePointer(vehicle: Car): int;
    /** Gets the corresponding handle of the vehicle located at the given address in memory
    *
    * https://library.sannybuilder.com/#/sa?q=0AEB */
    GetVehicleRef(address: int): Car;
    PopFloat(): float;
    /** Reads a value from the game memory
    *
    * https://library.sannybuilder.com/#/sa?q=0DD8 */
    Read(address: int, size: int, ib: boolean): int;
    /** Writes a value to the game memory
    *
    * https://library.sannybuilder.com/#/sa?q=0DD9 */
    Write(address: int, value: int, size: int, ib: boolean, vp: boolean): void;
}
declare var Memory: Memory
/** 
 * 
 * https://library.sannybuilder.com/#/sa/classes/Menu */
declare class Menu {
    constructor(handle: number);
    /** Creates the specified panel on the screen with basic settings
    *
    * https://library.sannybuilder.com/#/sa?q=08D4 */
    static Create(header: string, topLeftX: float, topLeftY: float, width: float, numColumns: int, interactive: boolean, background: boolean, alignment: int): Menu;
    activateItem(row: int, state: boolean): void;
    changeCarColor(vehicle: Car, colorSlot: int, row: int): void;
    /** Removes the specified panel from the screen
    *
    * https://library.sannybuilder.com/#/sa?q=08DA */
    delete(): void;
    /** Returns the last row of a panel selected with the sprint key
    *
    * https://library.sannybuilder.com/#/sa?q=08D8 */
    getItemAccepted(): int;
    /** Returns the currently highlighted row in a panel
    *
    * https://library.sannybuilder.com/#/sa?q=08D7 */
    getItemSelected(): int;
    /** Highlights the menu item - used to indicate an owned shopping item
    *
    * https://library.sannybuilder.com/#/sa?q=0A23 */
    highlightItem(row: int, state: boolean): void;
    setActiveItem(row: int): void;
    setColumn(column: int, title: string, row0: string, row1: string, row2: string, row3: string, row4: string, row5: string, row6: string, row7: string, row8: string, row9: string, row10: string, row11: string): void;
    setColumnOrientation(column: int, alignment: int): void;
    /** Sets the width of the specified menu column
    *
    * https://library.sannybuilder.com/#/sa?q=09DB */
    setColumnWidth(column: int, width: int): void;
    setItemWith2Numbers(column: int, row: int, gxt: string, number1: int, number2: int): void;
    /** Sets the numbered GXT of the specified panel row
    *
    * https://library.sannybuilder.com/#/sa?q=08EE */
    setItemWithNumber(column: int, row: int, gxt: string, number: int): void;
}
/** 
 * 
 * https://library.sannybuilder.com/#/sa/classes/Mouse */
interface Mouse {
    /** Gives the offset of the mouse or right thumbstick movement
    *
    * https://library.sannybuilder.com/#/sa?q=0A4A */
    GetMovement(): {
        offsetX: float;
        offsetY: float;
    };
    /** Returns true if the players settings are set to invert the mouse
    *
    * https://library.sannybuilder.com/#/sa?q=0A4C */
    IsUsingVerticalInversion(): boolean;
}
declare var Mouse: Mouse
/** 
 * 
 * https://library.sannybuilder.com/#/sa/classes/Pad */
interface Pad {
    /** Returns the controller mode
    *
    * https://library.sannybuilder.com/#/sa?q=0293 */
    GetControllerMode(): int;
    /** Returns the offset of the specified Left/Right, Up/Down, Look Left/Look Right and Look Up/Look Down keys
    *
    * https://library.sannybuilder.com/#/sa?q=0494 */
    GetPositionOfAnalogueSticks(pad: Pad): {
        leftStickX: int;
        leftStickY: int;
        rightStickX: int;
        rightStickY: int;
    };
    /** Stores the status of the specified key into a variable
    *
    * https://library.sannybuilder.com/#/sa?q=00E2 */
    GetState(pad: Pad, buttonId: int): int;
    /** Returns true if the pad's button has been pressed
    *
    * https://library.sannybuilder.com/#/sa?q=00E1 */
    IsButtonPressed(pad: Pad, buttonId: int): boolean;
    /** Returns true if the player is pressing a keyboard button with the specified code
    *
    * https://library.sannybuilder.com/#/sa?q=0AB0 */
    IsKeyPressed(keyCode: int): boolean;
    /** Returns true if the player is pressing a key used to skip cutscenes or the game has been minimised
    *
    * https://library.sannybuilder.com/#/sa?q=08D0 */
    IsSkipCutsceneButtonPressed(): boolean;
    /** Affects the delay to the left and right steering while driving
    *
    * https://library.sannybuilder.com/#/sa?q=03FD */
    SetDrunkInputDelay(pad: Pad, delay: int): void;
    SetPlayerCycleWeaponButton(playerId: Player, state: boolean): void;
    /** Sets whether a player can use the ACTION key to display their stats
    *
    * https://library.sannybuilder.com/#/sa?q=0960 */
    SetPlayerDisplayVitalStatsButton(playerId: Player, state: boolean): void;
    /** Sets whether the player can use the crouch button
    *
    * https://library.sannybuilder.com/#/sa?q=082A */
    SetPlayerDuckButton(playerId: Player, state: boolean): void;
    /** Sets whether the player can enter and exit vehicles
    *
    * https://library.sannybuilder.com/#/sa?q=07CC */
    SetPlayerEnterCarButton(playerId: Player, state: boolean): void;
    /** Sets whether the player is able to use weapons
    *
    * https://library.sannybuilder.com/#/sa?q=0881 */
    SetPlayerFireButton(playerId: Player, state: boolean): void;
    /** Sets whether the player can jump
    *
    * https://library.sannybuilder.com/#/sa?q=0901 */
    SetPlayerJumpButton(playerId: Player, state: boolean): void;
    /** Shakes the player's joypad at the specified intensity for the specified time
    *
    * https://library.sannybuilder.com/#/sa?q=015B */
    Shake(pad: Pad, time: int, intensity: int): void;
    /** Returns true if the specified string of letters has been typed on the keyboard
    *
    * https://library.sannybuilder.com/#/sa?q=0ADC */
    TestCheat(input: string): boolean;
}
declare var Pad: Pad
/** 
 * 
 * https://library.sannybuilder.com/#/sa/classes/Particle */
declare class Particle {
    constructor(handle: number);
    /** Creates a particle effect
    *
    * https://library.sannybuilder.com/#/sa?q=064B */
    static Create(name: string, x: float, y: float, z: float, type: int): Particle;
    /** Creates a particle effect attached to a vehicle
    *
    * https://library.sannybuilder.com/#/sa?q=066B */
    static CreateOnCar(name: string, vehicle: Car, xOffset: float, yOffset: float, zOffset: float, type: float): Particle;
    /** Creates a particle and attaches it to the specified vehicle with the specified offset and direction
    *
    * https://library.sannybuilder.com/#/sa?q=066C */
    static CreateOnCarWithDirection(name: string, vehicle: Car, xOffset: float, yOffset: float, zOffset: float, xDirection: float, yDirection: float, zDirection: float, type: int): Particle;
    /** Creates a particle attached to a character
    *
    * https://library.sannybuilder.com/#/sa?q=0669 */
    static CreateOnChar(name: string, char: Char, xOffset: float, yOffset: float, zOffset: float, type: int): Particle;
    /** Creates a particle effect attached to a character
    *
    * https://library.sannybuilder.com/#/sa?q=066A */
    static CreateOnCharWithDirection(name: string, char: Char, xOffset: float, yOffset: float, zOffset: float, xDirection: float, yDirection: float, zDirection: float, type: int): Particle;
    /** Creates a particle effect on an object
    *
    * https://library.sannybuilder.com/#/sa?q=066D */
    static CreateOnObject(name: string, object: ScriptObject, xOffset: float, yOffset: float, zOffset: float, type: int): Particle;
    /** Creates particle effect on an object
    *
    * https://library.sannybuilder.com/#/sa?q=066E */
    static CreateOnObjectWithDirection(name: string, object: ScriptObject, xOffset: float, yOffset: float, zOffset: float, xDirection: float, yDirection: float, zDirection: float, type: int): Particle;
    /** Attaches the specified particle to the specified character
    *
    * https://library.sannybuilder.com/#/sa?q=0883 */
    attachToCharBone(handle: Char, boneId: int): void;
    /** Stops the particle and deletes it
    *
    * https://library.sannybuilder.com/#/sa?q=0650 */
    kill(): void;
    /** Destroys the specified particle
    *
    * https://library.sannybuilder.com/#/sa?q=0976 */
    killNow(): void;
    /** Makes the specified particle visible
    *
    * https://library.sannybuilder.com/#/sa?q=064C */
    play(): void;
    /** Starts the particle effect and relinquishes script control over it
    *
    * https://library.sannybuilder.com/#/sa?q=064F */
    playAndKill(): void;
    /** Stops the specified particle at the source
    *
    * https://library.sannybuilder.com/#/sa?q=064E */
    stop(): void;
}
/** 
 * 
 * https://library.sannybuilder.com/#/sa/classes/Path */
interface Path {
    /** Adds a new point to the patrol route
    *
    * https://library.sannybuilder.com/#/sa?q=0755 */
    ExtendPatrolRoute(x: float, y: float, z: float, animationName: string, animationFile: string): void;
    /** Adds a point to the task route
    *
    * https://library.sannybuilder.com/#/sa?q=05D7 */
    ExtendRoute(x: float, y: float, z: float): void;
    /** Clears all previous patrol data to start a new patrol route, which can be used in combination with 0755 to create patrol routes
    *
    * https://library.sannybuilder.com/#/sa?q=0754 */
    FlushPatrolRoute(): void;
    /** Flushes the task route
    *
    * https://library.sannybuilder.com/#/sa?q=05D6 */
    FlushRoute(): void;
    /** Returns the nearest path note from the specified coordinates that a vehicle can drive on
    *
    * https://library.sannybuilder.com/#/sa?q=02C1 */
    GetClosestCarNode(x: float, y: float, z: float): {
        nodeX: float;
        nodeY: float;
        nodeZ: float;
    };
    /** Returns the position and heading of the closest vehicle path node to the specified position
    *
    * https://library.sannybuilder.com/#/sa?q=03D3 */
    GetClosestCarNodeWithHeading(x: float, y: float, z: float): {
        nodeX: float;
        nodeY: float;
        nodeZ: float;
        angle: float;
    };
    /** Returns the nearest path node from the specified coordinates that a pedestrian can walk on
    *
    * https://library.sannybuilder.com/#/sa?q=02C0 */
    GetClosestCharNode(x: float, y: float, z: float): {
        nodeX: float;
        nodeY: float;
        nodeZ: float;
    };
    /** Gets two closest path nodes within the specified distance range
    *
    * https://library.sannybuilder.com/#/sa?q=04B9 */
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
    * https://library.sannybuilder.com/#/sa?q=04D3 */
    GetNthClosestCarNode(fromX: float, fromY: float, fromZ: float, n: int): {
        x: float;
        y: float;
        z: float;
    };
    GetNthClosestCarNodeWithHeading(xCoord: float, yCoord: float, zCoord: float, nth: int): {
        x: float;
        y: float;
        z: float;
        heading: float;
    };
    /** Adds an area where script created cars will avoid driving in
    *
    * https://library.sannybuilder.com/#/sa?q=0606 */
    LoadPathNodesInArea(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float): void;
    MarkRoadNodeAsDontWander(x: float, y: float, z: float): void;
    /** Removes areas forbidden for scripted cars set up by 0606
    *
    * https://library.sannybuilder.com/#/sa?q=0607 */
    ReleaseNodes(): void;
    SwitchPedRoadsBackToOriginal(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float): void;
    /** Forbids pedestrians to walk into the specified area
    *
    * https://library.sannybuilder.com/#/sa?q=022B */
    SwitchPedRoadsOff(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float): void;
    /** Allows pedestrians to walk into the specified area
    *
    * https://library.sannybuilder.com/#/sa?q=022A */
    SwitchPedRoadsOn(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float): void;
    SwitchRoadsBackToOriginal(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float): void;
    /** Prevents cars from driving on roads in the specified 3D area
    *
    * https://library.sannybuilder.com/#/sa?q=01E8 */
    SwitchRoadsOff(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float): void;
    /** Allows cars to drive in the specified 3D area
    *
    * https://library.sannybuilder.com/#/sa?q=01E7 */
    SwitchRoadsOn(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float): void;
    UnmarkAllRoadNodesAsDontWander(): void;
}
declare var Path: Path
/** 
 * 
 * https://library.sannybuilder.com/#/sa/classes/Pickup */
declare class Pickup {
    constructor(handle: number);
    /** Creates a pickup with the given model and type
    *
    * https://library.sannybuilder.com/#/sa?q=0213 */
    static Create(modelId: int, pickupType: int, x: float, y: float, z: float): Pickup;
    /** Creates an asset pickup for an asset which can be bought
    *
    * https://library.sannybuilder.com/#/sa?q=0518 */
    static CreateForSaleProperty(x: float, y: float, z: float, price: int, message: string): Pickup;
    static CreateHorseshoe(x: float, y: float, z: float): Pickup;
    /** Creates an asset icon for an asset that is not for sale
    *
    * https://library.sannybuilder.com/#/sa?q=0517 */
    static CreateLockedProperty(x: float, y: float, z: float, message: string): Pickup;
    /** Creates a money pickup with the specified cash value
    *
    * https://library.sannybuilder.com/#/sa?q=02E1 */
    static CreateMoney(x: float, y: float, z: float, cashAmount: int, permanent: boolean): Pickup;
    static CreateOyster(x: float, y: float, z: float): Pickup;
    /** Creates an asset revenue pickup
    *
    * https://library.sannybuilder.com/#/sa?q=04A6 */
    static CreateProtection(x: float, y: float, z: float, revenueLimit: int, revenueRate: int): Pickup;
    static CreateSnapshot(x: float, y: float, z: float): Pickup;
    /** Creates a weapon pickup, giving the player the specified amount of ammo when they pick it up
    *
    * https://library.sannybuilder.com/#/sa?q=032B */
    static CreateWithAmmo(modelId: int, pickupType: int, ammo: int, x: float, y: float, z: float): Pickup;
    /** Returns true if the handle is a valid pickup handle
    *
    * https://library.sannybuilder.com/#/sa?q=09D1 */
    static DoesExist(handle: int): boolean;
    /** Returns the X, Y and Z coordinates of the pickup
    *
    * https://library.sannybuilder.com/#/sa?q=065B */
    getCoordinates(x: float, y: float, z: float): void;
    /** Returns true if specified pickup has been collected
    *
    * https://library.sannybuilder.com/#/sa?q=0214 */
    hasBeenCollected(): boolean;
    /** Destroys the specified pickup, freeing game memory
    *
    * https://library.sannybuilder.com/#/sa?q=0215 */
    remove(): void;
    updateMoneyPerDay(value: int): void;
}
/** 
 * 
 * https://library.sannybuilder.com/#/sa/classes/Player */
declare class Player {
    constructor(handle: number);
    /** Creates a player at the specified location
    *
    * https://library.sannybuilder.com/#/sa?q=0053 */
    static Create(modelId: int, x: float, y: float, z: float): Player;
    /** Returns true if the handle is an invalid player handle or the player is dead (wasted)
    *
    * https://library.sannybuilder.com/#/sa?q=0117 */
    static IsDead(handle: int): boolean;
    static MakeGangDisappear(): void;
    static MakeGangReappear(): void;
    /** Restores the players clothes stored with 0793
    *
    * https://library.sannybuilder.com/#/sa?q=0794 */
    static RestoreClothesState(): void;
    static SetWeaponLockOnTarget(): void;
    /** Stores the players current clothes to later be restored with 0794
    *
    * https://library.sannybuilder.com/#/sa?q=0793 */
    static StoreClothesState(): void;
    /** Detonates all satchel charges and car bombs planted by the player
    *
    * https://library.sannybuilder.com/#/sa?q=09D9 */
    static UseDetonator(): void;
    /** Adds to the player's money
    *
    * https://library.sannybuilder.com/#/sa?q=0109 */
    addScore(money: int): void;
    /** Sets the player's wanted level
    *
    * https://library.sannybuilder.com/#/sa?q=010D */
    alterWantedLevel(wantedLevel: int): void;
    /** Sets the player's wanted level if the specified level is higher than the current one
    *
    * https://library.sannybuilder.com/#/sa?q=010E */
    alterWantedLevelNoDrop(wantedLevel: int): void;
    /** Applies brakes to the player's car
    *
    * https://library.sannybuilder.com/#/sa?q=0221 */
    applyBrakesToCar(state: boolean): void;
    /** Rebuilds the player model, applying any required texture changes
    *
    * https://library.sannybuilder.com/#/sa?q=070D */
    buildModel(): void;
    /** Returns true if the player can move
    *
    * https://library.sannybuilder.com/#/sa?q=03EE */
    canStartMission(): boolean;
    /** Resets the status of the last model the player has shot
    *
    * https://library.sannybuilder.com/#/sa?q=0A3B */
    clearLastBuildingModelShot(): void;
    /** Clears the player's wanted level
    *
    * https://library.sannybuilder.com/#/sa?q=0110 */
    clearWantedLevel(): void;
    /** Removes the specified player
    *
    * https://library.sannybuilder.com/#/sa?q=06DF */
    delete(): void;
    disableSprint(state: boolean): void;
    /** Sets the amount of ammo a player has during a driveby
    *
    * https://library.sannybuilder.com/#/sa?q=0563 */
    ensureHasDriveByWeapon(ammo: int): void;
    forceInteriorLighting(state: boolean): void;
    /** Gets the character handle for the specified player
    *
    * https://library.sannybuilder.com/#/sa?q=01F5 */
    getChar(): Char;
    getCharIsTargeting(): boolean;
    /** Gets the players current town ID
    *
    * https://library.sannybuilder.com/#/sa?q=0842 */
    getCityIsIn(): int;
    getClothesItem(bodyPart: int): {
        textureHash: int;
        modelHash: int;
    };
    getGroup(): Group;
    getMaxArmor(): int;
    /** Returns the number of times the player has destroyed a specific model
    *
    * https://library.sannybuilder.com/#/sa?q=0298 */
    getNumOfModelsKilled(modelId: int): int;
    /** Returns the number of peds killed by the player since the last reset (0297)
    *
    * https://library.sannybuilder.com/#/sa?q=0806 */
    getTotalNumberOfPedsKilled(): int;
    /** Returns the stats of the most recent wheelie or stoppie attempt
    *
    * https://library.sannybuilder.com/#/sa?q=04FC */
    getWheelieStats(): {
        twoWheelsTime: int;
        twoWheelsDistance: float;
        wheelieTime: int;
        wheelieDistance: float;
        stoppieTime: int;
        stoppieDistance: float;
    };
    giveClothes(textureHash: int, modelHash: int, bodyPart: int): void;
    /** Sets the players clothing
    *
    * https://library.sannybuilder.com/#/sa?q=087B */
    giveClothesOutsideShop(textureName: string, modelName: string, bodyPart: int): void;
    /** Increases the players armor by the specified amount
    *
    * https://library.sannybuilder.com/#/sa?q=055F */
    increaseMaxArmor(value: int): void;
    /** Increases the players maximum health by the specified amount
    *
    * https://library.sannybuilder.com/#/sa?q=055E */
    increaseMaxHealth(value: int): void;
    /** Returns true if the heading has finished being applied, as started by 0858
    *
    * https://library.sannybuilder.com/#/sa?q=0861 */
    isAttachedHeadingAchieved(): boolean;
    /** Returns true if the player is climbing
    *
    * https://library.sannybuilder.com/#/sa?q=0A29 */
    isClimbing(): boolean;
    /** Returns true if the player control hasn't been disabled using 01B4
    *
    * https://library.sannybuilder.com/#/sa?q=09E7 */
    isControlOn(): boolean;
    /** Returns true if the player is in the specified zone
    *
    * https://library.sannybuilder.com/#/sa?q=0583 */
    isInInfoZone(infoZone: string): boolean;
    /** Returns true if the player is controlling a remote-control vehicle
    *
    * https://library.sannybuilder.com/#/sa?q=0241 */
    isInRemoteMode(): boolean;
    /** Returns true if the player's last shot model is the model specified
    *
    * https://library.sannybuilder.com/#/sa?q=0A3A */
    isLastBuildingModelShot(modelId: int): boolean;
    /** Returns true if the player is performing a stoppie
    *
    * https://library.sannybuilder.com/#/sa?q=07F2 */
    isPerformingStoppie(): boolean;
    isPerformingWheelie(): boolean;
    /** Returns true if the player hasn't been wasted or busted (the player is still playing)
    *
    * https://library.sannybuilder.com/#/sa?q=0256 */
    isPlaying(): boolean;
    /** Returns true if the player is honking the horn in a car
    *
    * https://library.sannybuilder.com/#/sa?q=0122 */
    isPressingHorn(): boolean;
    /** Returns true if the player's money is over the specified value
    *
    * https://library.sannybuilder.com/#/sa?q=010A */
    isScoreGreater(money: int): boolean;
    /** Returns true if the specified player is aiming at anything using autoaim
    *
    * https://library.sannybuilder.com/#/sa?q=068C */
    isTargetingAnything(): boolean;
    /** Returns true if the player is aiming at the specified character
    *
    * https://library.sannybuilder.com/#/sa?q=0457 */
    isTargettingChar(handle: Char): boolean;
    /** Returns true if the player is aiming at the specified object
    *
    * https://library.sannybuilder.com/#/sa?q=0458 */
    isTargettingObject(handle: ScriptObject): boolean;
    /** Returns true if player is using a jetpack
    *
    * https://library.sannybuilder.com/#/sa?q=0A0C */
    isUsingJetpack(): boolean;
    /** Returns true if the player's wanted level is over the specified value
    *
    * https://library.sannybuilder.com/#/sa?q=010F */
    isWantedLevelGreater(wantedLevel: int): boolean;
    /** Returns true if the player's bodypart has the specified model (0784 or 087B) 
    *
    * https://library.sannybuilder.com/#/sa?q=0500 */
    isWearing(modelName: string, bodyPart: int): boolean;
    /** Makes the player immune to fire
    *
    * https://library.sannybuilder.com/#/sa?q=055D */
    makeFireProof(state: boolean): void;
    /** Makes the player safe, putting the character in a safe location
    *
    * https://library.sannybuilder.com/#/sa?q=03EF */
    makeSafeForCutscene(): void;
    /** Resets the count of how many times the player has destroyed a certain model
    *
    * https://library.sannybuilder.com/#/sa?q=0297 */
    resetNumOfModelsKilled(): void;
    /** Sets the players driveby mode
    *
    * https://library.sannybuilder.com/#/sa?q=0501 */
    setCanDoDriveBy(state: boolean): void;
    /** Sets whether player's control is enabled
    *
    * https://library.sannybuilder.com/#/sa?q=01B4 */
    setControl(state: boolean): void;
    /** Makes the camera start moving around in a swirling motion with the specified intensity as if drunk
    *
    * https://library.sannybuilder.com/#/sa?q=052C */
    setDrunkenness(intensity: int): void;
    /** Defines whether the player have to reload their gun
    *
    * https://library.sannybuilder.com/#/sa?q=0331 */
    setFastReload(state: boolean): void;
    /** Sets whether the player loses the cash when gets wasted (works once)
    *
    * https://library.sannybuilder.com/#/sa?q=0414 */
    setFreeHealthCare(state: boolean): void;
    setGroupRecruitment(state: boolean): void;
    /** Controls the players ability to tell their group to wait and automatically orders any group members to continue following
    *
    * https://library.sannybuilder.com/#/sa?q=0A20 */
    setGroupToFollowAlways(state: boolean): void;
    /** Sets whether the player's group stops following the player, even if the player uses the "group follow" button
    *
    * https://library.sannybuilder.com/#/sa?q=0A31 */
    setGroupToFollowNever(state: boolean): void;
    /** Sets the view angle for the player attached to an object or vehicle
    *
    * https://library.sannybuilder.com/#/sa?q=0858 */
    setHeadingForAttached(heading: float, rotationSpeed: float): void;
    /** Sets whether cops should ignore the player regardless of wanted level
    *
    * https://library.sannybuilder.com/#/sa?q=01F7 */
    setIgnorePolice(state: boolean): void;
    /** Changes the player to use the specified model
    *
    * https://library.sannybuilder.com/#/sa?q=09C7 */
    setModel(modelId: int): void;
    /** Sets the players mood, affecting the dialogue spoken by the player
    *
    * https://library.sannybuilder.com/#/sa?q=04E3 */
    setMood(mood: int, time: int): void;
    /** Defines whether the player can run fast forever
    *
    * https://library.sannybuilder.com/#/sa?q=0330 */
    setNeverGetsTired(state: boolean): void;
    /** Returns the player's money
    *
    * https://library.sannybuilder.com/#/sa?q=010B */
    storeScore(): int;
    /** Returns the player's current wanted level
    *
    * https://library.sannybuilder.com/#/sa?q=01C0 */
    storeWantedLevel(): int;
    /** Removes the players Goggles and disables night/heat vision
    *
    * https://library.sannybuilder.com/#/sa?q=09EB */
    takeOffGoggles(animate: boolean): void;
}
/** 
 * 
 * https://library.sannybuilder.com/#/sa/classes/Rc */
interface Rc {
    /** Returns the players radio-controlled vehicle
    *
    * https://library.sannybuilder.com/#/sa?q=0484 */
    GetCar(player: Player): Car;
    /** Puts the player in control of a remote-control vehicle
    *
    * https://library.sannybuilder.com/#/sa?q=046E */
    GiveModelToPlayer(handle: Player, x: float, y: float, z: float, angle: float, modelId: int): void;
    /** Exits remote-control mode
    *
    * https://library.sannybuilder.com/#/sa?q=04DB */
    RemoveBuggy(): void;
    /** Enables a remote-control vehicle detonation
    *
    * https://library.sannybuilder.com/#/sa?q=048A */
    SetEnableDetonate(state: boolean): void;
    /** Sets whether RC Bandits detonate on contact with the wheels of any four-wheeled vehicles
    *
    * https://library.sannybuilder.com/#/sa?q=04D6 */
    SetEnableDetonateOnContact(state: boolean): void;
    /** Puts the specified player in control of a remote-control vehicle
    *
    * https://library.sannybuilder.com/#/sa?q=0715 */
    TakeCar(player: Player, vehicle: Car): void;
}
declare var Rc: Rc
/** 
 * 
 * https://library.sannybuilder.com/#/sa/classes/Restart */
interface Restart {
    /** Adds a hospital restart, which is where the player will spawn after death (wasted) if the point is closer than any other hospital restart
    *
    * https://library.sannybuilder.com/#/sa?q=016C */
    AddHospital(x: float, y: float, z: float, heading: float, townId: int): void;
    /** Adds a police restart, which is where the player will spawn after being arrested (busted) if the point is closer than any other police restart
    *
    * https://library.sannybuilder.com/#/sa?q=016D */
    AddPolice(x: float, y: float, z: float, heading: float, townId: int): void;
    /** Stops the player from spawning at the override location (016E)
    *
    * https://library.sannybuilder.com/#/sa?q=01F6 */
    CancelOverride(): void;
    /** Forces this location to be the next respawn location
    *
    * https://library.sannybuilder.com/#/sa?q=016E */
    OverrideNext(x: float, y: float, z: float, heading: float): void;
    SetExtraHospitalRestartPoint(x: float, y: float, z: float, radius: float, heading: float): void;
    SetExtraPoliceStationRestartPoint(x: float, y: float, z: float, radius: float, heading: float): void;
    /** Overrides the respawn point
    *
    * https://library.sannybuilder.com/#/sa?q=09FF */
    SetRespawnPointForDurationOfMission(x: float, y: float, z: float): void;
}
declare var Restart: Restart
/** 
 * 
 * https://library.sannybuilder.com/#/sa/classes/ScriptFire */
declare class ScriptFire {
    constructor(handle: number);
    /** Creates a script fire on the vehicle
    *
    * https://library.sannybuilder.com/#/sa?q=0325 */
    static CreateCarFire(vehicle: Car): ScriptFire;
    /** Creates a script fire on the character
    *
    * https://library.sannybuilder.com/#/sa?q=0326 */
    static CreateCharFire(char: Char): ScriptFire;
    /** Creates a fire at the specified coordinates
    *
    * https://library.sannybuilder.com/#/sa?q=02CF */
    static Start(x: float, y: float, z: float, propagation: int, size: int): ScriptFire;
    /** Returns true if the handle is a valid script fire handle
    *
    * https://library.sannybuilder.com/#/sa?q=0973 */
    static DoesExist(handle: int): boolean;
    /** Gets the coordinates of the fire
    *
    * https://library.sannybuilder.com/#/sa?q=06F5 */
    getCoords(x: float, y: float, z: float): void;
    /** Returns true if the script fire has been put out
    *
    * https://library.sannybuilder.com/#/sa?q=02D0 */
    isExtinguished(): boolean;
    /** Removes the script fire
    *
    * https://library.sannybuilder.com/#/sa?q=02D1 */
    remove(): void;
}
/** 
 * 
 * https://library.sannybuilder.com/#/sa/classes/ScriptObject */
declare class ScriptObject {
    constructor(handle: number);
    /** Creates an object at the specified location, with the specified model
    *
    * https://library.sannybuilder.com/#/sa?q=0107 */
    static Create(modelId: int, x: float, y: float, z: float): ScriptObject;
    /** Creates an object without offset at the location
    *
    * https://library.sannybuilder.com/#/sa?q=029B */
    static CreateNoOffset(modelId: int, x: float, y: float, z: float): ScriptObject;
    /** Returns true if the handle is a valid object handle
    *
    * https://library.sannybuilder.com/#/sa?q=03CA */
    static DoesExist(handle: int): boolean;
    /** Sets the object's rotation velocity from the center of its body
    *
    * https://library.sannybuilder.com/#/sa?q=05A1 */
    addToRotationVelocity(x: float, y: float, z: float): void;
    /** Adds the given vector to the object's velocity (0381)
    *
    * https://library.sannybuilder.com/#/sa?q=038C */
    addToVelocity(x: float, y: float, z: float): void;
    /** Sets the object's velocity
    *
    * https://library.sannybuilder.com/#/sa?q=05A7 */
    addVelocityRelative(x: float, y: float, z: float): void;
    attachToCar(handle: Car, xOffset: float, yOffset: float, zOffset: float, xRotation: float, yRotation: float, zRotation: float): void;
    attachToChar(handle: Char, xOffset: float, yOffset: float, zOffset: float, xRotation: float, yRotation: float, zRotation: float): void;
    attachToObject(handle: ScriptObject, xOffset: float, yOffset: float, zOffset: float, xRotation: float, yRotation: float, zRotation: float): void;
    /** Smashes the object to pieces
    *
    * https://library.sannybuilder.com/#/sa?q=0723 */
    break(intensity: int): void;
    /** Clears the object's last damaging weapon ID
    *
    * https://library.sannybuilder.com/#/sa?q=0900 */
    clearLastWeaponDamage(): void;
    /** Sets which LOD object should show when the object is being viewed from far away
    *
    * https://library.sannybuilder.com/#/sa?q=0827 */
    connectLods(lodObject: ScriptObject): void;
    /** Destroys the object, freeing game memory
    *
    * https://library.sannybuilder.com/#/sa?q=0108 */
    delete(): void;
    detach(x: float, y: float, z: float, collisionDetection: boolean): void;
    /** Returns true if the object's model is the model specified
    *
    * https://library.sannybuilder.com/#/sa?q=09CC */
    doesHaveThisModel(modelId: int): boolean;
    /** Removes the object from the mission cleanup list, preventing it from being deleted when the mission ends
    *
    * https://library.sannybuilder.com/#/sa?q=01C7 */
    dontRemove(): void;
    /** Sets whether the object attracts spawned peds to interact with it
    *
    * https://library.sannybuilder.com/#/sa?q=0A0A */
    enableDisabledAttractors(state: boolean): void;
    /** Keeps the object in the games memory
    *
    * https://library.sannybuilder.com/#/sa?q=0550 */
    freezePosition(state: boolean): void;
    /** Gets the current progress of the object's animation
    *
    * https://library.sannybuilder.com/#/sa?q=0839 */
    getAnimCurrentTime(animationName: string): float;
    /** Returns the object's coordinates
    *
    * https://library.sannybuilder.com/#/sa?q=01BB */
    getCoordinates(): {
        x: float;
        y: float;
        z: float;
    };
    /** Returns the object's heading (z-angle)
    *
    * https://library.sannybuilder.com/#/sa?q=0176 */
    getHeading(): float;
    getHealth(health: int): void;
    getLevelDesignCoords(nth: int): {
        x: float;
        y: float;
        z: float;
    };
    /** Returns the object's mass
    *
    * https://library.sannybuilder.com/#/sa?q=0907 */
    getMass(mass: float): void;
    /** Returns the object's model index
    *
    * https://library.sannybuilder.com/#/sa?q=0984 */
    getModel(model: int): void;
    /** Returns the object's coordinates with an offset
    *
    * https://library.sannybuilder.com/#/sa?q=0400 */
    getOffsetInWorldCoords(xOffset: float, yOffset: float, zOffset: float): {
        x: float;
        y: float;
        z: float;
    };
    /** Gets the object's quaternion
    *
    * https://library.sannybuilder.com/#/sa?q=07C3 */
    getQuaternion(x: float, y: float, z: float, w: float): void;
    getRopeHeight(): float;
    getRotationVelocity(): {
        x: float;
        y: float;
        z: float;
    };
    /** Gets the speed of the object
    *
    * https://library.sannybuilder.com/#/sa?q=05A8 */
    getSpeed(speed: float): void;
    /** Returns the object's turn mass
    *
    * https://library.sannybuilder.com/#/sa?q=0909 */
    getTurnMass(turnMass: float): void;
    /** Returns the object's X, Y, and Z velocity
    *
    * https://library.sannybuilder.com/#/sa?q=059F */
    getVelocity(): {
        x: float;
        y: float;
        z: float;
    };
    grabEntityOnRope(): {
        vehicle: Car;
        char: Char;
        object: ScriptObject;
    };
    /** Returns true if the object is damaged
    *
    * https://library.sannybuilder.com/#/sa?q=0366 */
    hasBeenDamaged(): boolean;
    /** Returns true if the object has been damaged by the specified weapon or damage type
    *
    * https://library.sannybuilder.com/#/sa?q=08FF */
    hasBeenDamagedByWeapon(weaponType: int): boolean;
    /** Returns true if the object has been photographed
    *
    * https://library.sannybuilder.com/#/sa?q=0833 */
    hasBeenPhotographed(): boolean;
    /** Returns true if the object has been made moveable by the 0392
    *
    * https://library.sannybuilder.com/#/sa?q=095B */
    hasBeenUprooted(): boolean;
    /** Returns true if the object has collided
    *
    * https://library.sannybuilder.com/#/sa?q=04DA */
    hasCollidedWithAnything(): boolean;
    isAttached(): boolean;
    isInAngledArea2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, angle: float, drawSphere: boolean): boolean;
    isInAngledArea3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, angle: float, drawSphere: boolean): boolean;
    /** Returns true if object is in the specified area
    *
    * https://library.sannybuilder.com/#/sa?q=04E9 */
    isInArea2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, drawSphere: boolean): boolean;
    /** Returns true if the object is in the specified area
    *
    * https://library.sannybuilder.com/#/sa?q=04EA */
    isInArea3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, drawSphere: boolean): boolean;
    /** Returns true if the object is in water
    *
    * https://library.sannybuilder.com/#/sa?q=04E7 */
    isInWater(): boolean;
    /** Appears to return true if something had entered the object's position since it was created or its position was changed
    *
    * https://library.sannybuilder.com/#/sa?q=09FC */
    isIntersectingWorld(): boolean;
    /** Returns true if the object is visible
    *
    * https://library.sannybuilder.com/#/sa?q=02CC */
    isOnScreen(): boolean;
    /** Returns true if the object is playing the specified animation
    *
    * https://library.sannybuilder.com/#/sa?q=0837 */
    isPlayingAnim(animationName: string): boolean;
    /** Returns true if the object is not moving
    *
    * https://library.sannybuilder.com/#/sa?q=05A3 */
    isStatic(): boolean;
    /** Returns true if the object is within the external script trigger radius
    *
    * https://library.sannybuilder.com/#/sa?q=0977 */
    isWithinBrainActivationRange(): boolean;
    /** Returns true if the object is near the specified coordinates
    *
    * https://library.sannybuilder.com/#/sa?q=04E5 */
    locate2D(x: float, y: float, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the object is near the specified point
    *
    * https://library.sannybuilder.com/#/sa?q=04E6 */
    locate3D(x: float, y: float, z: float, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Sets whether the door object is locked at its current rotation and allows it to be pushed open by entities once
    *
    * https://library.sannybuilder.com/#/sa?q=0905 */
    lockDoor(state: boolean): void;
    /** Sets whether the object can be targeted (auto-aimed) or not
    *
    * https://library.sannybuilder.com/#/sa?q=035D */
    makeTargetable(state: boolean): void;
    /** Allows the object to be deleted by the game if necessary, and also removes it from the mission cleanup list, if applicable
    *
    * https://library.sannybuilder.com/#/sa?q=01C4 */
    markAsNoLongerNeeded(): void;
    /** Places the object at an offset from the car
    *
    * https://library.sannybuilder.com/#/sa?q=035C */
    placeRelativeToCar(vehicle: Car, xOffset: float, yOffset: float, zOffset: float): void;
    /** Plays an object animation
    *
    * https://library.sannybuilder.com/#/sa?q=075A */
    playAnim(animationName: string, animationFile: string, framedelta: float, lockF: boolean, loop: boolean): void;
    releaseEntityFromRope(): void;
    /** Fades the object out of existence, freeing game memory
    *
    * https://library.sannybuilder.com/#/sa?q=09A2 */
    removeElegantly(): void;
    /** Rotates the object from one angle to another, optionally accounting for a collision during the rotation
    *
    * https://library.sannybuilder.com/#/sa?q=034D */
    rotate(fromAngle: float, toAngle: float, collisionCheck: boolean): boolean;
    /** Sets the progress of an animation, with 0
    *
    * https://library.sannybuilder.com/#/sa?q=083A */
    setAnimCurrentTime(animationName: string, time: float): void;
    /** Sets the object's animation speed
    *
    * https://library.sannybuilder.com/#/sa?q=0836 */
    setAnimSpeed(animationName: string, speed: float): void;
    /** Sets the visibility of the object to the specified interior
    *
    * https://library.sannybuilder.com/#/sa?q=0566 */
    setAreaVisible(areaId: int): void;
    /** Sets whether the object can be picked up and carried
    *
    * https://library.sannybuilder.com/#/sa?q=08E9 */
    setAsStealable(state: boolean): void;
    /** Sets the object's collision detection
    *
    * https://library.sannybuilder.com/#/sa?q=0382 */
    setCollision(state: boolean): void;
    /** Sets whether the object can be destroyed or not
    *
    * https://library.sannybuilder.com/#/sa?q=07F7 */
    setCollisionDamageEffect(state: boolean): void;
    /** Puts the object at the specified location
    *
    * https://library.sannybuilder.com/#/sa?q=01BC */
    setCoordinates(x: float, y: float, z: float): void;
    /** Sets the object's coordinates without affecting the rotation
    *
    * https://library.sannybuilder.com/#/sa?q=0815 */
    setCoordinatesAndVelocity(x: float, y: float, z: float): void;
    /** Sets the specified object to always draw on top of other objects
    *
    * https://library.sannybuilder.com/#/sa?q=0418 */
    setDrawLast(state: boolean): void;
    /** Makes the object moveable
    *
    * https://library.sannybuilder.com/#/sa?q=0392 */
    setDynamic(state: boolean): void;
    /** Sets the object's heading (z-angle)
    *
    * https://library.sannybuilder.com/#/sa?q=0177 */
    setHeading(heading: float): void;
    setHealth(health: int): void;
    /** Sets the object's mass
    *
    * https://library.sannybuilder.com/#/sa?q=0906 */
    setMass(mass: float): void;
    /** Makes the object damageable only by the player
    *
    * https://library.sannybuilder.com/#/sa?q=0875 */
    setOnlyDamagedByPlayer(state: boolean): void;
    /** Sets what immunities the object has
    *
    * https://library.sannybuilder.com/#/sa?q=09CA */
    setProofs(bulletProof: boolean, fireProof: boolean, explosionProof: boolean, collisionProof: boolean, meleeProof: boolean): void;
    /** Sets the object's quaternion
    *
    * https://library.sannybuilder.com/#/sa?q=07C4 */
    setQuaternion(x: float, y: float, z: float, w: float): void;
    /** Enables the use of collision checking for the object
    *
    * https://library.sannybuilder.com/#/sa?q=04D9 */
    setRecordsCollisions(state: boolean): void;
    /** Makes the object look like it has been burnt
    *
    * https://library.sannybuilder.com/#/sa?q=0654 */
    setRenderScorched(state: boolean): void;
    setRopeHeight(height: float): void;
    /** Sets the object rotation along X, Y and Z axis
    *
    * https://library.sannybuilder.com/#/sa?q=0453 */
    setRotation(x: float, y: float, z: float): void;
    /** Sets the object's rotation velocity with frame sync applied?
    *
    * https://library.sannybuilder.com/#/sa?q=05A2 */
    setRotationVelocity(x: float, y: float, z: float): void;
    /** Sets the scale of the object
    *
    * https://library.sannybuilder.com/#/sa?q=08D2 */
    setScale(scale: float): void;
    /** Sets the object's turn mass
    *
    * https://library.sannybuilder.com/#/sa?q=0908 */
    setTurnMass(turnMass: float): void;
    /** Sets the object's velocity
    *
    * https://library.sannybuilder.com/#/sa?q=0381 */
    setVelocity(xSpeed: float, ySpeed: float, zSpeed: float): void;
    /** Sets whether the object is visible
    *
    * https://library.sannybuilder.com/#/sa?q=0750 */
    setVisible(state: boolean): void;
    /** Returns true if the object has finished moving
    *
    * https://library.sannybuilder.com/#/sa?q=034E */
    slide(fromX: float, fromY: float, fromZ: float, xSpeed: float, ySpeed: float, zSpeed: float, collisionCheck: boolean): boolean;
    /** Makes the specified car have no collision with the specified object
    *
    * https://library.sannybuilder.com/#/sa?q=050E */
    sortOutCollisionWithCar(handle: Car): void;
    /** Sets whether the object can be picked up with the magnocrane
    *
    * https://library.sannybuilder.com/#/sa?q=0916 */
    winchCanPickUp(state: boolean): void;
}
/** 
 * 
 * https://library.sannybuilder.com/#/sa/classes/Searchlight */
declare class Searchlight {
    constructor(handle: number);
    static Create(x: float, y: float, z: float, xPoint: float, yPoint: float, zPoint: float, radius: float, radiusPoint: float): Searchlight;
    /** Creates a searchlight-styled light cone on a car with the specified offset and points to a certain point
    *
    * https://library.sannybuilder.com/#/sa?q=06C1 */
    static CreateOnVehicle(vehicle: Car, xOffset: float, yOffset: float, zOffset: float, xPoint: float, yPoint: float, zPoint: float, pointRadius: float, radius: float): Searchlight;
    /** Returns true if the handle is a valid searchlight handle
    *
    * https://library.sannybuilder.com/#/sa?q=06B3 */
    static DoesExist(handle: int): boolean;
    /** Attaches the searchlight to the specified objects
    *
    * https://library.sannybuilder.com/#/sa?q=06CA */
    attachToObject(spotTower: ScriptObject, spotHousing: ScriptObject, spotBulb: ScriptObject, xOffset: float, yOffset: float, zOffset: float): void;
    delete(): void;
    /** Returns true if the searchlight has spotted the actor
    *
    * https://library.sannybuilder.com/#/sa?q=06B7 */
    isCharIn(handle: Char): boolean;
    /** Returns true if the searchlights light is on the vehicle
    *
    * https://library.sannybuilder.com/#/sa?q=06C0 */
    isVehicleIn(handle: Car): boolean;
    /** Makes the specified searchlight travel between the two specified points with the specified speed
    *
    * https://library.sannybuilder.com/#/sa?q=06B4 */
    moveBetweenCoords(fromX: float, fromY: float, fromZ: float, toX: float, toY: float, toZ: float, speed: float): void;
    /** Makes the searchlight follow the specified actor
    *
    * https://library.sannybuilder.com/#/sa?q=06B6 */
    pointAtChar(handle: Char, speed: float): void;
    /** Makes the searchlight target move/travel to the specified coords
    *
    * https://library.sannybuilder.com/#/sa?q=06B5 */
    pointAtCoord(x: float, y: float, z: float, speed: float): void;
    pointAtVehicle(handle: Car, speed: float): void;
    setClipIfColliding(state: boolean): void;
    /** Sets whether the searchlight shows a shadow effect on the surface it hits
    *
    * https://library.sannybuilder.com/#/sa?q=0A02 */
    switchOnGround(state: boolean): void;
}
/** 
 * 
 * https://library.sannybuilder.com/#/sa/classes/Sequence */
declare class Sequence {
    constructor(handle: number);
    /** Begins a task sequence
    *
    * https://library.sannybuilder.com/#/sa?q=0615 */
    static Open(): Sequence;
    /** Clears the task sequence
    *
    * https://library.sannybuilder.com/#/sa?q=061B */
    clear(): void;
    /** Ends the task sequence
    *
    * https://library.sannybuilder.com/#/sa?q=0616 */
    close(): void;
    /** Sets whether the task sequence repeats continuously
    *
    * https://library.sannybuilder.com/#/sa?q=0643 */
    setToRepeat(state: boolean): void;
}
/** 
 * 
 * https://library.sannybuilder.com/#/sa/classes/Shopping */
interface Shopping {
    AddPriceModifier(itemId: int, modifier: int): void;
    /** Charges the player for the purchase of the item and in many cases, automatically gives the item to the player
    *
    * https://library.sannybuilder.com/#/sa?q=0790 */
    BuyItem(itemId: int): void;
    /** Releases the loaded shopping data
    *
    * https://library.sannybuilder.com/#/sa?q=087C */
    ClearLoaded(): void;
    GetExtraInfo(itemId: int, flag: int): int;
    /** Returns an identifier for an item associated with the shopping data entry
    *
    * https://library.sannybuilder.com/#/sa?q=0760 */
    GetItem(nth: int): int;
    /** Returns the name of currently loaded subsection in shopping
    *
    * https://library.sannybuilder.com/#/sa?q=07B0 */
    GetLoaded(): string;
    GetNameOfItem(itemId: int): string;
    GetNumberOfItems(): int;
    GetPriceOfItem(itemId: int): int;
    /** Returns true if the shopping item has been bought
    *
    * https://library.sannybuilder.com/#/sa?q=0942 */
    HasPlayerBoughtItem(itemId: int): boolean;
    Load(name: string): void;
    LoadPrices(sectionName: string): void;
    RemovePriceModifier(itemId: int): void;
}
declare var Shopping: Shopping
/** 
 * 
 * https://library.sannybuilder.com/#/sa/classes/Skip */
interface Skip {
    Clear(): void;
    /** Returns true if the trip skip created with 0A35 has finished teleporting the vehicle and is ready to allow the script to fade in
    *
    * https://library.sannybuilder.com/#/sa?q=0A36 */
    IsWaitingForScriptToFadeIn(): boolean;
    /** Fades out the screen and teleports the player to the specified coordinates and angle
    *
    * https://library.sannybuilder.com/#/sa?q=0950 */
    SetUp(x: float, y: float, z: float, heading: float): void;
    /** Fades the screen out and teleports the player to the specified coordinates and angle
    *
    * https://library.sannybuilder.com/#/sa?q=09AF */
    SetUpAfterMission(x: float, y: float, z: float, heading: float): void;
    /** Teleports the player to the specified coordinates and sets the specified angle when in the specified car
    *
    * https://library.sannybuilder.com/#/sa?q=09E0 */
    SetUpForSpecificVehicle(x: float, y: float, z: float, heading: float, handle: Car): void;
    /** Teleports the player to the specified coordinates and sets the specified angle with the screen fading in when in the specified car
    *
    * https://library.sannybuilder.com/#/sa?q=0A35 */
    SetUpForVehicleFinishedByScript(x: float, y: float, z: float, heading: float, vehicle: Car): void;
}
declare var Skip: Skip
/** 
 * 
 * https://library.sannybuilder.com/#/sa/classes/Sound */
interface Sound {
    /** Plays a sound with the specified ID at the location
    *
    * https://library.sannybuilder.com/#/sa?q=018C */
    AddOneOffSound(x: float, y: float, z: float, soundId: int): void;
    /** Stops the sound
    *
    * https://library.sannybuilder.com/#/sa?q=018E */
    remove(): void;
}
declare var Sound: Sound
/** 
 * 
 * https://library.sannybuilder.com/#/sa/classes/Sphere */
declare class Sphere {
    constructor(handle: number);
    /** Creates a static sphere at the location, with the specified radius
    *
    * https://library.sannybuilder.com/#/sa?q=03BC */
    static Create(x: float, y: float, z: float, radius: float): Sphere;
    /** Displays a red cylinder sphere
    *
    * https://library.sannybuilder.com/#/sa?q=03A1 */
    static Draw(x: float, y: float, z: float, radius: float): void;
    /** Destroys a static sphere
    *
    * https://library.sannybuilder.com/#/sa?q=03BD */
    remove(): void;
}
/** 
 * 
 * https://library.sannybuilder.com/#/sa/classes/Stat */
interface Stat {
    AwardPlayerMissionRespect(value: int): void;
    /** Decreases the stat by the value given
    *
    * https://library.sannybuilder.com/#/sa?q=0626 */
    DecrementFloat(statId: int, value: float): void;
    /** Decreases the stat by the value given
    *
    * https://library.sannybuilder.com/#/sa?q=0625 */
    DecrementInt(statId: int, value: int): void;
    /** Gets the number of spraytags painted over
    *
    * https://library.sannybuilder.com/#/sa?q=08E1 */
    FindNumberTagsTagged(): int;
    /** Returns the value of the specified float stat
    *
    * https://library.sannybuilder.com/#/sa?q=0653 */
    GetFloat(statId: int): float;
    /** Returns the value of the specified integer stat
    *
    * https://library.sannybuilder.com/#/sa?q=0652 */
    GetInt(statId: int): int;
    /** Gets the progress of completion as a percentage
    *
    * https://library.sannybuilder.com/#/sa?q=058C */
    GetProgressPercentage(): float;
    GetTerritoryUnderControlPercentage(): int;
    /** Increases the stat by the value specified
    *
    * https://library.sannybuilder.com/#/sa?q=0624 */
    IncrementFloat(statId: int, value: float): void;
    /** Adds the value to the specified stat
    *
    * https://library.sannybuilder.com/#/sa?q=0A1F */
    IncrementFloatNoMessage(statId: int, value: float): void;
    /** Increases the stat by the value given
    *
    * https://library.sannybuilder.com/#/sa?q=0623 */
    IncrementInt(statId: int, value: int): void;
    IncrementIntNoMessage(statId: int, value: int): void;
    /** Increases the progress made stat by the specified amount
    *
    * https://library.sannybuilder.com/#/sa?q=030C */
    PlayerMadeProgress(progress: int): void;
    /** Updates the race best position
    *
    * https://library.sannybuilder.com/#/sa?q=0582 */
    RegisterBestPosition(statId: int, position: int): void;
    /** Updates the stat if the value is lower than the current stat value
    *
    * https://library.sannybuilder.com/#/sa?q=042E */
    RegisterFastestTime(statId: int, value: int): void;
    /** Sets the specified stat to the specified value, if the specified value is greater than the current stat value
    *
    * https://library.sannybuilder.com/#/sa?q=0628 */
    RegisterFloat(statId: int, value: float): void;
    /** Updates the specified integer stat
    *
    * https://library.sannybuilder.com/#/sa?q=0627 */
    RegisterInt(statId: int, value: int): void;
    /** Increments the number of mission attempts stat by 1
    *
    * https://library.sannybuilder.com/#/sa?q=0317 */
    RegisterMissionGiven(): void;
    /** Sets the GXT of the last mission passed
    *
    * https://library.sannybuilder.com/#/sa?q=0318 */
    RegisterMissionPassed(key: string): void;
    /** Sets the latest odd job mission passed
    *
    * https://library.sannybuilder.com/#/sa?q=0595 */
    RegisterOddjobMissionPassed(): void;
    /** Sets the stat to the specified value
    *
    * https://library.sannybuilder.com/#/sa?q=062A */
    SetFloat(statId: int, value: float): void;
    /** Sets the stat to the specified value
    *
    * https://library.sannybuilder.com/#/sa?q=0629 */
    SetInt(statId: int, value: int): void;
    SetMissionRespectTotal(totalRespect: int): void;
    /** Sets the maximum progress the player can reach
    *
    * https://library.sannybuilder.com/#/sa?q=030D */
    SetProgressTotal(maxProgress: int): void;
    /** Sets the total number of missions that can be completed
    *
    * https://library.sannybuilder.com/#/sa?q=042C */
    SetTotalNumberOfMissions(numMissions: int): void;
    /** Displays help boxes indicating that the players stats have been updated
    *
    * https://library.sannybuilder.com/#/sa?q=08F8 */
    ShowUpdateStats(state: boolean): void;
}
declare var Stat: Stat
/** 
 * 
 * https://library.sannybuilder.com/#/sa/classes/StreamedScript */
interface StreamedScript {
    /** Makes the game start an ambient script when the player is nearby an object of the specified model
    *
    * https://library.sannybuilder.com/#/sa?q=0929 */
    AllocateToObject(id: int, modelId: int, priority: int, radius: float, type: int): void;
    /** Makes the game start an ambient script when the player is nearby a character of the specified model
    *
    * https://library.sannybuilder.com/#/sa?q=0928 */
    AllocateToRandomPed(id: int, modelId: int, priority: int): void;
    /** Gets the number of instances of a script
    *
    * https://library.sannybuilder.com/#/sa?q=0926 */
    GetNumberOfInstances(id: int): int;
    /** Returns true if the ambient script has finished loading (08A9)
    *
    * https://library.sannybuilder.com/#/sa?q=08AB */
    HasLoaded(id: int): boolean;
    /** Ends the specified script brain
    *
    * https://library.sannybuilder.com/#/sa?q=090F */
    MarkAsNoLongerNeeded(id: int): void;
    /** Registers a script brain for the specified ped attractor
    *
    * https://library.sannybuilder.com/#/sa?q=0884 */
    RegisterAttractorScriptBrainForCodeUse(id: int, _p2: string): void;
    /** Sets the name for the script brain, enabling it to be initiated by the EXE
    *
    * https://library.sannybuilder.com/#/sa?q=07D3 */
    RegisterScriptBrainForCodeUse(id: int, _p2: string): void;
    /** Releases the ambient script with the specified ID, freeing game memory
    *
    * https://library.sannybuilder.com/#/sa?q=0910 */
    Remove(id: int): void;
    /** Runs the ambient script with the specified ID
    *
    * https://library.sannybuilder.com/#/sa?q=0913 */
    StartNew(id: int, ...args: number[]): void;
    /** Loads the ambient script with the specified ID from the script.img file
    *
    * https://library.sannybuilder.com/#/sa?q=08A9 */
    Stream(id: int): void;
}
declare var StreamedScript: StreamedScript
/** 
 * 
 * https://library.sannybuilder.com/#/sa/classes/Streaming */
interface Streaming {
    /** Gets the current interior ID
    *
    * https://library.sannybuilder.com/#/sa?q=077E */
    GetAreaVisible(): int;
    GetModelDimensions(modelId: int): {
        leftBottomBackX: float;
        leftBottomBackY: float;
        leftBottomBackZ: float;
        rightTopFrontX: float;
        rightTopFrontY: float;
        rightTopFrontZ: float;
    };
    GetNameOfVehicleModel(modelId: int): string;
    GetRandomCarModelInMemory(_p1: boolean): {
        modelId: int;
        class: int;
    };
    /** Returns a slot the upgrade model is for
    *
    * https://library.sannybuilder.com/#/sa?q=06E6 */
    GetVehicleModType(modelId: int): int;
    /** Returns true if the specified IFP file is loaded
    *
    * https://library.sannybuilder.com/#/sa?q=04EE */
    HasAnimationLoaded(animationFile: string): boolean;
    /** Returns true if the car recording has finished loading
    *
    * https://library.sannybuilder.com/#/sa?q=07C1 */
    HasCarRecordingBeenLoaded(pathId: int): boolean;
    /** Returns true if the model is available for creation
    *
    * https://library.sannybuilder.com/#/sa?q=0248 */
    HasModelLoaded(modelId: int): boolean;
    /** Returns true if the special character's model (023C) is available for creation
    *
    * https://library.sannybuilder.com/#/sa?q=023D */
    HasSpecialCharacterLoaded(slotId: int): boolean;
    /** Returns true if the vehicle upgrade model has loaded
    *
    * https://library.sannybuilder.com/#/sa?q=06EA */
    HasVehicleModLoaded(modelId: int): boolean;
    /** Returns true if the specified model exists in the loaded 
    *
    * https://library.sannybuilder.com/#/sa?q=0488 */
    IsModelAvailable(modelId: int): boolean;
    /** Returns true if a file for the model exists
    *
    * https://library.sannybuilder.com/#/sa?q=07DE */
    IsModelInCdimage(modeId: int): boolean;
    /** Returns true if the model is the model of a boat
    *
    * https://library.sannybuilder.com/#/sa?q=081E */
    IsThisModelABoat(modelId: int): boolean;
    /** Returns true if a valid car model is passed
    *
    * https://library.sannybuilder.com/#/sa?q=0A01 */
    IsThisModelACar(modelId: int): boolean;
    /** Returns true if the model is the model of a helicopter
    *
    * https://library.sannybuilder.com/#/sa?q=0820 */
    IsThisModelAHeli(modelId: int): boolean;
    /** Returns true if the model is the model of a plane
    *
    * https://library.sannybuilder.com/#/sa?q=081F */
    IsThisModelAPlane(modelId: int): boolean;
    /** Loads all models immediately, faster than 038B
    *
    * https://library.sannybuilder.com/#/sa?q=0A8C */
    LoadAllModels(): void;
    /** Loads any requested models (0247 or 0353) synchronously
    *
    * https://library.sannybuilder.com/#/sa?q=038B */
    LoadAllModelsNow(): void;
    /** Starts loading a specific location, just like if the player was there, removing LOD textures
    *
    * https://library.sannybuilder.com/#/sa?q=03CB */
    LoadScene(x: float, y: float, z: float): void;
    LoadSceneInDirection(x: float, y: float, z: float, heading: float): void;
    /** Requests a special character's model to be loaded into the specified slot
    *
    * https://library.sannybuilder.com/#/sa?q=023C */
    LoadSpecialCharacter(slotId: int, modelName: string): void;
    /** Releases the specified model, freeing game memory
    *
    * https://library.sannybuilder.com/#/sa?q=0249 */
    MarkModelAsNoLongerNeeded(modelId: int): void;
    /** Marks the vehicle upgrade model as no longer needed, allowing it to be unloaded by the streamer
    *
    * https://library.sannybuilder.com/#/sa?q=06EB */
    MarkVehicleModAsNoLongerNeeded(modelId: int): void;
    /** Releases the specified IFP file, freeing game memory
    *
    * https://library.sannybuilder.com/#/sa?q=04EF */
    RemoveAnimation(animationFile: string): void;
    /** Unloads the car recording
    *
    * https://library.sannybuilder.com/#/sa?q=0873 */
    RemoveCarRecording(pathId: int): void;
    RemoveIpl(iplName: string): void;
    RemoveIplDiscreetly(iplName: string): void;
    /** Loads the specified IFP File
    *
    * https://library.sannybuilder.com/#/sa?q=04ED */
    RequestAnimation(animationFile: string): void;
    /** Loads the specified car recording
    *
    * https://library.sannybuilder.com/#/sa?q=07C0 */
    RequestCarRecording(pathId: int): void;
    /** Reloads the area at the specified coordinates
    *
    * https://library.sannybuilder.com/#/sa?q=04E4 */
    RequestCollision(x: float, y: float): void;
    RequestIpl(iplName: string): void;
    /** Requests a new model to load
    *
    * https://library.sannybuilder.com/#/sa?q=0247 */
    RequestModel(modelId: int): void;
    /** Loads the upgrade model and any associated models
    *
    * https://library.sannybuilder.com/#/sa?q=06E9 */
    RequestVehicleMod(modelId: int): void;
    /** Sets the visibility of an interior area
    *
    * https://library.sannybuilder.com/#/sa?q=04BB */
    SetAreaVisible(areaId: int): void;
    /** Sets the streaming of additional models like peds, cars, and maps
    *
    * https://library.sannybuilder.com/#/sa?q=03AF */
    Switch(state: boolean): void;
    /** Releases the special character (023C), freeing game memory
    *
    * https://library.sannybuilder.com/#/sa?q=0296 */
    UnloadSpecialCharacter(slotId: int): void;
}
declare var Streaming: Streaming
/** 
 * 
 * https://library.sannybuilder.com/#/sa/classes/StuckCarCheck */
interface StuckCarCheck {
    /** Adds the vehicle to the stuck cars array
    *
    * https://library.sannybuilder.com/#/sa?q=03CC */
    Add(vehicle: Car, speed: float, duration: int): void;
    /** Attempts to automatically restore vehicles that get stuck or flipped
    *
    * https://library.sannybuilder.com/#/sa?q=072F */
    AddWithWarp(vehicle: Car, speed: float, duration: int, stuck: boolean, flipped: boolean, warp: boolean, pathId: int): void;
    /** Returns true if the car is stuck
    *
    * https://library.sannybuilder.com/#/sa?q=03CE */
    IsCarStuck(vehicle: Car): boolean;
    /** Removes the vehicle from the stuck cars array
    *
    * https://library.sannybuilder.com/#/sa?q=03CD */
    Remove(vehicle: Car): void;
}
declare var StuckCarCheck: StuckCarCheck
/** 
 * 
 * https://library.sannybuilder.com/#/sa/classes/Task */
interface Task {
    /** Rotates a character to the specified angle
    *
    * https://library.sannybuilder.com/#/sa?q=05D4 */
    AchieveHeading(handle: Char, heading: float): void;
    /** Makes a character aim at another character
    *
    * https://library.sannybuilder.com/#/sa?q=0635 */
    AimGunAtChar(char: Char, target: Char, time: int): void;
    /** Makes the character aim at the specified coordinates
    *
    * https://library.sannybuilder.com/#/sa?q=0667 */
    AimGunAtCoord(handle: Char, x: float, y: float, z: float, time: int): void;
    CarDriveToCoord(driver: Char, vehicle: Car, x: float, y: float, z: float, speed: float, _p7: int, _p8: int, drivingStyle: int): void;
    /** Makes the character drive around aimlessly in a vehicle
    *
    * https://library.sannybuilder.com/#/sa?q=05D2 */
    CarDriveWander(char: Char, vehicle: Car, speed: float, drivingStyle: int): void;
    /** Sets the car's current mission with various parameters
    *
    * https://library.sannybuilder.com/#/sa?q=06E1 */
    CarMission(char: Char, vehicle: Car, targetVehicle: Car, missionId: int, cruiseSpeed: float, drivingStyle: int): void;
    CarTempAction(char: Char, vehicle: Car, actionId: int, time: int): void;
    /** Makes the character attempt to arrest another character
    *
    * https://library.sannybuilder.com/#/sa?q=06E4 */
    CharArrestChar(char: Char, target: Char): void;
    CharSlideToCoord(handle: Char, x: float, y: float, z: float, angle: float, radius: float): void;
    /** Makes a character go to the specified point and play an anim
    *
    * https://library.sannybuilder.com/#/sa?q=0804 */
    CharSlideToCoordAndPlayAnim(handle: Char, x: float, y: float, z: float, angle: float, radius: float, animationName: string, animationFile: string, frameDelta: float, loop: boolean, lockX: boolean, lockY: boolean, lockF: boolean, time: int): void;
    /** Makes the character chat with another character
    *
    * https://library.sannybuilder.com/#/sa?q=0677 */
    ChatWithChar(char: Char, other: Char, leadSpeaker: boolean, _p4: int): void;
    /** Makes the character jump and climb on an object
    *
    * https://library.sannybuilder.com/#/sa?q=078F */
    Climb(handle: Char, flag: boolean): void;
    ComplexPickupObject(char: Char, object: ScriptObject): void;
    /** Makes the actor stumble backwards with their arms in front of their face as if he is backing away from something in fear
    *
    * https://library.sannybuilder.com/#/sa?q=05C3 */
    Cower(handle: Char): void;
    /** Kills the character
    *
    * https://library.sannybuilder.com/#/sa?q=0762 */
    Dead(handle: Char): void;
    /** Makes the character attack a vehicle
    *
    * https://library.sannybuilder.com/#/sa?q=0672 */
    DestroyCar(char: Char, vehicle: Car): void;
    /** Kills the character
    *
    * https://library.sannybuilder.com/#/sa?q=05BE */
    Die(handle: Char): void;
    /** Makes the actor perform an animation similarly to 0605
    *
    * https://library.sannybuilder.com/#/sa?q=0829 */
    DieNamedAnim(handle: Char, animationName: string, animationFile: string, frameDelta: float, time: int): void;
    /** Makes the character perform a dive in the specified direction
    *
    * https://library.sannybuilder.com/#/sa?q=0673 */
    DiveAndGetUp(handle: Char, directionX: float, directionY: float, timeOnGround: int): void;
    DiveFromAttachmentAndGetUp(handle: Char, time: int): void;
    DriveBy(handle: Char, targetChar: Char, targetVehicle: Car, x: float, y: float, z: float, radius: float, style: int, rightHandCarSeat: boolean, fireRate: int): void;
    DrivePointRoute(char: Char, vehicle: Car, speed: int): void;
    DrivePointRouteAdvanced(char: Char, vehicle: Car, speed: float, _p4: int, _p5: int, _p6: int): void;
    /** Makes a character duck with their arms over head
    *
    * https://library.sannybuilder.com/#/sa?q=05C5 */
    Duck(handle: Char, time: int): void;
    /** Makes a character approach the car and occupy the driver seat
    *
    * https://library.sannybuilder.com/#/sa?q=05CB */
    EnterCarAsDriver(char: Char, vehicle: Car, time: int): void;
    /** Makes a character approach the car and occupy the specified passenger seat
    *
    * https://library.sannybuilder.com/#/sa?q=05CA */
    EnterCarAsPassenger(char: Char, vehicle: Car, seatId: int, time: int): void;
    /** Makes actor fall to the ground and stay there for the specified time
    *
    * https://library.sannybuilder.com/#/sa?q=05BB */
    FallAndGetUp(handle: Char, fallDown: boolean, timeOnGround: int): void;
    /** Makes the character run away from another character
    *
    * https://library.sannybuilder.com/#/sa?q=05DB */
    FleeChar(handle: Char, threat: Char, radius: float, time: int): void;
    FleeCharAnyMeans(handle: Char, threat: Char, runDistance: float, time: int, changeCourse: boolean, _p6: int, _p7: int, radius: float): void;
    /** Makes the character run away from a point, scared and often screaming
    *
    * https://library.sannybuilder.com/#/sa?q=05DA */
    FleePoint(handle: Char, x: float, y: float, z: float, radius: float, time: int): void;
    /** Makes one actor follow another
    *
    * https://library.sannybuilder.com/#/sa?q=0850 */
    FollowFootsteps(handle: Char, target: Char): void;
    /** Makes the character go to the specified coordinates
    *
    * https://library.sannybuilder.com/#/sa?q=05F5 */
    FollowPathNodesToCoord(handle: Char, x: float, y: float, z: float, walkSpeed: int, time: int): void;
    /** Makes the specified character run in panic to the specified position
    *
    * https://library.sannybuilder.com/#/sa?q=0A2E */
    FollowPathNodesToCoordWithRadius(handle: Char, x: float, y: float, z: float, mode: int, time: int, radius: float): void;
    /** Assigns the character to the patrol path
    *
    * https://library.sannybuilder.com/#/sa?q=0817 */
    FollowPatrolRoute(handle: Char, walkSpeed: int, routeMode: int): void;
    /** Makes the character follow the path route
    *
    * https://library.sannybuilder.com/#/sa?q=05D8 */
    FollowPointRoute(handle: Char, walkSpeed: int, flag: int): void;
    /** Makes the character walk to the specified coordinates
    *
    * https://library.sannybuilder.com/#/sa?q=05D3 */
    GoStraightToCoord(handle: Char, x: float, y: float, z: float, moveState: int, time: int): void;
    /** Assigns the character the task of getting to the specified coordinates
    *
    * https://library.sannybuilder.com/#/sa?q=0603 */
    GoToCoordAnyMeans(char: Char, x: float, y: float, z: float, walkSpeed: int, vehicle: Car): void;
    GoToCoordWhileAiming(char: Char, x: float, y: float, z: float, mode: int, turnRadius: float, stopRadius: float, target: Char, xOffset: float, yOffset: float, zOffset: float): void;
    /** Makes a character go to the location while shooting at another character
    *
    * https://library.sannybuilder.com/#/sa?q=0637 */
    GoToCoordWhileShooting(char: Char, x: float, y: float, z: float, mode: int, turnRadius: float, stopRadius: float, target: Char): void;
    /** Makes the character go to an object
    *
    * https://library.sannybuilder.com/#/sa?q=06E2 */
    GoToObject(char: Char, object: ScriptObject, time: int, radius: float): void;
    GotoCar(char: Char, vehicle: Car, time: int, radius: float): void;
    /** Approaches the character from any direction within the specified radius
    *
    * https://library.sannybuilder.com/#/sa?q=05D9 */
    GotoChar(walking: Char, target: Char, time: int, radius: float): void;
    GotoCharAiming(handle: Char, target: Char, radiusFrom: float, radiusTo: float): void;
    /** Approaches the char at the specified offset, specified by the radius and angle
    *
    * https://library.sannybuilder.com/#/sa?q=06A8 */
    GotoCharOffset(char: Char, target: Char, time: int, radius: float, heading: float): void;
    /** Makes a character greet another character with a handshake
    *
    * https://library.sannybuilder.com/#/sa?q=0823 */
    GreetPartner(handle: Char, partner: Char, _p3: float, _p4: int): void;
    /** Makes a character face the other character and make a gesture
    *
    * https://library.sannybuilder.com/#/sa?q=0A1D */
    HandGesture(handle: Char, target: Char): void;
    /** Makes the actor put their hands in the air
    *
    * https://library.sannybuilder.com/#/sa?q=05C4 */
    HandsUp(handle: Char, time: int): void;
    Jetpack(handle: Char): void;
    /** Makes the actor perform a jump
    *
    * https://library.sannybuilder.com/#/sa?q=05BC */
    Jump(handle: Char, state: boolean): void;
    /** Makes a character attack another character on foot
    *
    * https://library.sannybuilder.com/#/sa?q=05E2 */
    KillCharOnFoot(killer: Char, target: Char): void;
    /** Makes the character attack the specified character
    *
    * https://library.sannybuilder.com/#/sa?q=07A5 */
    KillCharOnFootTimed(handle: Char, target: Char, time: int): void;
    KillCharOnFootWhileDucking(char: Char, target: Char, flags: int, actionDelay: int, actionChance: int): void;
    /** Makes the character stay near their current position
    *
    * https://library.sannybuilder.com/#/sa?q=085B */
    KindaStayInSamePlace(handle: Char, state: boolean): void;
    /** Makes the actor exit the car, if he is in one
    *
    * https://library.sannybuilder.com/#/sa?q=0633 */
    LeaveAnyCar(handle: Char): void;
    /** Makes the character exit the specified vehicle, if they are currently in it
    *
    * https://library.sannybuilder.com/#/sa?q=05CD */
    LeaveCar(char: Char, vehicle: Car): void;
    /** Makes the character exit the vehicle and flee to the specified position
    *
    * https://library.sannybuilder.com/#/sa?q=05CF */
    LeaveCarAndFlee(char: Char, vehicle: Car, x: float, y: float, z: float): void;
    /** Makes the character jump out of the vehicle while it is in motion
    *
    * https://library.sannybuilder.com/#/sa?q=0622 */
    LeaveCarImmediately(char: Char, vehicle: Car): void;
    /** Makes a character look out ahead
    *
    * https://library.sannybuilder.com/#/sa?q=05C9 */
    LookAbout(handle: Char, time: int): void;
    /** Makes the character look at another character
    *
    * https://library.sannybuilder.com/#/sa?q=05BF */
    LookAtChar(observer: Char, target: Char, time: int): void;
    /** Makes the actor look at the specified coordinates
    *
    * https://library.sannybuilder.com/#/sa?q=06A9 */
    LookAtCoord(handle: Char, x: float, y: float, z: float, time: int): void;
    /** Makes the character look at an object
    *
    * https://library.sannybuilder.com/#/sa?q=0655 */
    LookAtObject(char: Char, object: ScriptObject, time: int): void;
    /** Makes the actor look at the specified vehicle
    *
    * https://library.sannybuilder.com/#/sa?q=05C0 */
    LookAtVehicle(char: Char, vehicle: Car, time: int): void;
    /** Makes the character pause for the specified amount of time
    *
    * https://library.sannybuilder.com/#/sa?q=05B9 */
    Pause(handle: Char, time: int): void;
    /** Attaches the specified actor to an object with the optional addition of having it perform an animation
    *
    * https://library.sannybuilder.com/#/sa?q=070A */
    PickUpObject(char: Char, object: ScriptObject, xOffset: float, yOffset: float, zOffset: float, boneId: int, _p7: int, animationName: string, animationFile: string, time: int): void;
    PickUpSecondObject(char: Char, object: ScriptObject, xOffset: float, yOffset: float, zOffset: float, boneId: int, _p7: int, animationName: string, animationFile: string, time: int): void;
    /** Makes the character perform an animation
    *
    * https://library.sannybuilder.com/#/sa?q=0605 */
    PlayAnim(handle: Char, animationName: string, animationFile: string, frameDelta: float, loop: boolean, lockX: boolean, lockY: boolean, lockF: boolean, time: int): void;
    /** Makes the character perform an animation
    *
    * https://library.sannybuilder.com/#/sa?q=0812 */
    PlayAnimNonInterruptable(handle: Char, animationName: string, animationFile: string, frameDelta: float, loop: boolean, lockX: boolean, lockY: boolean, lockF: boolean, time: int): void;
    /** Makes a character play an animation that affects only the upper half of their body
    *
    * https://library.sannybuilder.com/#/sa?q=0A1A */
    PlayAnimSecondary(handle: Char, animationFile: string, animationName: string, frameDelta: float, loop: boolean, lockX: boolean, lockY: boolean, lockF: boolean, time: int): void;
    /** Makes the actor perform an animation
    *
    * https://library.sannybuilder.com/#/sa?q=088A */
    PlayAnimWithFlags(handle: Char, animationName: string, animationFile: string, frameDelta: float, loop: boolean, lockX: boolean, lockY: boolean, lockF: boolean, time: int, disableForce: boolean, disableLockZ: boolean): void;
    /** Makes the character say a phrase from the specified audio table
    *
    * https://library.sannybuilder.com/#/sa?q=05C1 */
    Say(handle: Char, phraseId: int): void;
    /** Makes a character scratch their head while looking around
    *
    * https://library.sannybuilder.com/#/sa?q=05C8 */
    ScratchHead(handle: Char): void;
    /** Sets the decision maker used by the specified actor
    *
    * https://library.sannybuilder.com/#/sa?q=07BC */
    SetCharDecisionMaker(char: Char, decisionMakerChar: DecisionMakerChar): void;
    SetIgnoreWeaponRangeFlag(handle: Char, state: boolean): void;
    /** Makes the actor lift their hand up in the air angrily
    *
    * https://library.sannybuilder.com/#/sa?q=05C2 */
    ShakeFist(handle: Char): void;
    ShootAtChar(handle: Char, target: Char, time: int): void;
    /** Makes the character turn round and shoot at the specified coordinates
    *
    * https://library.sannybuilder.com/#/sa?q=0668 */
    ShootAtCoord(handle: Char, x: float, y: float, z: float, time: int): void;
    /** Makes the character move to the seat on the right
    *
    * https://library.sannybuilder.com/#/sa?q=0676 */
    ShuffleToNextCarSeat(char: Char, vehicle: Car): void;
    /** Makes the actor sit down for the specified amount of time
    *
    * https://library.sannybuilder.com/#/sa?q=06B0 */
    SitDown(handle: Char, time: int): void;
    /** Makes the character flee from another character
    *
    * https://library.sannybuilder.com/#/sa?q=05DD */
    SmartFleeChar(handle: Char, threat: Char, radius: float, time: int): void;
    /** Makes the character run away from the specified coordinates
    *
    * https://library.sannybuilder.com/#/sa?q=05DC */
    SmartFleePoint(handle: Char, x: float, y: float, z: float, radius: float, time: int): void;
    /** Makes the character stand still
    *
    * https://library.sannybuilder.com/#/sa?q=05BA */
    StandStill(handle: Char, time: int): void;
    /** Makes the character stay in the same place
    *
    * https://library.sannybuilder.com/#/sa?q=0638 */
    StayInSamePlace(handle: Char, state: boolean): void;
    SwimToCoord(handle: Char, x: float, y: float, z: float): void;
    /** Makes the actor stop to regain breath
    *
    * https://library.sannybuilder.com/#/sa?q=05BD */
    Tired(handle: Char, time: int): void;
    /** Makes the character crouch
    *
    * https://library.sannybuilder.com/#/sa?q=04EB */
    ToggleDuck(handle: Char, state: boolean): void;
    TogglePedThreatScanner(handle: Char, _p2: boolean, _p3: boolean, _p4: boolean): void;
    /** Makes a character face another character
    *
    * https://library.sannybuilder.com/#/sa?q=0639 */
    TurnCharToFaceChar(char: Char, target: Char): void;
    TurnCharToFaceCoord(handle: Char, x: float, y: float, z: float): void;
    /** Makes a character use an ATM machine
    *
    * https://library.sannybuilder.com/#/sa?q=05C7 */
    UseAtm(handle: Char): void;
    UseAttractor(char: Char, attractor: Attractor): void;
    UseClosestMapAttractor(handle: Char, radius: float, modelId: int, fromX: float, fromY: float, fromZ: float, name: string): void;
    /** Makes a character pull out a cellphone, answer it, and hold it to their ear
    *
    * https://library.sannybuilder.com/#/sa?q=0729 */
    UseMobilePhone(handle: Char, start: boolean): void;
    /** Makes the character walk alongside the specified character
    *
    * https://library.sannybuilder.com/#/sa?q=0859 */
    WalkAlongsideChar(handle: Char, target: Char): void;
    /** Makes the character walk around the ped path
    *
    * https://library.sannybuilder.com/#/sa?q=05DE */
    WanderStandard(handle: Char): void;
    /** Warps the character into the specified vehicle's driver seat
    *
    * https://library.sannybuilder.com/#/sa?q=072A */
    WarpCharIntoCarAsDriver(char: Char, vehicle: Car): void;
    WarpCharIntoCarAsPassenger(char: Char, vehicle: Car, seatId: int): void;
    WeaponRoll(handle: Char, direction: boolean): void;
}
declare var Task: Task
/** 
 * 
 * https://library.sannybuilder.com/#/sa/classes/Text */
interface Text {
    AddLabel(dynamicKey: string, text: string): void;
    /** Sets whether the next text is added to the brief in the menu
    *
    * https://library.sannybuilder.com/#/sa?q=09C1 */
    AddNextMessageToPreviousBriefs(state: boolean): void;
    /** Removes the text box from the screen
    *
    * https://library.sannybuilder.com/#/sa?q=03E6 */
    ClearHelp(): void;
    /** Clears all priority text and some styles of big texts
    *
    * https://library.sannybuilder.com/#/sa?q=00BE */
    ClearPrints(): void;
    /** Clears small messages from the screen
    *
    * https://library.sannybuilder.com/#/sa?q=03EB */
    ClearSmallPrints(): void;
    /** Removes the styled text from the screen
    *
    * https://library.sannybuilder.com/#/sa?q=03D6 */
    ClearThisBigPrint(key: string): void;
    /** Removes the priority text from the screen
    *
    * https://library.sannybuilder.com/#/sa?q=03D5 */
    ClearThisPrint(key: string): void;
    /** Removes the print big text with the specified style from the screen
    *
    * https://library.sannybuilder.com/#/sa?q=0A0E */
    ClearThisPrintBigNow(textStyle: int): void;
    /** Draws text at the specified on-screen position
    *
    * https://library.sannybuilder.com/#/sa?q=033E */
    Display(offsetLeft: float, offsetTop: float, key: string): void;
    DisplayClamped(offsetLeft: float, offsetTop: float, key: string, scale: float): void;
    DisplayMissions(offsetLeft: float, offsetTop: float, key: string): void;
    /** Overrides the text block set by 09BD
    *
    * https://library.sannybuilder.com/#/sa?q=0A44 */
    DisplayNonMinigameHelpMessages(state: boolean): void;
    /** Draws text with 2 numbers
    *
    * https://library.sannybuilder.com/#/sa?q=045B */
    DisplayWith2Numbers(offsetLeft: float, offsetTop: float, key: string, num1: int, num2: int): void;
    /** Converts the float to two separate numbers to use in a 2-numbered GXT entry, and draws the text
    *
    * https://library.sannybuilder.com/#/sa?q=07FC */
    DisplayWithFloat(leftTopX: float, leftTopY: float, key: string, value: float, precision: int): void;
    /** Draws text with 1 number
    *
    * https://library.sannybuilder.com/#/sa?q=045A */
    DisplayWithNumber(offsetLeft: float, offsetTop: float, key: string, num: int): void;
    DisplayWithNumberClamped(offsetLeft: float, offsetTop: float, key: string, number: int, scale: float): void;
    /** Sets whether the styled text stays on the screen when it fades out
    *
    * https://library.sannybuilder.com/#/sa?q=0A2D */
    DrawOddjobTitleBeforeFade(state: boolean): void;
    /** Sets whether the text stays on the screen when it fades out
    *
    * https://library.sannybuilder.com/#/sa?q=0A2C */
    DrawSubtitlesBeforeFade(state: boolean): void;
    /** Prevents timers and big texts from being hidden if there is another conflicting type of text on screen
    *
    * https://library.sannybuilder.com/#/sa?q=09EE */
    ForceBigMessageAndCounter(state: boolean): void;
    GetLabelString(key: string): string;
    /** Returns true if any help message is being displayed
    *
    * https://library.sannybuilder.com/#/sa?q=08FE */
    IsHelpMessageBeingDisplayed(): boolean;
    /** Returns true if a priority GXT string is displayed on screen
    *
    * https://library.sannybuilder.com/#/sa?q=076F */
    IsMessageBeingDisplayed(): boolean;
    /** Returns true if a help message with the specified GXT entry is being displayed
    *
    * https://library.sannybuilder.com/#/sa?q=0A2A */
    IsThisHelpMessageBeingDisplayed(gxt: string): boolean;
    /** Makes the game use GXT Entries from the specified GXT Table
    *
    * https://library.sannybuilder.com/#/sa?q=054C */
    LoadMissionText(tableName: string): void;
    /** Displays a message positioned on the bottom of the screen for the specified time
    *
    * https://library.sannybuilder.com/#/sa?q=00BB */
    Print(key: string, time: int, flag: int): void;
    /** Displays a styled message for the specified time
    *
    * https://library.sannybuilder.com/#/sa?q=00BA */
    PrintBig(key: string, time: int, style: int): void;
    /** Displays a styled message for the specified time respecting the format of the String entered
    *
    * https://library.sannybuilder.com/#/sa?q=0ACF */
    PrintBigFormatted(text: string, time: int, style: int, ...args: number[]): void;
    /** Displays a low-priority styled message for the specified time
    *
    * https://library.sannybuilder.com/#/sa?q=0217 */
    PrintBigQ(key: string, duration: int, style: int): void;
    PrintBigString(text: string, time: int, style: int): void;
    PrintFormatted(text: string, time: int, ...arg: number[]): void;
    PrintFormattedNow(text: string, time: int, ...arg: number[]): void;
    /** Displays a black text box for a few seconds
    *
    * https://library.sannybuilder.com/#/sa?q=03E5 */
    PrintHelp(key: string): void;
    PrintHelpConditional(key: string, type: int): void;
    PrintHelpConditionalHid(key: string, type: int): void;
    PrintHelpConditionalHidJoypad(key: string, type: int): void;
    PrintHelpConditionalHidKeyboard(key: string, type: int): void;
    PrintHelpConditionalTouch(key: string, type: int): void;
    PrintHelpConditionalTouchAdapted(key: string, type: int): void;
    PrintHelpConditionalTouchAnalog(key: string, type: int): void;
    PrintHelpConditionalTouchClassic(key: string, type: int): void;
    /** Shows a text box which stays on screen until it is removed by another command
    *
    * https://library.sannybuilder.com/#/sa?q=0512 */
    PrintHelpForever(key: string): void;
    PrintHelpForeverConditional(key: string, type: int): void;
    PrintHelpForeverConditionalHid(key: string, type: int): void;
    PrintHelpForeverConditionalHidJoypad(key: string, type: int): void;
    PrintHelpForeverConditionalHidKeyboard(key: string, type: int): void;
    PrintHelpForeverConditionalTouch(key: string, type: int): void;
    PrintHelpForeverConditionalTouchAdapted(key: string, type: int): void;
    PrintHelpForeverConditionalTouchAnalog(key: string, type: int): void;
    PrintHelpForeverConditionalTouchClassic(key: string, type: int): void;
    PrintHelpForeverConditionalTouchDigital(key: string, type: int): void;
    PrintHelpForeverConditionalTouchFlick(key: string, type: int): void;
    /** Shows a text box with one number
    *
    * https://library.sannybuilder.com/#/sa?q=0513 */
    PrintHelpForeverWithNumber(gxt: string, number: int): void;
    /** Displays a black text box for a few seconds respecting the format of the String entered
    *
    * https://library.sannybuilder.com/#/sa?q=0ACE */
    PrintHelpFormatted(text: string, ...args: number[]): void;
    PrintHelpString(text: string): void;
    /** Displays a message positioned on the bottom of the screen for the specified time
    *
    * https://library.sannybuilder.com/#/sa?q=00BC */
    PrintNow(key: string, time: int, flag: int): void;
    /** Displays the text (provided as a string literal or an address) similarly to 00BB
    *
    * https://library.sannybuilder.com/#/sa?q=0ACC */
    PrintString(text: string, time: int): void;
    /** Displays a styled message in which the first string token ~a~ is substituted with the specified text
    *
    * https://library.sannybuilder.com/#/sa?q=0384 */
    PrintStringInStringNow(templateKey: string, replacementKey: string, duration: int, style: int): void;
    PrintStringNow(text: string, time: int): void;
    /** Displays a styled message in which the first two ~1~ tokens are substituted with the specified numbers
    *
    * https://library.sannybuilder.com/#/sa?q=036D */
    PrintWith2NumbersBig(key: string, num1: int, num2: int, duration: int, style: int): void;
    /** Displays a styled message in which the first two ~1~ tokens are substituted with the specified numbers
    *
    * https://library.sannybuilder.com/#/sa?q=02FD */
    PrintWith2NumbersNow(key: string, num1: int, num2: int, duration: int, style: int): void;
    /** Displays a styled message in which the first three ~1~ tokens are substituted with the specified numbers
    *
    * https://library.sannybuilder.com/#/sa?q=02FF */
    PrintWith3Numbers(key: string, num1: int, num2: int, num3: int, duration: int, style: int): void;
    /** Displays a styled message in which the first four ~1~ tokens are substituted with the specified numbers
    *
    * https://library.sannybuilder.com/#/sa?q=0302 */
    PrintWith4Numbers(key: string, num1: int, num2: int, num3: int, num4: int, duration: int, style: int): void;
    /** Displays a styled message in which the first four ~1~ tokens are substituted with the specified numbers
    *
    * https://library.sannybuilder.com/#/sa?q=0303 */
    PrintWith4NumbersNow(key: string, num1: int, num2: int, num3: int, num4: int, duration: int, style: int): void;
    /** Displays a styled message in which the first six ~1~ tokens are substituted with the specified numbers
    *
    * https://library.sannybuilder.com/#/sa?q=0308 */
    PrintWith6Numbers(key: string, num1: int, num2: int, num3: int, num4: int, num5: int, num6: int, duration: int, style: int): void;
    /** Displays a styled message in which the first string token ~1~ is substituted with the specified number
    *
    * https://library.sannybuilder.com/#/sa?q=01E4 */
    PrintWithNumber(key: string, num: int, duration: int, flag: int): void;
    /** Displays a styled message in which the first string token~1~ is substituted with the specified number
    *
    * https://library.sannybuilder.com/#/sa?q=01E3 */
    PrintWithNumberBig(key: string, num: int, duration: int, style: int): void;
    /** Displays a styled message in which the first string token ~1~ is substituted with the specified number
    *
    * https://library.sannybuilder.com/#/sa?q=01E5 */
    PrintWithNumberNow(key: string, num: int, duration: int, flag: int): void;
    RemoveLabel(dynamicKey: string): void;
    ScanString(str: string, format: string, ...args: number[]): string;
    /** Displays the text of the specified GXT entry using San Andreas' area name text style
    *
    * https://library.sannybuilder.com/#/sa?q=0A19 */
    SetAreaName(name: string): void;
    /** Gives the text a background (0346)
    *
    * https://library.sannybuilder.com/#/sa?q=0345 */
    SetBackground(state: boolean): void;
    /** Centers the text
    *
    * https://library.sannybuilder.com/#/sa?q=0342 */
    SetCenter(state: boolean): void;
    /** Sets the line width of the centered text
    *
    * https://library.sannybuilder.com/#/sa?q=0344 */
    SetCenterSize(width: float): void;
    /** Sets the color of the text letters
    *
    * https://library.sannybuilder.com/#/sa?q=0340 */
    SetColor(red: int, green: int, blue: int, alpha: int): void;
    /** Causes the next text to be drawn before the fade is drawn
    *
    * https://library.sannybuilder.com/#/sa?q=03E0 */
    SetDrawBeforeFade(state: boolean): void;
    /** Sets shadow for the current text draw
    *
    * https://library.sannybuilder.com/#/sa?q=060D */
    SetDropshadow(intensity: int, red: int, green: int, blue: int, alpha: int): void;
    /** Adds an outline to the next text drawn using a text draw command
    *
    * https://library.sannybuilder.com/#/sa?q=081C */
    SetEdge(size: int, red: int, green: int, blue: int, alpha: int): void;
    /** Sets the text draw font
    *
    * https://library.sannybuilder.com/#/sa?q=0349 */
    SetFont(font: int): void;
    /** Sets the global width of text boxes displayed on screen
    *
    * https://library.sannybuilder.com/#/sa?q=0989 */
    SetHelpMessageBoxSize(size: int): void;
    /** Sets the text to be drawn justified, which means the text will wrap in order to fill an even rectangle of space
    *
    * https://library.sannybuilder.com/#/sa?q=0341 */
    SetJustify(state: boolean): void;
    /** Overrides the position of the text on screen
    *
    * https://library.sannybuilder.com/#/sa?q=0912 */
    SetMessageFormatting(_p1: boolean, margin: int, width: int): void;
    /** Makes the text size proportionate
    *
    * https://library.sannybuilder.com/#/sa?q=0348 */
    SetProportional(state: boolean): void;
    /** Sets the text draw to be aligned to the right
    *
    * https://library.sannybuilder.com/#/sa?q=03E4 */
    SetRightJustify(state: boolean): void;
    /** Scales the width and height of the text letters
    *
    * https://library.sannybuilder.com/#/sa?q=033F */
    SetScale(widthScale: float, heightScale: float): void;
    /** Sets the line width of the text
    *
    * https://library.sannybuilder.com/#/sa?q=0343 */
    SetWrapX(width: float): void;
    StringFloatFormat(number: float, format: string): string;
    StringFormat(format: string, ...args: number[]): string;
    /** Enables text and texture drawing
    *
    * https://library.sannybuilder.com/#/sa?q=03F0 */
    UseCommands(state: boolean): void;
}
declare var Text: Text
/** 
 * 
 * https://library.sannybuilder.com/#/sa/classes/Train */
declare class Train {
    constructor(handle: number);
    /** Creates a script handled train from a predefined type (the type dictates how long the train is and the varieties of carriages) and sets the direction for the train to head in
    *
    * https://library.sannybuilder.com/#/sa?q=06D8 */
    static Create(type: int, x: float, y: float, z: float, direction: boolean): Train;
    /** Removes the specified script created train
    *
    * https://library.sannybuilder.com/#/sa?q=07BD */
    delete(): void;
    /** Returns true if the train is travelling clockwise, around San Andreas
    *
    * https://library.sannybuilder.com/#/sa?q=09E3 */
    findDirection(): boolean;
    /** Gets the handle of the last carriage (known as the "caboose")
    *
    * https://library.sannybuilder.com/#/sa?q=06DE */
    getCaboose(): Car;
    /** Gets the nth train carriage
    *
    * https://library.sannybuilder.com/#/sa?q=078A */
    getCarriage(number: int): Car;
    /** Returns true if the train has derailed (usually from going too fast)
    *
    * https://library.sannybuilder.com/#/sa?q=0981 */
    hasDerailed(): boolean;
    /** Returns true if the next station is accessible (at the start of the game, railroad blocks prevent the player from travelling to stations whose area is not unlocked)
    *
    * https://library.sannybuilder.com/#/sa?q=0A06 */
    isNextStationAllowed(): boolean;
    /** Removes the specified script created train from the list of trains that the game shouldn't delete
    *
    * https://library.sannybuilder.com/#/sa?q=07BE */
    markAsNoLongerNeeded(): void;
    /** Puts the train on the rails nearest to the specified coordinates
    *
    * https://library.sannybuilder.com/#/sa?q=07C7 */
    setCoordinates(x: float, y: float, z: float): void;
    /** Sets the trains speed
    *
    * https://library.sannybuilder.com/#/sa?q=06DD */
    setCruiseSpeed(speed: float): void;
    /** Sets whether the train should stop at each station it encounters
    *
    * https://library.sannybuilder.com/#/sa?q=09CF */
    setForcedToSlowDown(state: boolean): void;
    /** Sets the trains acceleration
    *
    * https://library.sannybuilder.com/#/sa?q=06DC */
    setSpeed(speed: float): void;
    /** Puts the script created train at the next allowed station
    *
    * https://library.sannybuilder.com/#/sa?q=0A07 */
    skipToNextAllowedStation(): void;
}
/** 
 * 
 * https://library.sannybuilder.com/#/sa/classes/Txd */
interface Txd {
    /** Loads the texture dictionary for use in drawing sprites (038D) on the screen
    *
    * https://library.sannybuilder.com/#/sa?q=0390 */
    LoadDictionary(name: string): void;
    /** Loads a sprite from the most recently loaded texture dictionary (0390)
    *
    * https://library.sannybuilder.com/#/sa?q=038F */
    LoadSprite(memorySlot: int, spriteName: string): void;
    /** Unloads all currently loaded textures (038F), as well as texture dictionaries (0390), freeing game memory
    *
    * https://library.sannybuilder.com/#/sa?q=0391 */
    Remove(): void;
}
declare var Txd: Txd
/** 
 * 
 * https://library.sannybuilder.com/#/sa/classes/User3DMarker */
declare class User3DMarker {
    constructor(handle: number);
    /** Creates a marker similar to the yellow enex markers
    *
    * https://library.sannybuilder.com/#/sa?q=0A40 */
    static Create(x: float, y: float, z: float, color: int): User3DMarker;
    /** Destroys a marker created with 0A40
    *
    * https://library.sannybuilder.com/#/sa?q=0A41 */
    remove(): void;
}
/** 
 * 
 * https://library.sannybuilder.com/#/sa/classes/Weather */
interface Weather {
    /** Forces the game weather to the specified type
    *
    * https://library.sannybuilder.com/#/sa?q=01B5 */
    Force(type: int): void;
    /** Forces the upcoming weather to the specified type
    *
    * https://library.sannybuilder.com/#/sa?q=01B6 */
    ForceNow(type: int): void;
    /** Allows the game to continue its usual weather pattern after using 01B5
    *
    * https://library.sannybuilder.com/#/sa?q=01B7 */
    Release(): void;
    /** Specifies whether the heat haze effect should be enabled in sunny conditions
    *
    * https://library.sannybuilder.com/#/sa?q=08FD */
    SetHeathazeEffect(state: boolean): void;
    /** Sets the current weather ID according to the game clock and the players current town number
    *
    * https://library.sannybuilder.com/#/sa?q=0915 */
    SetToAppropriateTypeNow(): void;
}
declare var Weather: Weather
/** 
 * 
 * https://library.sannybuilder.com/#/sa/classes/Widget */
interface Widget {
    AddButtonFlag(widgetId: int, flag: int): void;
    AddFlag(widgetId: int, flag: int): void;
    /** Adds product items and prices to the store menu interface (0A69)
    *
    * https://library.sannybuilder.com/#/sa?q=0A6A */
    AddShopItem(itemName: string, price: int): void;
    /** Creates a touch-type store menu interface unique to the mobile version of SA
    *
    * https://library.sannybuilder.com/#/sa?q=0A69 */
    CreateShopMenu(menuName: string): void;
    /** Removes a widget icon from the screen (cannot be restored)
    *
    * https://library.sannybuilder.com/#/sa?q=0A6B */
    Delete(widgetId: int): void;
    GetPositionScale(widgetId: int): {
        screenX: float;
        screenY: float;
        scaleX: float;
        scaleY: float;
    };
    GetValue(widgetId: int): float;
    GetValue2(widgetId: int): {
        _p2: float;
        _p3: float;
    };
    /** Returns true if the button widget icon on the screen is double-tapped
    *
    * https://library.sannybuilder.com/#/sa?q=0A53 */
    IsDoubletapped(widgetId: int): boolean;
    /** Returns true if the button widget icon on the screen is pressed and released
    *
    * https://library.sannybuilder.com/#/sa?q=0A52 */
    IsReleased(widgetId: int): boolean;
    /** Returns true if the button widget icon on the screen is swiped
    *
    * https://library.sannybuilder.com/#/sa?q=0A54 */
    IsSwiped(widgetId: int): boolean;
    /** Returns true if the button widget icon on the screen is swiped left
    *
    * https://library.sannybuilder.com/#/sa?q=0A55 */
    IsSwipedLeft(widgetId: int): boolean;
    /** Returns true if the button widget icon on the screen is swiped right
    *
    * https://library.sannybuilder.com/#/sa?q=0A56 */
    IsSwipedRight(widgetId: int): boolean;
    /** Returns true if the button widget icon on the screen is touched
    *
    * https://library.sannybuilder.com/#/sa?q=0A51 */
    IsTouched(widgetId: int): boolean;
    RemoveButtonFlag(widgetId: int, flag: int): void;
    RemoveFlag(widgetId: int, flag: int): void;
    SetEquippedItem(widgetId: int, _p2: int): void;
    SetInfo(widgetId: int, _p2: int, _p3: int, _p4: int, _p5: int, _p6: int, _p7: int, key: string): void;
    SetInfo2(widgetId: int, _p2: int, _p3: int, _p4: int, _p5: int, _p6: int, key: string): void;
    SetSliderRange(widgetId: int, rangeX: float, rangeY: float): void;
    SetTexture(widgetId: int, textureName: int): void;
    SetValue(widgetId: int, _p2: float): void;
    SetValue2(widgetId: int, _p2: float, _p3: float): void;
    SetValue3(widgetId: int, _p2: float, _p3: float, _p4: float): void;
}
declare var Widget: Widget
/** 
 * 
 * https://library.sannybuilder.com/#/sa/classes/World */
interface World {
    /** Returns the handle of a random car with the specified model in the specified 2D area, or -1 otherwise
    *
    * https://library.sannybuilder.com/#/sa?q=0327 */
    GetRandomCarOfTypeInArea(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, modelId: int): Car;
    /** Returns the character using a map attractor with the specified model in the specified area
    *
    * https://library.sannybuilder.com/#/sa?q=091C */
    GetUserOfClosestMapAttractor(x: float, y: float, z: float, radius: float, modelId: int, attractorName: string): Char;
    /** Creates a trigger zone for police to appear during chases
    *
    * https://library.sannybuilder.com/#/sa?q=04F8 */
    AddSetPiece(type: int, fromX: float, fromY: float, toX: float, toY: float, spawnPoliceAAtX: float, spawnPoliceAAtY: float, headedTowardsAAtX: float, headedTowardsAAtY: float, spawnPoliceBAtX: float, spawnPoliceBAtY: float, headedTowardsBAtX: float, headedTowardsBAtY: float): void;
    /** Creates a trigger for a Unique Jump bonus
    *
    * https://library.sannybuilder.com/#/sa?q=0814 */
    AddStuntJump(startX: float, startY: float, startZ: float, startRadiusX: float, startRadiusY: float, startRadiusZ: float, finishX: float, finishY: float, finishZ: float, finishRadiusX: float, finishRadiusY: float, finishRadiusZ: float, cameraX: float, cameraY: float, cameraZ: float, reward: int): void;
    /** Marks all fires as no longer needed, allowing them to disappear
    *
    * https://library.sannybuilder.com/#/sa?q=0986 */
    ClearAllScriptFireFlags(): void;
    /** Removes references to all created roadblocks, freeing game memory
    *
    * https://library.sannybuilder.com/#/sa?q=04C1 */
    ClearAllScriptRoadblocks(): void;
    /** Clears the area, removing all vehicles and pedestrians
    *
    * https://library.sannybuilder.com/#/sa?q=0395 */
    ClearArea(x: float, y: float, z: float, radius: float, clearParticles: boolean): void;
    /** Clears all cars in the specified 3D area
    *
    * https://library.sannybuilder.com/#/sa?q=03BA */
    ClearAreaOfCars(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float): void;
    /** Clears all pedestrians from the given area
    *
    * https://library.sannybuilder.com/#/sa?q=042B */
    ClearAreaOfChars(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float): void;
    /** Clears the extra color of the sky
    *
    * https://library.sannybuilder.com/#/sa?q=04FA */
    ClearExtraColors(withFade: boolean): void;
    /** Creates a flock of birds flying in the specified direction
    *
    * https://library.sannybuilder.com/#/sa?q=0876 */
    CreateBirds(xFrom: float, yFrom: float, zFrom: float, xTo: float, yTo: float, zTo: float, quantity: int, type: int): void;
    /** Creates an emergency service vehicle on the closest road to the specified coordinates
    *
    * https://library.sannybuilder.com/#/sa?q=085A */
    CreateEmergencyServicesCar(model: int, x: float, y: float, z: float): void;
    /** Starts spawning random cars at the specified location
    *
    * https://library.sannybuilder.com/#/sa?q=03C5 */
    CreateRandomCarForCarPark(x: float, y: float, z: float, heading: float): void;
    /** Creates a roadblock in the specified area with the specified type
    *
    * https://library.sannybuilder.com/#/sa?q=04C0 */
    CreateScriptRoadblock(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, type: int): void;
    /** Destroys all trains, including those that are not created by the script
    *
    * https://library.sannybuilder.com/#/sa?q=06DB */
    DeleteAllTrains(): void;
    /** Destroys all script-created trains
    *
    * https://library.sannybuilder.com/#/sa?q=06D9 */
    DeleteMissionTrains(): void;
    /** Disables all entry/exit markers
    *
    * https://library.sannybuilder.com/#/sa?q=08E7 */
    DisableAllEntryExits(state: boolean): void;
    /** Sets whether cops will chase and kill criminals when their task is 'TASK_COMPLEX_KILL_CRIMINAL'
    *
    * https://library.sannybuilder.com/#/sa?q=09D2 */
    EnableAmbientCrime(state: boolean): void;
    /** Switches enex markers used for burglary missions on or off
    *
    * https://library.sannybuilder.com/#/sa?q=09E6 */
    EnableBurglaryHouses(state: boolean): void;
    /** Removes all fires within the specified area
    *
    * https://library.sannybuilder.com/#/sa?q=0980 */
    ExtinguishFireAtPoint(x: float, y: float, z: float, radius: float): void;
    FireSingleBullet(fromX: float, fromY: float, fromZ: float, toX: float, toY: float, toZ: float, energy: int): void;
    /** Returns the town the specified location is within
    *
    * https://library.sannybuilder.com/#/sa?q=07EF */
    GetCityFromCoords(x: float, y: float, z: float): int;
    /** Gets the closest object which can be stolen for burglary missions
    *
    * https://library.sannybuilder.com/#/sa?q=0866 */
    GetClosestStealableObject(x: float, y: float, z: float, radius: float): ScriptObject;
    /** Returns appropriate coordinates for creating a pickup by a dead character
    *
    * https://library.sannybuilder.com/#/sa?q=04A5 */
    GetDeadCharPickupCoords(char: Char): {
        x: float;
        y: float;
        z: float;
    };
    /** Stores the ground position at the location
    *
    * https://library.sannybuilder.com/#/sa?q=02CE */
    GetGroundZFor3DCoord(x: float, y: float, z: float): float;
    GetNearestTagPosition(xCoord: float, yCoord: float, zCoord: float): {
        x: float;
        y: float;
        z: float;
    };
    /** Gets the number of fires within the specified area
    *
    * https://library.sannybuilder.com/#/sa?q=0786 */
    GetNumberOfFiresInArea(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float): int;
    GetNumberOfFiresInRange(x: float, y: float, z: float, radius: float): int;
    /** Stores the coordinates of the nearest car park node in the specified area
    *
    * https://library.sannybuilder.com/#/sa?q=0810 */
    GetParkingNodeInArea(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float): {
        x: float;
        y: float;
        z: float;
    };
    /** Gets the percentage of the number of tags sprayed in the area
    *
    * https://library.sannybuilder.com/#/sa?q=0702 */
    GetPercentageTaggedInArea(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float): int;
    GetRandomCarInSphereNoSave(x: float, y: float, z: float, radius: float, model: int): Car;
    GetRandomCarInSphereNoSaveRecursive(x: float, y: float, z: float, radius: float, findNext: boolean, skipWrecked: boolean): boolean;
    GetRandomCarOfTypeInAngledAreaNoSave(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, angle: float, char: Char): Car;
    /** Loops through the pool of vehicles to retrieve one that matches the specified model in the specified 2D area
    *
    * https://library.sannybuilder.com/#/sa?q=053E */
    GetRandomCarOfTypeInAreaNoSave(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, modelId: int): Car;
    /** Returns the first char in the ped pool within radius of the specified point
    *
    * https://library.sannybuilder.com/#/sa?q=0A3E */
    GetRandomCharInAreaOffsetNoSave(x: float, y: float, z: float, radiusX: float, radiusY: float, radiusZ: float): Char;
    GetRandomCharInSphere(x: float, y: float, z: float, radius: float, civilian: boolean, gang: boolean, criminal: boolean): Char;
    /** Finds the nearest character to the specified point, in the specified radius
    *
    * https://library.sannybuilder.com/#/sa?q=08E5 */
    GetRandomCharInSphereNoBrain(x: float, y: float, z: float, radius: float): Char;
    GetRandomCharInSphereNoSaveRecursive(x: float, y: float, z: float, radius: float, findNext: boolean, skipDead: boolean): boolean;
    /** Loops through the ped pool and returns the first character that is within the specified radius and has the "buys drugs" flag set in peds
    *
    * https://library.sannybuilder.com/#/sa?q=089E */
    GetRandomCharInSphereOnlyDrugsBuyers(x: float, y: float, z: float, radius: float): Char;
    GetRandomObjectInSphereNoSaveRecursive(x: float, y: float, z: float, radius: float, findNext: boolean): boolean;
    /** Gets the level that the character can hear noise at the specified position
    *
    * https://library.sannybuilder.com/#/sa?q=0855 */
    GetSoundLevelAtCoords(handle: Char, x: float, y: float, z: float): float;
    /** Gets the coordinates of the location targeted in the game map
    *
    * https://library.sannybuilder.com/#/sa?q=0AB6 */
    GetTargetCoords(): boolean;
    /** Gets the height of the water at the specified 2D coordinates
    *
    * https://library.sannybuilder.com/#/sa?q=092E */
    GetWaterHeightAtCoords(x: float, y: float, ignoreWaves: boolean): float;
    HasObjectOfTypeBeenSmashed(x: float, y: float, z: float, radius: float, modelId: int): boolean;
    /** Returns true if the pickup at the specified coordinates is available to be picked up
    *
    * https://library.sannybuilder.com/#/sa?q=048C */
    IsAnyPickupAtCoords(x: float, y: float, z: float): boolean;
    /** Returns true if there is anything with the specified properties within the 3D area
    *
    * https://library.sannybuilder.com/#/sa?q=0339 */
    IsAreaOccupied(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, solid: boolean, car: boolean, char: boolean, object: boolean, particle: boolean): boolean;
    IsClosestObjectOfTypeSmashedOrDamaged(x: float, y: float, z: float, radius: float, modelId: int, smashed: boolean, damaged: boolean): boolean;
    /** Returns true if there's any kind of police vehicle in the specified 3D area
    *
    * https://library.sannybuilder.com/#/sa?q=09C3 */
    IsCopVehicleInArea3DNoSave(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float): boolean;
    /** Returns true if there is an explosion of the specified type in the 3D area
    *
    * https://library.sannybuilder.com/#/sa?q=0356 */
    IsExplosionInArea(explosionType: int, leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float): boolean;
    /** Returns true if there's any fire particles within the specified area
    *
    * https://library.sannybuilder.com/#/sa?q=072D */
    IsFlameInAngledArea2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, angle: float, drawSphere: boolean): boolean;
    /** Returns true if there's any flames within the specified area
    *
    * https://library.sannybuilder.com/#/sa?q=072E */
    IsFlameInAngledArea3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, angle: float, drawSphere: boolean): boolean;
    /** Checks if there is something in the range of the two specified points
    *
    * https://library.sannybuilder.com/#/sa?q=06BD */
    IsLineOfSightClear(fromX: float, fromY: float, fromZ: float, toX: float, toY: float, toZ: float, buildings: boolean, cars: boolean, chars: boolean, objects: boolean, particles: boolean): boolean;
    /** Returns true if a money pickup exists near the specified coordinates
    *
    * https://library.sannybuilder.com/#/sa?q=09DA */
    IsMoneyPickupAtCoords(x: float, y: float, z: float): boolean;
    /** Returns true if there is a vehicle in the specified area
    *
    * https://library.sannybuilder.com/#/sa?q=038A */
    IsPointObscuredByAMissionEntity(x: float, y: float, z: float, radiusX: float, radiusY: float, radiusZ: float): boolean;
    /** Returns true if a projectile is in the specified 3D area
    *
    * https://library.sannybuilder.com/#/sa?q=02EE */
    IsProjectileInArea(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float): boolean;
    /** Marks the train as no longer needed by the script, allowing it to be deleted by the game
    *
    * https://library.sannybuilder.com/#/sa?q=06DA */
    MarkMissionTrainsAsNoLongerNeeded(): void;
    /** Removes all script fires (02CF)
    *
    * https://library.sannybuilder.com/#/sa?q=031A */
    RemoveAllScriptFires(): void;
    RemoveOilPuddlesInArea(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float): void;
    /** Enables an increase in the distance that markers hovering above entities can be seen from
    *
    * https://library.sannybuilder.com/#/sa?q=08A8 */
    SetAlwaysDraw3DMarkers(state: boolean): void;
    /** Sets the quantity of traffic that will spawn in the game
    *
    * https://library.sannybuilder.com/#/sa?q=01EB */
    SetCarDensityMultiplier(multiplier: float): void;
    SetCharUsesCollisionClosestObjectOfType(x: float, y: float, z: float, radius: float, modelId: int, solid: boolean, target: Char): void;
    /** This command is like 098E, except it finds the appropriate enex marker via its position instead of its name
    *
    * https://library.sannybuilder.com/#/sa?q=09B4 */
    SetClosestEntryExitFlag(x: float, y: float, radius: float, bitmask: int, state: boolean): void;
    SetCreateRandomCops(state: boolean): void;
    /** Sets whether gang members will spawn
    *
    * https://library.sannybuilder.com/#/sa?q=08EA */
    SetCreateRandomGangMembers(state: boolean): void;
    /** Sets the extra color of the sky
    *
    * https://library.sannybuilder.com/#/sa?q=04F9 */
    SetExtraColors(color: int, fade: boolean): void;
    /** Enables the LS Riots, making smoke appear on houses, random car fires occur, peds stealing things and attacking each other in a frenzy
    *
    * https://library.sannybuilder.com/#/sa?q=06C8 */
    SetLaRiots(state: boolean): void;
    /** Sets whether gangs appear everywhere, like when "Gangs control the streets" cheat is activated
    *
    * https://library.sannybuilder.com/#/sa?q=0983 */
    SetOnlyCreateGangMembers(state: boolean): void;
    /** Sets the quantity of pedestrians to spawn in the game
    *
    * https://library.sannybuilder.com/#/sa?q=03DE */
    SetPedDensityMultiplier(multiplier: float): void;
    /** Creates a pool collision object
    *
    * https://library.sannybuilder.com/#/sa?q=0830 */
    SetPoolTableCoords(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float): void;
    /** Sets the friction/slowdown rate on all rail tracks
    *
    * https://library.sannybuilder.com/#/sa?q=0A45 */
    SetRailtrackResistanceMult(mult: float): void;
    /** Sets whether all tags in the area are sprayed
    *
    * https://library.sannybuilder.com/#/sa?q=0703 */
    SetTagStatusInArea(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, percent: int): void;
    /** Sets the visibility of the object closest to the specified coordinates, matching the specified model
    *
    * https://library.sannybuilder.com/#/sa?q=0363 */
    SetVisibilityOfClosestObjectOfType(x: float, y: float, z: float, radius: float, modelId: int, state: boolean): void;
    /** Creates a vehicle with the model (no pre-loading needed) in front of the player
    *
    * https://library.sannybuilder.com/#/sa?q=0ADD */
    SpawnVehicleByCheating(modelId: int): void;
    /** Swaps a map model with another map model nearest to the center of the search area
    *
    * https://library.sannybuilder.com/#/sa?q=03B6 */
    SwapNearestBuildingModel(x: float, y: float, z: float, radius: float, fromModelId: int, toModelId: int): void;
    /** Locates the enex marker via the specified name and sets whether it is visible and usable
    *
    * https://library.sannybuilder.com/#/sa?q=07FB */
    SwitchEntryExit(interiorName: string, state: boolean): void;
    /** Sets whether the game should render the world or only the cutscene objects
    *
    * https://library.sannybuilder.com/#/sa?q=03B7 */
    SwitchProcessing(state: boolean): void;
    /** Sets whether trains are generated
    *
    * https://library.sannybuilder.com/#/sa?q=06D7 */
    SwitchRandomTrains(state: boolean): void;
}
declare var World: World
/** 
 * 
 * https://library.sannybuilder.com/#/sa/classes/Zone */
interface Zone {
    /** Gets a random character in the specified zone whose pedtype matches the specified values
    *
    * https://library.sannybuilder.com/#/sa?q=02DD */
    GetRandomChar(zone: string, civilian: boolean, gang: boolean, criminalOrProstitute: boolean): Char;
    GetCurrentPopulationZoneType(): int;
    /** Returns the drug dealer density of the specified zone
    *
    * https://library.sannybuilder.com/#/sa?q=076B */
    GetDealerStrength(zone: string): int;
    /** Returns the density of the gang members in the specified zone
    *
    * https://library.sannybuilder.com/#/sa?q=076D */
    GetGangStrength(zone: string, gangId: int): int;
    /** Gets the name of the zone at the specified coordinates
    *
    * https://library.sannybuilder.com/#/sa?q=08F1 */
    GetName(x: float, y: float, z: float): string;
    /** Resets all changes made to the zone info
    *
    * https://library.sannybuilder.com/#/sa?q=08CA */
    InitPopulationSettings(): void;
    /** Sets the total number of drug dealers in the zone
    *
    * https://library.sannybuilder.com/#/sa?q=076A */
    SetDealerStrength(zone: string, strength: int): void;
    /** Causes the players wanted level to be set at 4 when in restricted areas
    *
    * https://library.sannybuilder.com/#/sa?q=0A24 */
    SetDisableMilitaryZones(state: boolean): void;
    /** Sets the zone as the only zone where a turf war can be provoked
    *
    * https://library.sannybuilder.com/#/sa?q=08B3 */
    SetForGangWarsTraining(zone: string): void;
    /** Sets the density of the gang members in the specified zone
    *
    * https://library.sannybuilder.com/#/sa?q=076C */
    SetGangStrength(zoneId: string, gangId: int, density: int): void;
    /** Sets whether cops should be prevented from spawning in the specified area
    *
    * https://library.sannybuilder.com/#/sa?q=09B7 */
    SetNoCops(zone: string, state: boolean): void;
    SetPopulationRace(zone: string, _p2: int): void;
    SetPopulationType(zone: string, type: int): void;
    SetTriggerGangWar(zone: string): void;
    /** Sets whether the IPL defined audio for the specified area should play
    *
    * https://library.sannybuilder.com/#/sa?q=0917 */
    SwitchAudio(zone: string, state: boolean): void;
}
declare var Zone: Zone
/** 
 * 
 * https://library.sannybuilder.com/#/sa/classes/AudioStream3D */
declare class AudioStream3D extends AudioStream {
    constructor(handle: number);
    static Load(audioFileName: string): boolean;
    setPlayAtCar(handle: Car): void;
    setPlayAtChar(handle: Char): void;
    setPlayAtCoords(x: float, y: float, z: float): void;
    setPlayAtObject(handle: ScriptObject): void;
}
/** 
 * 
 * https://library.sannybuilder.com/#/sa/classes/Boat */
declare class Boat extends Car {
    constructor(handle: number);
    /** Makes the boat stay motionless in the water
    *
    * https://library.sannybuilder.com/#/sa?q=0323 */
    anchor(state: boolean): void;
    /** Makes the boat sail to the location
    *
    * https://library.sannybuilder.com/#/sa?q=02D3 */
    goto(x: float, y: float, z: float): void;
    /** Sets the boat's max speed
    *
    * https://library.sannybuilder.com/#/sa?q=02DB */
    setCruiseSpeed(maxSpeed: float): void;
    /** Turns off the car's engine
    *
    * https://library.sannybuilder.com/#/sa?q=02D4 */
    stop(): void;
}
/** 
 * 
 * https://library.sannybuilder.com/#/sa/classes/DecisionMakerChar */
declare class DecisionMakerChar extends DecisionMaker {
    constructor(handle: number);
    /** Copies a decision makers data to another decision maker
    *
    * https://library.sannybuilder.com/#/sa?q=07E5 */
    static Copy(maskOrOtherHandle: DecisionMakerChar): DecisionMakerChar;
    static CopyShared(mask: int): DecisionMakerChar;
    /** Creates a decision maker with the specified type
    *
    * https://library.sannybuilder.com/#/sa?q=060A */
    static Load(type: int): DecisionMakerChar;
    /** Sets which action should occur according to the event on the following parameters
    *
    * https://library.sannybuilder.com/#/sa?q=0709 */
    addEventResponse(eventId: int, taskId: int, respect: float, hate: float, like: float, dislike: float, inCar: boolean, onFoot: boolean): void;
    /** Resets the task for the event of the specified decision maker
    *
    * https://library.sannybuilder.com/#/sa?q=0708 */
    clearEventResponse(eventId: int): void;
}
/** 
 * 
 * https://library.sannybuilder.com/#/sa/classes/DecisionMakerGroup */
declare class DecisionMakerGroup extends DecisionMaker {
    constructor(handle: number);
    /** Copies a group decision makers data to another decision maker
    *
    * https://library.sannybuilder.com/#/sa?q=07E6 */
    static Copy(mask: int): DecisionMakerGroup;
    /** Creates a decision maker for use on groups of actors
    *
    * https://library.sannybuilder.com/#/sa?q=06AE */
    static Load(type: int): DecisionMakerGroup;
    /** Sets which action should occur according to the event on the following parameters
    *
    * https://library.sannybuilder.com/#/sa?q=074A */
    addEventResponse(eventId: int, taskId: int, respect: float, hate: float, like: float, dislike: float, inCar: boolean, onFoot: boolean): void;
    /** Resets the task for the event of the specified group decision maker
    *
    * https://library.sannybuilder.com/#/sa?q=0749 */
    clearEventResponse(eventId: int): void;
}
/** 
 * 
 * https://library.sannybuilder.com/#/sa/classes/Heli */
declare class Heli extends Car {
    constructor(handle: number);
    /** Provides the heli with extra thrust power
    *
    * https://library.sannybuilder.com/#/sa?q=07BB */
    activateSpeedCheat(_p2: int): void;
    attachWinch(state: boolean): void;
    /** Makes the heli follow and attack the current player in the given radius
    *
    * https://library.sannybuilder.com/#/sa?q=0724 */
    attackPlayer(handle: Player, radius: float): void;
    /** Makes the helicopter hunt down the character or the vehicle within the specified radius
    *
    * https://library.sannybuilder.com/#/sa?q=0727 */
    chaseEntity(char: Char, vehicle: Car, radius: float): void;
    /** Resets the heli rotation set with 04D0
    *
    * https://library.sannybuilder.com/#/sa?q=04D1 */
    clearOrientation(): void;
    /** Sets whether the helicopter sound is muted
    *
    * https://library.sannybuilder.com/#/sa?q=0A1C */
    disableAudio(state: boolean): void;
    /** Makes the Hunter helicopter fire cannon gun
    *
    * https://library.sannybuilder.com/#/sa?q=0541 */
    fireHunterGun(): void;
    /** Makes the heli follow the specified actor or vehicle in the air
    *
    * https://library.sannybuilder.com/#/sa?q=0726 */
    followEntity(char: Char, vehicle: Car, radius: float): void;
    /** Makes the helicopter fly to the specified location, keeping a specific Z height/altitude
    *
    * https://library.sannybuilder.com/#/sa?q=04A2 */
    gotoCoords(x: float, y: float, z: float, minAltitude: float, maxAltitude: float): void;
    /** Retrieves the entity attached to the heli's magnet and returns to specific variables depending on the entities type
    *
    * https://library.sannybuilder.com/#/sa?q=078B */
    grabEntityOnWinch(): {
        char: Char;
        vehicle: Car;
        object: ScriptObject;
    };
    keepEntityInView(char: Char, vehicle: Car, minAltitude: float, maxAltitude: int): void;
    landAtCoords(x: float, y: float, z: float, minAltitude: float, maxAltitude: float): void;
    /** Makes helicopter simulate crash landing, exploding on the way if high up
    *
    * https://library.sannybuilder.com/#/sa?q=0564 */
    makeComeCrashingDown(): void;
    releaseEntityFromWinch(): void;
    /** Makes the helicopter rotor spin at full speed instantly
    *
    * https://library.sannybuilder.com/#/sa?q=0825 */
    setBladesFullSpeed(): void;
    /** Forces the heli rotation relative to the north
    *
    * https://library.sannybuilder.com/#/sa?q=04D0 */
    setOrientation(angle: float): void;
    setReachedTargetDistance(distance: int): void;
    /** Limits the amount a helicopter can tilt
    *
    * https://library.sannybuilder.com/#/sa?q=04DF */
    setStabiliser(state: boolean): void;
}
/** 
 * 
 * https://library.sannybuilder.com/#/sa/classes/MenuGrid */
declare class MenuGrid extends Menu {
    constructor(handle: number);
    /** Creates the same color chart that you see in car modification shops
    *
    * https://library.sannybuilder.com/#/sa?q=0964 */
    static Create(header: string, topLeftX: float, topLeftY: float, width: float, numColumns: int, interactive: boolean, background: boolean, alignment: int): MenuGrid;
    setActiveItemCarMods(carcolor: int): boolean;
}
/** 
 * 
 * https://library.sannybuilder.com/#/sa/classes/Plane */
declare class Plane extends Car {
    constructor(handle: number);
    /** Sets the planes mission to attack the player
    *
    * https://library.sannybuilder.com/#/sa?q=070E */
    attackPlayer(handle: Player, radius: float): void;
    attackPlayerUsingDogFight(player: Player, radius: float): void;
    flyInDirection(heading: float, minAltitude: float, maxAltitude: float): void;
    followEntity(char: Char, vehicle: Car, radius: float): void;
    getUndercarriagePosition(): float;
    gotoCoords(x: float, y: float, z: float, minAltitude: float, maxAltitude: float): void;
    setThrottle(throttle: float): void;
    /** Sets whether the plane's landing wheels are up
    *
    * https://library.sannybuilder.com/#/sa?q=08E6 */
    setUndercarriageUp(state: boolean): void;
    /** Provides the aircraft with full power so it can start flying mid-air
    *
    * https://library.sannybuilder.com/#/sa?q=0745 */
    startsInAir(): void;
}
/** 
 * 
 * https://library.sannybuilder.com/#/sa/classes/Trailer */
declare class Trailer extends Car {
    constructor(handle: number);
    attachToCab(cab: Car): void;
    /** Detaches the trailer from the car which it is attached to
    *
    * https://library.sannybuilder.com/#/sa?q=07AC */
    detachFromCab(cab: Car): void;
    /** Returns true if CAR A has CAR B attached to it like a trailer
    *
    * https://library.sannybuilder.com/#/sa?q=07AB */
    isAttachedToCab(cab: Car): boolean;
}
