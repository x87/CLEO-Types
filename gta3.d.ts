// Sanny Builder Library v0.74
declare class Audio {
    /** Unloads the mission audio (03CF), freeing game memory */
    static ClearMissionAudio(): void;
    /** Returns true if the audio (03CF) is no longer playing */
    static HasMissionAudioFinished(): boolean;
    /** Returns true if the mission audio has loaded (03CF) */
    static HasMissionAudioLoaded(): boolean;
    /** Loads the end of game music */
    static LoadEndOfGameTune(): void;
    /** Loads the file from the audio directory */
    static LoadMissionAudio(name: string): void;
    /** Plays the theme tune */
    static PlayEndOfGameTune(): void;
    /** Plays the loaded sound (03CF) */
    static PlayMissionAudio(): void;
    /** Plays an audio file with the specified ID from the Audio directory */
    static PlayMissionPassedTune(soundId: number): void;
    /** Plays police radio message audio reporting the suspect has last been seen at the specified location */
    static PoliceRadioMessage(x: number, y: number, z: number): void;
    /** Sets the location of the mission audio (03CF) where it can be heard */
    static SetMissionAudioPosition(x: number, y: number, z: number): void;
    /** Sets whether sounds should fade along with the screen */
    static SetMusicDoesFade(state: boolean): void;
    /** Sets the current radio station that is playing, if the player is in a vehicle */
    static SetRadioChannel(channel: number, startFromMs: number): void;
    /** Stops the theme tune */
    static StopEndOfGameTune(): void;
}
declare class Blip {
    constructor(handle: number);
    /** Adds a blip and a marker to the vehicle */
    static AddForCar(vehicle: Car): Blip;
    /** Adds a blip with properties to the vehicle */
    static AddForCarOld(vehicle: Car, color: number, display: number): Blip;
    /** Adds a blip and a marker to the character */
    static AddForChar(char: Char): Blip;
    /** Adds a blip with properties to the character */
    static AddForCharOld(char: Char, color: number, display: number): Blip;
    /** Adds a blip to the contact point */
    static AddForContactPoint(x: number, y: number, z: number): Blip;
    /** Adds a blip to the location */
    static AddForCoord(x: number, y: number, z: number): Blip;
    /** Adds a blip with properties at the location */
    static AddForCoordOld(x: number, y: number, z: number, colour: number, display: number): Blip;
    /** Adds a blip and a marker to the object */
    static AddForObject(object: Object): Blip;
    /** Adds a blip with properties to the object */
    static AddForObjectOld(object: Object, color: number, display: number): Blip;
    /** Adds a blip and a marker to the pickup */
    static AddForPickup(pickup: Pickup): Blip;
    /** Adds a blip with properties to the pickup */
    static AddForPickupOld(pickup: Pickup, color: number, display: number): Blip;
    /** Adds a sprite blip and a marker to the vehicle */
    static AddSpriteForCar(vehicle: Car, sprite: number): Blip;
    /** Adds a sprite blip and a marker to the character */
    static AddSpriteForChar(char: Char, sprite: number): Blip;
    /** Adds a sprite blip to the contact point */
    static AddSpriteForContactPoint(x: number, y: number, z: number, sprite: number): Blip;
    /** Adds a sprite blip to the location */
    static AddSpriteForCoord(x: number, y: number, z: number, sprite: number): Blip;
    /** Adds a sprite blip and a marker to the object */
    static AddSpriteForObject(object: Object, sprite: number): Blip;
    /** Adds a sprite blip and a marker to the pickup */
    static AddSpriteForPickup(pickup: Pickup, sprite: number): Blip;
    /** Sets the blip's color */
    changeColor(color: number): void;
    /** Changes the display of the specified blip */
    changeDisplay(display: number): void;
    /** Sets the blip's size */
    changeScale(size: number): void;
    /** Sets whether the blip should appear dimmed */
    dim(state: boolean): void;
    /** Removes the blip */
    remove(): void;
}
declare class Camera {
    /** Fades the screen for the specified time */
    static DoFade(time: number, direction: number): void;
    /** Gives camera control to the player */
    static EnablePlayerControl(): void;
    /** Returns the debug camera position */
    static GetDebugCoordinates(): {
        x: number;
        y: number;
        z: number;
    };
    /** Stores the debug camera front vector */
    static GetDebugFrontVector(): {
        x: number;
        y: number;
        z: number;
    };
    /** Stores the location the debug camera is pointing to */
    static GetDebugPointAt(): {
        x: number;
        y: number;
        z: number;
    };
    /** Returns true if the screen is fading (016A) */
    static GetFadingStatus(): boolean;
    /** Returns true if any part of the radius of the specified point is visible on screen */
    static IsPointOnScreen(x: number, y: number, z: number, radius: number): boolean;
    /** Attaches the camera to the specified vehicle */
    static PointAtCar(vehicle: Car, mode: number, switchStyle: number): void;
    /** Attaches the camera to the specified character */
    static PointAtChar(char: Char, mode: number, switchStyle: number): void;
    /** Attaches the camera to the specified player */
    static PointAtPlayer(player: Player, mode: number, switchStyle: number): void;
    /** Points the camera at the specified location and applies the position set by 0159 */
    static PointAtPoint(x: number, y: number, z: number, switchStyle: number): void;
    /** Restores the camera to its usual position */
    static Restore(): void;
    /** Restores the camera, putting it back behind the player */
    static RestoreJumpcut(): void;
    /** Puts the camera behind the player */
    static SetBehindPlayer(): void;
    /** Sets the RGB color of the fade command (016A) */
    static SetFadingColor(r: number, g: number, b: number): void;
    /** Sets the camera's position and rotation */
    static SetFixedPosition(x: number, y: number, z: number, xRotation: number, yRotation: number, zRotation: number): void;
    /** Enables traffic spawn at the camera position, otherwise at the player position (default) */
    static SetGenerateCarsAround(state: boolean): void;
    /** Puts the camera in front of the player, pointing towards the player */
    static SetInFrontOfPlayer(): void;
    /** Sets how long the camera transition will last */
    static SetInterpolationParameters(_p1: number, time: number): void;
    /** Sets the motion blur (camera overlay color) */
    static SetMotionBlur(type: number): void;
    /** Sets the near clip */
    static SetNearClip(value: number): void;
    /** Sets how far behind the camera is from the player */
    static SetZoom(zoom: number): void;
    /** Shakes the camera with the given intensity */
    static Shake(intensity: number): void;
    /** Shakes the in-game camera if the camera's location is nearby the specified location */
    static ShakeWithPoint(intensity: number, x: number, y: number, z: number): void;
}
declare class Car {
    constructor(handle: number);
    /** Creates a vehicle at the specified location, with the specified model */
    static Create(modelId: number, x: number, y: number, z: number): Car;
    /** Returns the number of seats in the vehicle model */
    static GetNumberOfSeatsInModel(modelId: number): number;
    /** Returns true if the handle is an invalid vehicle handle or the vehicle has been destroyed (wrecked) */
    static IsDead(handle: number): boolean;
    /** Returns true if the handle is a valid vehicle handle that is still alive (opposite of 0119) */
    static IsStillAlive(handle: number): boolean;
    /** Activates upside-down car check for the car */
    addUpsidedownCheck(): void;
    /** Arms the vehicle with a bomb of the given type (In SA, this command only supports the mobile version) */
    armWithBomb(bombType: number): void;
    /** Sets the car's primary and secondary colors */
    changeColor(primaryColor: number, secondaryColor: number): void;
    /** Sets the locked status of the car's doors (same as 020A) */
    changeLock(lockStatus: number): void;
    /** Clears the vehicle's last weapon damage (see 031E) */
    clearLastWeaponDamage(): void;
    /** Removes the vehicle from the game */
    delete(): void;
    /** Removes the vehicle from the mission cleanup list, preventing it from being deleted when the mission ends */
    dontRemove(): void;
    /** Makes the vehicle explode */
    explode(): void;
    flash(state: boolean): void;
    /** Returns the handle of a character sitting in the specified car seat */
    getCharInPassengerSeat(seatIndex: number): Char;
    /** Gets the car's primary and secondary colors */
    getColors(): {
        primaryColour: number;
        secondaryColour: number;
    };
    /** Returns the vehicle's coordinates */
    getCoordinates(): {
        x: number;
        y: number;
        z: number;
    };
    /** Returns the car's driver handle */
    getDriver(): Char;
    /** Returns the X coord of the vehicle's angle */
    getForwardX(): number;
    /** Returns the Y coord of the vehicle's angle */
    getForwardY(): number;
    /** Returns the vehicle's heading (z-angle) */
    getHeading(): number;
    /** Returns the vehicle's health */
    getHealth(): number;
    /** Returns the maximum number of passengers that could sit in the car */
    getMaximumNumberOfPassengers(): number;
    /** Returns the car's model id */
    getModel(): number;
    /** Returns the number of passengers sitting in the car */
    getNumberOfPassengers(): number;
    /** Gets the car's speed */
    getSpeed(): number;
    /** Makes the AI drive to the specified location by any means */
    gotoCoordinates(x: number, y: number, z: number): void;
    /** Makes the AI drive to the specified location obeying the traffic rules */
    gotoCoordinatesAccurate(x: number, y: number, z: number): void;
    /** Returns true if the vehicle has been hit by the specified weapon */
    hasBeenDamagedByWeapon(weaponType: number): boolean;
    /** Returns true if the specified vehicle has a car bomb installed */
    isArmedWithAnyBomb(): boolean;
    /** Returns true if the vehicle is armed with a bomb of the specified status */
    isArmedWithBomb(status: number): boolean;
    /** Returns true if the vehicle is a boat */
    isBoat(): boolean;
    /** Returns true if the specified vehicle has been crushed by the car crusher */
    isCrushed(): boolean;
    /** Returns true if the vehicle is wrecked and located within the specified 2D area */
    isDeadInArea2D(leftBottomX: number, leftBottomY: number, rightTopX: number, rightTopY: number, drawSphere: boolean): boolean;
    /** Returns true if the vehicle is wrecked and located within the specified 3D area */
    isDeadInArea3D(leftBottomX: number, leftBottomY: number, leftBottomZ: number, rightTopX: number, rightTopY: number, rightTopZ: number, drawSphere: boolean): boolean;
    /** Returns true if the vehicle's door is present and closed */
    isDoorClosed(door: number): boolean;
    /** Returns true if the vehicle's primary color matches the specified color */
    isFirstColor(color: number): boolean;
    /** Returns true if the car's health is over the specified value */
    isHealthGreater(health: number): boolean;
    /** Returns true if the vehicle's siren is on */
    isIcecreamJingleOn(): boolean;
    /** Returns true if the car is in the air */
    isInAir(): boolean;
    /** Returns true if the vehicle is in the air */
    isInAirProper(): boolean;
    /** Returns true if the vehicle is located within the specified 2D area */
    isInArea2D(leftBottomX: number, leftBottomY: number, rightTopX: number, rightTopY: number, drawSphere: boolean): boolean;
    /** Returns true if the vehicle is located within the specified 3D area */
    isInArea3D(leftBottomX: number, leftBottomY: number, leftBottomZ: number, rightTopX: number, rightTopY: number, rightTopZ: number, drawSphere: boolean): boolean;
    /** Returns true if the vehicle is submerged in water */
    isInWater(): boolean;
    /** Returns true if the vehicle has the specified model */
    isModel(modelId: number): boolean;
    /** Returns true if the car is visible */
    isOnScreen(): boolean;
    /** Returns true if the specified car seat is empty */
    isPassengerSeatFree(seatIndex: number): boolean;
    /** Returns true if the vehicle's secondary color matches the specified color */
    isSecondColor(color: number): boolean;
    /** Returns true if the vehicle is not moving */
    isStopped(): boolean;
    isStoppedInArea2D(leftBottomX: number, leftBottomY: number, rightTopX: number, rightTopY: number, drawSphere: boolean): boolean;
    isStoppedInArea3D(leftBottomX: number, leftBottomY: number, leftBottomZ: number, rightTopX: number, rightTopY: number, rightTopZ: number, drawSphere: boolean): boolean;
    /** Returns true if the car has been upside down for more than 2 seconds (requires 0190) */
    isStuckOnRoof(): boolean;
    /** Returns true if the vehicle's model is Taxi (110), Cabbie (128), or Borgnine (148) */
    isTaxi(): boolean;
    /** Returns true if the vehicle is in the normal position (upright) */
    isUpright(): boolean;
    /** Returns true if the car is upside down */
    isUpsidedown(): boolean;
    /** Returns true if any of the car components is visibly damaged or lost */
    isVisiblyDamaged(): boolean;
    locate2D(x: number, y: number, xRadius: number, yRadius: number, drawSphere: boolean): boolean;
    locate3D(x: number, y: number, z: number, xRadius: number, yRadius: number, zRadius: number, drawSphere: boolean): boolean;
    locateStopped2D(x: number, y: number, xRadius: number, yRadius: number, drawSphere: boolean): boolean;
    /** Returns true if the car is stopped in the radius of the specified point */
    locateStopped3D(x: number, y: number, z: number, xRadius: number, yRadius: number, zRadius: number, drawSphere: boolean): boolean;
    /** Sets the locked status of the car's doors */
    lockDoors(lockStatus: number): void;
    /** Makes the car more resistant to physical damage */
    makeABitStronger(state: boolean): void;
    /** Allows the vehicle to be deleted by the game if necessary, and also removes it from the mission cleanup list, if applicable */
    markAsNoLongerNeeded(): void;
    /** Deactivates upside-down car check (0190) for the car */
    removeUpsidedownCheck(): void;
    /** Sets the driver and all passengers' objective to leave the vehicle */
    setAllOccupantsLeave(): void;
    /** Sets whether the vehicle will avoid paths between levels (0426) */
    setAvoidLevelTransitions(state: boolean): void;
    /** Sets the car's big wheels property (unused) */
    setBigWheels(state: boolean): void;
    /** Set's the AI driver's mission to obstruct another's car pathway (similar to 00AF with BlockCarFaraway) */
    setBlockCar(target: Car): void;
    /** Sets whether the car receives damage */
    setCanBeDamaged(state: boolean): void;
    /** Enables or disables the ability to Pay'n'Spray the car */
    setCanRespray(state: boolean): void;
    /** Set's whether the AI driver will occupy the fast (left) lane on a two-way road */
    setChangeLane(state: boolean): void;
    /** Makes the vehicle harder to control */
    setComedyControls(state: boolean): void;
    /** Puts the vehicle at the specified location */
    setCoordinates(x: number, y: number, z: number): void;
    /** Sets the vehicle's max speed */
    setCruiseSpeed(maxSpeed: number): void;
    /** Sets the behavior of the vehicle's AI driver */
    setDrivingStyle(drivingStyle: number): void;
    /** Makes the AI driver in the vehicle brake for the specified period of time */
    setHandbrakeStop(timeInMs: number): void;
    /** Makes the AI driver in the vehicle turn hard left and brake for the specified period of time */
    setHandbrakeTurnLeft(timeInMs: number): void;
    /** Makes the AI driver in the vehicle turn hard right and brake for the specified period of time */
    setHandbrakeTurnRight(timeInMs: number): void;
    /** Sets the vehicle's heading (z-angle) */
    setHeading(heading: number): void;
    /** Sets the vehicle's health */
    setHealth(health: number): void;
    /** Sets whether the car is heavy */
    setHeavy(state: boolean): void;
    /** Sets the car's mission to idle (MISSION_NONE), stopping any driving activity */
    setIdle(): void;
    /** Prevents the vehicle from being despawned when the current level (island) changes */
    setIgnoreLevelTransitions(state: boolean): void;
    /** Sets the mission of the vehicle's AI driver */
    setMission(carMission: number): void;
    /** Teleports the vehicle nearby the player's location */
    setOnPathToPlayer(): void;
    /** Makes a vehicle immune to everything except the player */
    setOnlyDamagedByPlayer(state: boolean): void;
    /** Sets the vehicle's immunities */
    setProofs(bulletProof: boolean, fireProof: boolean, explosionProof: boolean, collisionProof: boolean, meleeProof: boolean): void;
    /** Sets the AI driver's mission to ram another car (similar to 00AF with RamCarFaraway) */
    setRamCar(target: Car): void;
    /** Sets the car's status */
    setStatus(status: number): void;
    /** Forces the AI-controlled vehicle to stay on the current island */
    setStaysInCurrentLevel(state: boolean): void;
    /** Makes the car more resistant to collisions */
    setStrong(state: boolean): void;
    /** Sets whether the taxi's roof light is on */
    setTaxiLights(state: boolean): void;
    /** Overrides the default vehicle traction value of 1.0 */
    setTraction(traction: number): void;
    /** Disables the car from exploding when it is upside down, as long as the player is not in the vehicle */
    setUpsidedownNotDamaged(state: boolean): void;
    /** Sets whether the vehicle is visible or not */
    setVisible(state: boolean): void;
    /** Makes the vehicle watertight, meaning characters inside will not be harmed if the vehicle is submerged in water */
    setWatertight(state: boolean): void;
    /** Sets whether the car's alarm can be activated */
    switchSiren(state: boolean): void;
    /** Enables or disabled guns on the vehicle that has them (e.g. boats) */
    switchWeapons(state: boolean): void;
    /** Sets the car's heading so that it is facing the 2D coordinate */
    turnToFaceCoord(x: number, y: number): void;
    /** Clears any current tasks the vehicle has and makes it drive around aimlessly */
    wanderRandomly(): void;
}
declare class CarGenerator {
    constructor(handle: number);
    /** Initializes a parked car generator */
    static Create(x: number, y: number, z: number, heading: number, modelId: number, primaryColor: number, secondaryColor: number, forceSpawn: boolean, alarmChance: number, doorLockChance: number, minDelay: number, maxDelay: number): CarGenerator;
    /** Specifies the number of times the car generator spawns a car (101 - infinite) */
    switch(amount: number): void;
}
declare class CatalinaHeli {
    /** Returns the handle of the heli created with 03B2 */
    static Grab(): Car;
    /** Makes the heli in the 'The Exchange' mission fly high in the sky */
    static FlyAway(): void;
    /** Returns true if the player damaged the heli flying in the 'The Exchange' mission */
    static HasBeenShotDown(): boolean;
    /** Deletes the heli flying in the 'The Exchange' mission */
    static Remove(): void;
    /** Creates a heli flying in the 'The Exchange' mission  */
    static Start(): void;
    /** Makes the heli in the 'The Exchange' mission take off */
    static TakeOff(): void;
}
declare class Char {
    constructor(handle: number);
    /** Creates a character at the specified location, with the specified model and pedtype */
    static Create(pedType: number, modelId: number, x: number, y: number, z: number): Char;
    /** Creates a character with the specified model in the passenger seat of the vehicle */
    static CreateAsPassenger(vehicle: Car, pedType: number, modelId: number, seatId: number): Char;
    /** Creates a character in the driver's seat of the vehicle */
    static CreateInsideCar(vehicle: Car, pedType: number, modelId: number): Char;
    /** Creates a character with a randomised model and pedtype at the specified coordinates */
    static CreateRandom(x: number, y: number, z: number): Char;
    /** Returns true if the handle is an invalid character handle or the character is dead (wasted) */
    static IsDead(handle: number): boolean;
    /** Returns true if the handle is a valid character handle who is still alive (opposite of 0118) */
    static IsStillAlive(handle: number): boolean;
    /** Sets a multiplier for the range of a character's ability to go and occupy a vehicle */
    static SetEnterCarRangeMultiplier(value: number): void;
    /** Sets a multiplier for the range of a character's ability to react on deadly events around */
    static SetThreatReactionRangeMultiplier(value: number): void;
    /** Adds the specified amount of ammo to the character's weapon, if the character has the weapon */
    addAmmo(weaponType: number, ammo: number): void;
    /** Increases the character's armor by the specified value to the maximum of 100.0 */
    addArmor(amount: number): void;
    /** Puts character into a turret on the vehicle, allowing them to shoot */
    attachToCar(vehicle: Car, xOffset: number, yOffset: number, zOffset: number, position: number, angleLimit: number, weaponType: number): void;
    /** Returns true if the character sees a dead body of the given type */
    canSeeDeadChar(pedType: number): boolean;
    /** Clears the character's last weapon damage (see 031D) */
    clearLastWeaponDamage(): void;
    /** Resets character's hostility to other ped types (011A) */
    clearThreatSearch(): void;
    /** Removes the character from the game and mission cleanup list, freeing game memory */
    delete(): void;
    /** Removes the character from turret mode (0464) */
    detachFromCar(): void;
    /** Removes the character from the mission cleanup list, preventing it from being deleted when the mission ends */
    dontRemove(): void;
    /** Respawns the character using the model requested with 0352 */
    dress(): void;
    /** Dismembers the character */
    explodeHead(): void;
    flash(state: boolean): void;
    /** Sets the character's follow path */
    followPath(x: number, y: number, z: number): void;
    /** Gets the amount of ammo in the specified weapon of the character */
    getAmmoInWeapon(weaponType: number): number;
    /** Returns the character's coordinates */
    getCoordinates(): {
        x: number;
        y: number;
        z: number;
    };
    /** Returns the type of weapon that the character is currently holding */
    getCurrentWeapon(): number;
    /** Returns the character's heading (z-angle) */
    getHeading(): number;
    /** Returns the character's health */
    getHealth(): number;
    /** Returns the number of members which are in a group of the character (01DE) */
    getNumberOfFollowers(): number;
    /** Gives the character the weapon with the specified amount of ammo */
    giveWeapon(weaponType: number, ammo: number): void;
    /** Returns true if the character has been hit by the specified weapon */
    hasBeenDamagedByWeapon(weaponType: number): boolean;
    /** Returns true if the character can see the target character */
    hasSpottedChar(target: Char): boolean;
    /** Returns true if the character has seen the specified player */
    hasSpottedPlayer(player: Player): boolean;
    /** Returns true if the character is holding the given type of weapon */
    isCurrentWeapon(weaponType: number): boolean;
    /** Returns true if the character's health is over the specified value */
    isHealthGreater(health: number): boolean;
    /** Returns true if the character has a vehicle, even if they are not actually sat inside it (opening and closing the door) */
    isInAnyCar(): boolean;
    /** Returns true if the character is within the specified 2D area */
    isInArea2D(leftBottomX: number, leftBottomY: number, rightTopX: number, rightTopY: number, drawSphere: boolean): boolean;
    /** Returns true if the character is within the specified 3D area */
    isInArea3D(leftBottomX: number, leftBottomY: number, leftBottomZ: number, rightTopX: number, rightTopY: number, rightTopZ: number, drawSphere: boolean): boolean;
    /** Returns true if the character is within the specified 2D area in a vehicle */
    isInAreaInCar2D(leftBottomX: number, leftBottomY: number, rightTopX: number, rightTopY: number, drawSphere: boolean): boolean;
    /** Returns true if the character is within the specified 3D area in a vehicle */
    isInAreaInCar3D(leftBottomX: number, leftBottomY: number, leftBottomZ: number, rightTopX: number, rightTopY: number, rightTopZ: number, drawSphere: boolean): boolean;
    /** Returns true if the character is within the specified 2D area on foot */
    isInAreaOnFoot2D(leftBottomX: number, leftBottomY: number, rightTopX: number, rightTopY: number, drawSphere: boolean): boolean;
    /** Returns true if the character is within the specified 3D area on foot */
    isInAreaOnFoot3D(leftBottomX: number, leftBottomY: number, leftBottomZ: number, rightTopX: number, rightTopY: number, rightTopZ: number, drawSphere: boolean): boolean;
    /** Returns true if the character is in the specified vehicle */
    isInCar(vehicle: Car): boolean;
    /** Returns true if the character is part of the leader's group (01DE) */
    isInCharsGroup(leader: Char): boolean;
    /** Returns true if the character can move */
    isInControl(): boolean;
    /** Returns true if the character is driving a vehicle with the specified model */
    isInModel(modelId: number): boolean;
    /** Returns true if the character is part of the leader's group (01DF) */
    isInPlayersGroup(leader: Player): boolean;
    /** Returns true if the character is in the specified map zone */
    isInZone(zone: string): boolean;
    /** Returns true if the character has fallen */
    isLyingDown(): boolean;
    /** Returns true if the character is male */
    isMale(): boolean;
    /** Returns true if the character's model ID is equivalent to the model ID passed */
    isModel(modelId: number): boolean;
    /** Returns true if the character has completed their objective */
    isObjectivePassed(): boolean;
    /** Returns true if the character is driving a bike */
    isOnAnyBike(): boolean;
    /** Returns true if the character is on foot, and not occupying a vehicle */
    isOnFoot(): boolean;
    /** Returns true if the character is visible */
    isOnScreen(): boolean;
    /** Returns true if the character is firing a weapon */
    isShooting(): boolean;
    /** Returns true if the character fired a weapon within the specified 2D area */
    isShootingInArea(leftBottomX: number, leftBottomY: number, topRightX: number, topRightY: number, drawSphere: boolean): boolean;
    /** Returns true if the character is sitting in any vehicle */
    isSittingInAnyCar(): boolean;
    /** Returns true if the character is sitting in the specified vehicle */
    isSittingInCar(vehicle: Car): boolean;
    /** Returns true if the character is not moving */
    isStopped(): boolean;
    /** Returns true if the character stopped within the specified 2D area */
    isStoppedInArea2D(leftBottomX: number, leftBottomY: number, rightTopX: number, rightTopY: number, drawSphere: boolean): boolean;
    /** Returns true if the character stopped within the specified 3D area */
    isStoppedInArea3D(leftBottomX: number, leftBottomY: number, leftBottomZ: number, rightTopX: number, rightTopY: number, rightTopZ: number, drawSphere: boolean): boolean;
    /** Returns true if the character stopped within the specified 2D area in a vehicle */
    isStoppedInAreaInCar2D(leftBottomX: number, leftBottomY: number, rightTopX: number, rightTopY: number, drawSphere: boolean): boolean;
    /** Returns true if the character stopped within the specified 3D area in a vehicle */
    isStoppedInAreaInCar3D(leftBottomX: number, leftBottomY: number, leftBottomZ: number, rightTopX: number, rightTopY: number, rightTopZ: number, drawSphere: boolean): boolean;
    /** Returns true if the character stopped within the specified 2D area on foot */
    isStoppedInAreaOnFoot2D(leftBottomX: number, leftBottomY: number, rightTopX: number, rightTopY: number, drawSphere: boolean): boolean;
    /** Returns true if the character stopped within the specified 3D area on foot */
    isStoppedInAreaOnFoot3D(leftBottomX: number, leftBottomY: number, leftBottomZ: number, rightTopX: number, rightTopY: number, rightTopZ: number, drawSphere: boolean): boolean;
    /** Returns true if the character is colliding with the specified object */
    isTouchingObject(object: Object): boolean;
    /** Returns true if the character is colliding with the specified object on foot */
    isTouchingObjectOnFoot(object: Object): boolean;
    /** Makes the character stop following the leader (01DE or 01DF) */
    leaveGroup(): void;
    /** Returns true if the character is within the 2D radius of the coordinates point */
    locateAnyMeans2D(x: number, y: number, xRadius: number, yRadius: number, drawSphere: Sphere): boolean;
    /** Returns true if the character is within the 3D radius of the coordinates point */
    locateAnyMeans3D(x: number, y: number, z: number, xRadius: number, yRadius: number, zRadius: number, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 2D radius of the vehicle */
    locateAnyMeansCar2D(vehicle: Car, xRadius: number, yRadius: number, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 3D radius of the vehicle */
    locateAnyMeansCar3D(vehicle: Car, xRadius: number, yRadius: number, zRadius: number, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 2D radius of the other character */
    locateAnyMeansChar2D(target: Char, xRadius: number, yRadius: number, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 3D radius of the other character */
    locateAnyMeansChar3D(target: Char, xRadius: number, yRadius: number, zRadius: number, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 2D radius of the object */
    locateAnyMeansObject2D(object: Object, xRadius: number, yRadius: number, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 3D radius of the object */
    locateAnyMeansObject3D(object: Object, xRadius: number, yRadius: number, zRadius: number, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 2D radius of the coordinates point in a vehicle */
    locateInCar2D(x: number, y: number, xRadius: number, yRadius: number, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 3D radius of the coordinates point in a vehicle */
    locateInCar3D(x: number, y: number, z: number, xRadius: number, yRadius: number, zRadius: number, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 2D radius of the vehicle in a vehicle */
    locateInCarCar2D(handle: Car, xRadius: number, yRadius: number, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 3D radius of the vehicle in a vehicle */
    locateInCarCar3D(vehicle: Car, xRadius: number, yRadius: number, zRadius: number, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 2D radius of the other character in a vehicle */
    locateInCarChar2D(otherChar: Char, xRadius: number, yRadius: number, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 3D radius of the other character in a vehicle */
    locateInCarChar3D(target: Char, xRadius: number, yRadius: number, zRadius: number, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 2D radius of the object in a vehicle */
    locateInCarObject2D(object: Object, xRadius: number, yRadius: number, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 3D radius of the object in a vehicle */
    locateInCarObject3D(object: Object, xRadius: number, yRadius: number, zRadius: number, drawSphere: number): boolean;
    /** Returns true if the character is within the 2D radius of the coordinates point on foot */
    locateOnFoot2D(x: number, y: number, xRadius: number, yRadius: number, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 3D radius of the coordinates point on foot */
    locateOnFoot3D(x: number, y: number, z: number, xRadius: number, yRadius: number, zRadius: number, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 2D radius of the vehicle on foot */
    locateOnFootCar2D(vehicle: Car, xRadius: number, yRadius: number, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 3D radius of the vehicle on foot */
    locateOnFootCar3D(vehicle: Car, xRadius: number, yRadius: number, zRadius: number, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 2D radius of the other character on foot */
    locateOnFootChar2D(target: Char, xRadius: number, yRadius: number, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 3D radius of the other character on foot */
    locateOnFootChar3D(target: Char, xRadius: number, yRadius: number, zRadius: number, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 2D radius of the object on foot */
    locateOnFootObject2D(object: Object, xRadius: number, yRadius: number, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 3D radius of the object on foot */
    locateOnFootObject3D(object: Object, xRadius: number, yRadius: number, zRadius: number, drawSphere: boolean): boolean;
    /** Returns true if the character stopped within the 2D radius of the coordinates point */
    locateStoppedAnyMeans2D(x: number, y: number, xRadius: number, yRadius: number, drawSphere: boolean): boolean;
    /** Returns true if the character stopped within the 3D radius of the coordinates point */
    locateStoppedAnyMeans3D(x: number, y: number, z: number, xRadius: number, yRadius: number, zRadius: number, drawSphere: boolean): boolean;
    /** Returns true if the character stopped within the 2D radius of the coordinates point in a vehicle */
    locateStoppedInCar2D(x: number, y: number, xRadius: number, yRadius: number, drawSphere: boolean): boolean;
    /** Returns true if the character stopped within the 3D radius of the coordinates point in a vehicle */
    locateStoppedInCar3D(x: number, y: number, z: number, xRadius: number, yRadius: number, zRadius: number, drawSphere: boolean): boolean;
    /** Returns true if the character stopped within the 2D radius of the coordinates point on foot */
    locateStoppedOnFoot2D(x: number, y: number, xRadius: number, yRadius: number, drawSphere: boolean): boolean;
    /** Returns true if the character stopped within the 3D radius of the coordinates point on foot */
    locateStoppedOnFoot3D(x: number, y: number, z: number, xRadius: number, yRadius: number, zRadius: number, drawSphere: boolean): boolean;
    /** Makes the character to keep looking at the direction of the other character */
    lookAtCharAlways(target: Char): void;
    /** Makes the character to keep looking at the direction of the player */
    lookAtPlayerAlways(target: Player): void;
    /** Allows the character to be deleted by the game if necessary, and also removes them from the mission cleanup list, if applicable */
    markAsNoLongerNeeded(): void;
    /** Removes the character with a fade, freeing game memory */
    removeElegantly(): void;
    /** Affects how often the character will hit the target when attacking with a weapon */
    setAccuracy(accuracy: number): void;
    /** Sets the amount of ammo the character has in the specified weapon */
    setAmmo(weaponType: number, ammo: number): void;
    /** Sets the animation group for the character */
    setAnimGroup(animGroup: number): void;
    /** Makes the character perform an animation at the specified speed */
    setAnimSpeed(animSpeed: number): void;
    /** Makes the character follow the leader player */
    setAsLeader(leader: Player): void;
    /** Makes a character bleed */
    setBleeding(state: boolean): void;
    /** Locks the character while in a car */
    setCantBeDraggedOut(state: boolean): void;
    /** Puts the character at the specified location */
    setCoordinates(x: number, y: number, z: number): void;
    /** Sets the character's currently held weapon */
    setCurrentWeapon(weaponType: number): void;
    /** Sets the character's heading (z-angle) */
    setHeading(heading: number): void;
    /** Sets the character's health */
    setHealth(health: number): void;
    /** Makes the character attack whoever attacks them */
    setHeedThreats(state: boolean): void;
    /** Sets the character's objective to stay idle */
    setIdle(): void;
    /** Prevents the character from being despawned when the current level (island) changes */
    setIgnoreLevelTransitions(state: boolean): void;
    /** Sets whether the character is a psychotic killer or not */
    setIsChrisCriminal(state: boolean): void;
    /** Sets the character's objective to enter a nearby train */
    setObjCatchTrain(): void;
    /** Sets the character's objective to destroy the vehicle */
    setObjDestroyCar(vehicle: Car): void;
    /** Sets the character's objective to enter the vehicle as a driver */
    setObjEnterCarAsDriver(vehicle: Car): void;
    /** Sets the character's objective to enter the vehicle as a passenger */
    setObjEnterCarAsPassenger(vehicle: Car): void;
    /** Makes the character leave their car and run away from it */
    setObjFleeCar(vehicle: Car): void;
    /** Sets the character's objective to walk away forever and stay away from the target character */
    setObjFleeCharOnFootAlways(target: Char): void;
    /** Sets the character's objective to escape on foot and stay away from the target character until safe */
    setObjFleeCharOnFootTillSafe(target: Char): void;
    /** Sets the character's objective to run away */
    setObjFleeOnFootTillSafe(): void;
    /** Sets the character's objective to walk away forever and stay away from the target player */
    setObjFleePlayerOnFootAlways(target: Player): void;
    /** Sets the character's objective to escape on foot and stay away from the target player until it is safe */
    setObjFleePlayerOnFootTillSafe(target: Player): void;
    /** Sets the character's objective to escort the leader character */
    setObjFollowCharInFormation(leader: Char, formationType: number): void;
    /** Sets the character's objective to follow along the specified route */
    setObjFollowRoute(routeId: number, mode: number): void;
    /** Sets the character's objective to walk to or drive into the specified area */
    setObjGotoAreaAnyMeans(leftBottomX: number, leftBottomY: number, topRightX: number, topRightY: number): void;
    /** Sets the character's objective to walk into the specified 2D area */
    setObjGotoAreaOnFoot(leftBottomX: number, leftBottomY: number, rightTopX: number, rightTopY: number): void;
    /** Sets the character's objective to walk towards the target character */
    setObjGotoCharOnFoot(target: Char): void;
    /** Sets the character's objective to walk at the specified location */
    setObjGotoCoordOnFoot(x: number, y: number): void;
    /** Sets the character's objective to walk towards the target player */
    setObjGotoPlayerOnFoot(target: Player): void;
    /** Sets the character's objective to guard the specified 2D area */
    setObjGuardArea(leftBottomX: number, leftBottomY: number, rightTopX: number, rightTopY: number): void;
    /** Sets the character's objective to guard the specified location */
    setObjGuardSpot(x: number, y: number, z: number): void;
    /** Sets the character's objective to hail a taxi */
    setObjHailTaxi(): void;
    /** Sets the character's objective to attack the specified character */
    setObjKillCharAnyMeans(target: Char): void;
    /** Sets the character's objective to attack the other character on foot */
    setObjKillCharOnFoot(target: Char): void;
    /** Sets the character's objective to attack the player */
    setObjKillPlayerAnyMeans(target: Player): void;
    /** Sets the character's objective to attack the player on foot */
    setObjKillPlayerOnFoot(target: Player): void;
    /** Sets the character's objective to leave the vehicle */
    setObjLeaveCar(vehicle: Car): void;
    /** Clears the character's current objective */
    setObjNoObj(): void;
    /** Sets the character's objective to run into the specified 2D area */
    setObjRunToArea(leftBottomX: number, leftBottomY: number, topRightX: number, topRightY: number): void;
    /** Sets the character's objective to run at the specified location */
    setObjRunToCoord(x: number, y: number): void;
    /** Sets the character's objective to find any traffic vehicle nearby and take the driver's seat */
    setObjStealAnyCar(): void;
    /** Sets the character's objective to stay in a vehicle */
    setObjWaitInCar(): void;
    /** Sets the character's objective to stay idle on foot */
    setObjWaitOnFoot(): void;
    /** Makes a character immune to everything except the player */
    setOnlyDamagedByPlayer(state: boolean): void;
    /** Sets the ped stat of the character */
    setPersonality(pedstat: number): void;
    /** Sets the character's immunities */
    setProofs(bulletProof: boolean, fireProof: boolean, explosionProof: boolean, collisionProof: boolean, meleeProof: boolean): void;
    /** Makes the character run */
    setRunning(state: boolean): void;
    /** Makes the character shout once (sound ids 95, 96, 101, 103, 104, 105) */
    setSay(soundId: number): void;
    /** Makes the character maintain their position when attacked */
    setStayInSamePlace(state: boolean): void;
    /** Forces the AI-controlled character to stay on the current island */
    setStaysInCurrentLevel(state: boolean): void;
    /** Sets whether the specified character is immune to headshots */
    setSuffersCriticalHits(state: boolean): void;
    /** Sets the character's hostility to other ped types */
    setThreatSearch(pedThreat: number): void;
    /** Sets whether the character should follow paths set for pedestrians */
    setUsePednodeSeek(state: boolean): void;
    /** Sets whether the character is visible or not */
    setVisible(state: boolean): void;
    /** Puts the character in the idle state for the given period of time */
    setWaitState(stateId: number, timeInMs: number): void;
    /** Makes the character to stop looking at the other character (022C) or player (022D) */
    stopLooking(): void;
    /** Returns the current vehicle of the character and adds it to the mission cleanup list */
    storeCarIsIn(): Car;
    /** Returns the character's vehicle handle without marking it as used by the script, therefore allowing it to be deleted by the game at any time */
    storeCarIsInNoSave(): Car;
    /** Rotates the character to face the other character */
    turnToFaceChar(char: Char): void;
    /** Rotates the character to face the location */
    turnToFaceCoord(x: number, y: number, z: number): void;
    /** Rotates the character to face the player */
    turnToFacePlayer(player: Player): void;
    /** Removes the character and requests a new special model to load */
    undress(modelName: string): void;
    /** Sets the character's wander direction */
    wanderDir(direction: number): void;
    /** Pulls the character out of their car and places at the location */
    warpFromCarToCoord(x: number, y: number, z: number): void;
    /** Puts the character in the specified vehicle */
    warpIntoCar(vehicle: Car): void;
}
declare class ChaseScene {
    /** Gets the control over a car from the chase scene */
    static GetChaseCar(carIndex: number): Car;
    /** Removes the car from the chase scene */
    static RemoveCarFromChase(carIndex: number): void;
    /** Starts the chase scene (intro mission custscene) */
    static Start(startTime: number): void;
    /** Stops the chase scene (intro mission custscene) */
    static Stop(): void;
}
declare class Clock {
    /** Returns the time passed in milliseconds since the game started */
    static GetGameTimer(): number;
    /** Returns the number of minutes left until the clock matches the time specified */
    static GetMinutesToTimeOfDay(hours: number, minutes: number): number;
    /** Returns the number of hours and minutes passed since midnight */
    static GetTimeOfDay(): {
        hours: number;
        minutes: number;
    };
    /** Restores the game time to the time when it was saved with 0253 */
    static Restore(): void;
    /** Sets the current in-game time */
    static SetTimeOfDay(hours: number, minutes: number): void;
    /** Sets the game to run at the specified speed */
    static SetTimeScale(scale: number): void;
    /** Saves the current time in game */
    static Store(): void;
}
declare class Crane {
    /** Activates a crane located within 100.0 units of the specified location */
    static Activate(craneX: number, craneY: number, pickupZoneX1: number, pickupZoneY1: number, pickupZoneX2: number, pickupZoneY2: number, dropOffX: number, dropOffY: number, dropOffZ: number, dropOffAngle: number): void;
    /** Activates a crusher crane located within 100.0 units of the specified location */
    static ActivateCrusher(craneX: number, craneY: number, pickupZoneX1: number, pickupZoneY1: number, pickupZoneX2: number, pickupZoneY2: number, dropOffX: number, dropOffY: number, dropOffZ: number, dropOffAngle: number): void;
    /** Activates a military crane located within 100.0 units of the specified location */
    static ActivateMilitary(craneX: number, craneY: number, pickupZoneX1: number, pickupZoneY1: number, pickupZoneX2: number, pickupZoneY2: number, dropOffX: number, dropOffY: number, dropOffZ: number, dropOffAngle: number): void;
    /** Deactivates a crane located within 100.0 units of the specified location */
    static Deactivate(craneX: number, craneY: number): void;
    /** Checks if the military crane has collected all vehicles */
    static HasMilitaryCollectedAllCars(): boolean;
    /** Checks if a crane located within 100.0 units of the specified location is lifting the vehicle */
    static IsLiftingCar(craneX: number, craneY: number, car: Car): boolean;
}
declare class Credits {
    /** Returns true if the credits have finished */
    static AreFinished(): boolean;
    /** Makes the credits scroll up the screen */
    static Start(): void;
    /** Stops the credits text from showing */
    static Stop(): void;
}
declare class Cutscene {
    /** Ends the current cutscene, freeing game memory */
    static Clear(): void;
    /** Returns the time in milliseconds passed since the cutscene has started (02E7) */
    static GetTime(): number;
    /** Returns true if the cutscene has finished */
    static HasFinished(): boolean;
    /** Loads the data for the specified cutscene */
    static Load(name: string): void;
    /** Sets the position for a cutscene */
    static SetOffset(x: number, y: number, z: number): void;
    /** Starts the loaded cutscene (02E4) */
    static Start(): void;
}
declare class CutsceneHead {
    constructor(handle: number);
    /** Creates a head attached to the cutscene object (02E5) */
    static Create(modelId: number, cutsceneObject: CutsceneObject): CutsceneHead;
    /** Sets the animation of the cuscene head */
    setAnim(animation: string): void;
}
declare class CutsceneObject {
    constructor(handle: number);
    /** Creates a new cutscene object with the model */
    static Create(modelId: number): CutsceneObject;
    /** Sets the animation of the cutscene object */
    setAnim(animation: string): void;
}
declare class Debugger {
    /** Disables the debug mode */
    static Off(): void;
    /** Enables the debug mode */
    static On(): void;
}
declare class DrugDropOff {
    /** Stores the current coordinates of the plane in the 'A Drop In The Ocean' mission */
    static FindPlaneCoordinates(): {
        x: number;
        y: number;
        z: number;
    };
    /** Returns true if the plane in the 'A Drop In The Ocean' mission has been destroyed */
    static HasPlaneBeenShotDown(): boolean;
    /** Creates a plane flying along the prerecorded path in the 'A Drop In The Ocean' mission */
    static Start(): void;
}
declare class DrugRun {
    /** Returns the current coordinates of the plane in the 'S.A.M.' mission */
    static FindPlaneCoordinates(): {
        x: number;
        y: number;
        z: number;
    };
    /** Returns true if the plane in the 'S.A.M.' mission has landed */
    static HasBeenCompleted(): boolean;
    /** Returns true if the plane in the 'S.A.M.' mission has been destroyed */
    static HasPlaneBeenShotDown(): boolean;
    /** Creates a plane flying along the prerecorded path in the 'S.A.M.' mission */
    static Start(): void;
}
declare class Fx {
    /** Creates an explosion at the point */
    static AddExplosion(x: number, y: number, z: number, type: number): void;
    /** Adds a moving particle effect */
    static AddMovingParticleEffect(particle: number, x: number, y: number, z: number, strengthX: number, strengthY: number, strengthZ: number, scale: number, r: number, g: number, b: number, durationInMs: number): void;
    /** Adds a particle effect at the location, or removes it if the last argument is true */
    static AddParticleEffect(type: number, x: number, y: number, z: number, remove: boolean): void;
    /** Creates a single particle at the specified coordinates */
    static CreateSingleParticle(type: number, x: number, y: number, z: number, strengthX: number, strengthY: number, strengthZ: number, scale: number): void;
    /** Displays a corona at the specified location */
    static DrawCorona(x: number, y: number, z: number, size: number, coronaType: number, flareType: number, r: number, g: number, b: number): void;
    /** Creates a light of the specified color at the specified location */
    static DrawLight(x: number, y: number, z: number, r: number, g: number, b: number): void;
    /** Draws a shadow in the current frame */
    static DrawShadow(textureType: number, x: number, y: number, z: number, angle: number, length: number, intensity: number, r: number, g: number, b: number): void;
    /** Updates the steaming effect around the specified cutscene object during the final scene of the 'Bomb Da Base: Act II' mission */
    static UpdateBoatFoamAnimation(object: CutsceneObject): void;
}
declare class Game {
    /** Displays a screen prompting the player to save */
    static ActivateSaveMenu(): void;
    /** Returns true if the player has used any of the cheats */
    static AreAnyCarCheatsActivated(): boolean;
    /** Returns true if the game uses metric measurements (metres instead of inches) */
    static AreMeasurementsInMetres(): boolean;
    /** Clears the ped type's hostility to other ped types */
    static ClearThreatForPedType(type: number, threatMask: number): void;
    /** Creates a hidden package pickup at the location */
    static CreateCollectable(x: number, y: number, z: number): void;
    /** Terminates the active mission by executing its mission cleanup routine */
    static FailCurrentMission(): void;
    /** Returns the number of hidden packages collected */
    static GetCollectablesCollected(): number;
    /** Returns true if the player has saved their game */
    static HasSaveGameFinished(): boolean;
    /** Returns true if the game language is set to French */
    static IsFrench(): boolean;
    /** Returns true if the game language is set to German */
    static IsGerman(): boolean;
    /** Returns true if the game has no violent elements censored */
    static IsNasty(): boolean;
    /** Returns true if the ped type is hostile to other ped types */
    static IsThreatForPedType(type: number, threatMask: number): boolean;
    /** Sets whether all cars receive damage */
    static SetAllCarsCanBeDamaged(state: boolean): void;
    /** Sets whether all spawned taxis have their roof light enabled or not */
    static SetAllTaxiLights(state: boolean): void;
    /** Makes the two characters chat for the specified period of time */
    static SetCharsChatting(char1: Char, char2: Char, duration: number): void;
    /** Sets the total number of hidden packages to collect */
    static SetCollectableTotal(amount: number): void;
    /** Makes pedestrians pay no attention to the player */
    static SetEveryoneIgnorePlayer(handle: Player, state: boolean): void;
    /** Sets whether the player can use bomb shops for free */
    static SetFreeBombs(state: boolean): void;
    /** Defines whether the player can respray their car for free */
    static SetFreeResprays(state: boolean): void;
    /** Specifies that the intro cutscene is playing */
    static SetIntroIsPlaying(state: boolean): void;
    /** Sets the maximum wanted level the player can receive */
    static SetMaxWantedLevel(wantedLevel: number): void;
    /** Sets patrol cars to Police cars and Enforcers */
    static SetSwatRequired(state: boolean): void;
    /** Sets the ped type's hostility to other ped types */
    static SetThreatForPedType(type: number, threatMask: number): void;
    /** Sets sensitivity to crime, changing how many crimes a player can commit before police begin to pursue */
    static SetWantedMultiplier(multiplier: number): void;
    /** Enables the second police helicopter that chases you */
    static SwitchHelicopter(state: boolean): void;
}
declare class Gang {
    /** Sets the car used by members of the specified gang */
    static SetCarModel(gangId: number, modelId: number): void;
    /** Forces the game to spawn the gang members based on the specified override value */
    static SetPedModelPreference(gangId: number, override: number): void;
    /** Sets the weapons that the specified gang can use */
    static SetWeapons(gangId: number, weaponType1: number, weaponType2: number): void;
}
declare class Garage {
    constructor(handle: number);
    /** Creates a garage at the specified coordinates */
    static Create(leftBottomX: number, leftBottomY: number, leftBottomZ: number, rightTopX: number, rightTopY: number, rightTopZ: number, type: number): Garage;
    /** Creates a garage with target model  */
    static CreateWithCarModel(fromX: number, fromY: number, fromZ: number, toX: number, toY: number, toZ: number, type: number, modelId: number): Garage;
    /** Activates the garage */
    activate(): void;
    /** Sets the garage's type */
    changeType(type: number): void;
    /** Changes the type of garage and target model */
    changeTypeWithCarModel(type: number, modelId: number): void;
    /** Closes the garage */
    close(): void;
    /** Deactivates the garage */
    deactivate(): void;
    /** Returns true if the garage contains the vehicle */
    doesContainCar(vehicle: Car): boolean;
    /** Returns true if the player's car has been resprayed by the garage */
    hasResprayHappened(): boolean;
    /** Returns true if the import garage has collected a vehicle from the predefined list */
    hasSlotBeenFilled(importSlot: number): boolean;
    /** Returns true if a vehicle is in the garage */
    isCarInMission(): boolean;
    /** Returns true if the garage's door is closed */
    isClosed(): boolean;
    /** Returns true if the garage's door is open */
    isOpen(): boolean;
    /** Disables special camera when in the garage */
    noSpecialCameraForThisGarage(): void;
    /** Opens the garage */
    open(): void;
    /** Sets the garage door to swing open instead of slide open */
    setRotatingDoor(): void;
    /** Sets the garage to only accept the specified vehicle */
    setTargetCarForMission(vehicle: Car): void;
}
declare class Hud {
    /** Removes the onscreen counter (0150 or 03C4) */
    static ClearCounter(counter: number): void;
    /** Removes the onscreen timer */
    static ClearTimer(timer: number): void;
    /** Displays an onscreen counter, either shown in numbers or as a bar */
    static DisplayCounter(counter: number, display: number): void;
    /** Displays an onscreen counter with the text, either shown in numbers or as a bar */
    static DisplayCounterWithString(counter: number, display: number, text: string): void;
    /** Creates a countdown onscreen timer */
    static DisplayTimer(timer: number): void;
    /** Creates a countdown onscreen timer with the text */
    static DisplayTimerWithString(timer: number, text: string): void;
    /** Draws a box at the specified screen X and Y position, with the specified size and RGBA colors */
    static DrawRect(x: number, y: number, width: number, height: number, r: number, g: number, b: number, a: number): void;
    /** Draws a loaded texture (038F) at the specified on-screen X and Y coordinates, with the specified size and RGBA color */
    static DrawSprite(memorySlot: number, offsetLeft: number, offsetTop: number, width: number, height: number, r: number, g: number, b: number, a: number): void;
    /** Makes a specific part of the HUD disappear and reappear several times */
    static FlashObject(object: number): void;
    /** Makes the on-screen timer stop updating */
    static FreezeTimer(state: boolean): void;
    /** Loads the specified splash screen */
    static LoadSplash(txdName: string): void;
    /** Causes the next texture to be drawn (038D) before the fade is drawn */
    static SetSpritesDrawBeforeFade(state: boolean): void;
    /** Enables widescreen */
    static SwitchWidescreen(state: boolean): void;
}
declare class KillFrenzy {
    /** Returns the status of the current rampage */
    static ReadStatus(): number;
    /** Starts a rampage */
    static Start(text: string, weaponType: number, timeInMs: number, targetsNum: number, targetModel1: number, targetModel2: number, targetModel3: number, targetModel4: number, betaSoundsAndMessages: boolean): void;
    /** Starts a headshot rampage */
    static StartHeadshot(text: string, weaponType: number, timeInMs: number, targetsNum: number, targetModel1: number, targetModel2: number, targetModel3: number, targetModel4: number, betaSoundsAndMessages: boolean): void;
}
declare class Math {
    /** Returns the absolute value of the local float variable */
    static Abs(): number;
    /** Returns the result of converting metres to feet */
    static ConvertMetresToFeet(metres: number): number;
    /** Returns the cosine of the angle */
    static Cos(angle: number): number;
    /** Returns a random integer between 0 and 32767 (SA) or 65535 (III & VC) */
    static Random(): number;
    /** Returns a random float between the specified ranges */
    static RandomFloatInRange(min: number, max: number): number;
    /** Returns a random integer between the specified ranges */
    static RandomIntInRange(min: number, max: number): number;
    /** Returns the sine of the angle */
    static Sin(angle: number): number;
    /** Returns the square root of a number */
    static Sqrt(num: number): number;
}
declare class Object {
    constructor(handle: number);
    /** Creates an object at the specified location, with the specified model */
    static Create(modelId: number, x: number, y: number, z: number): Object;
    /** Creates an object without offset at the location */
    static CreateNoOffset(modelId: number, x: number, y: number, z: number): Object;
    /** Returns true if the handle is a valid object handle */
    static DoesExist(handle: number): boolean;
    /** Stores the health of the bodycast object used in the 'Plaster Blaster' mission */
    static GetBodyCastHealth(): number;
    /** Adds the given vector to the object's velocity (0381) */
    addToVelocity(x: number, y: number, z: number): void;
    /** Destroys the object, freeing game memory */
    delete(): void;
    /** Removes the object from the mission cleanup list, preventing it from being deleted when the mission ends */
    dontRemove(): void;
    flash(state: boolean): void;
    /** Returns the object's coordinates */
    getCoordinates(): {
        x: number;
        y: number;
        z: number;
    };
    /** Returns the object's heading (z-angle) */
    getHeading(): number;
    /** Returns true if the object is damaged */
    hasBeenDamaged(): boolean;
    /** Returns true if the object is visible */
    isOnScreen(): boolean;
    /** Makes the object targettable (ability to be auto-aimed) */
    makeTargettable(): void;
    /** Allows the object to be deleted by the game if necessary, and also removes it from the mission cleanup list, if applicable */
    markAsNoLongerNeeded(): void;
    /** Places the object at an offset from the car */
    placeRelativeToCar(vehicle: Car, xOffset: number, yOffset: number, zOffset: number): void;
    /** Places the object relative to the other object */
    placeRelativeToObject(target: Object, offsetX: number, offsetY: number, offsetZ: number): void;
    /** Rotates the object from one angle to another, optionally accounting for a collision during the rotation */
    rotate(fromAngle: number, toAngle: number, collisionCheck: boolean): boolean;
    /** Sets the object's collision detection */
    setCollision(state: boolean): void;
    /** Puts the object at the specified location */
    setCoordinates(x: number, y: number, z: number): void;
    /** Sets the specified object to always draw on top of other objects */
    setDrawLast(state: boolean): void;
    /** Makes the object moveable */
    setDynamic(state: boolean): void;
    /** Sets the object's heading (z-angle) */
    setHeading(heading: number): void;
    /** Sets the object rotation along X, Y and Z axis */
    setRotation(x: number, y: number, z: number): void;
    /** Sets the object's velocity */
    setVelocity(xSpeed: number, ySpeed: number, zSpeed: number): void;
    /** Returns true if the object has finished moving */
    slide(fromX: number, fromY: number, fromZ: number, xSpeed: number, ySpeed: number, zSpeed: number, collisionCheck: boolean): boolean;
}
declare class Pacman {
    /** Creates a single donkey magazine pickup */
    static AddPowerPill(x: number, y: number, z: number): void;
    /** Removes all donkey magazine (02C3) and platinum (02C7) pickups */
    static Clear(): void;
    /** Clears the number of platinum pickups (02C7) collected in a vehicle */
    static ClearNumberOfPowerPillsCarried(): void;
    /** Clears the number of donkey magazine pickups (02C3) collected */
    static ClearNumberOfPowerPillsEaten(): void;
    /** Returns the number of platinum pickups (02C7) collected in a vehicle */
    static GetNumberOfPowerPillsCarried(): number;
    /** Returns the number of donkey magazine pickups (02C3) collected */
    static GetNumberOfPowerPillsEaten(): number;
    /** Creates a predefined collection of donkey magazine pickups */
    static StartRace(_zero: number): void;
    /** Stores the current player's position for debugging purposes during the pacman race */
    static StartRecord(): void;
    /** Creates a collection of platinum pickups nearby the specified location */
    static StartScramble(x: number, y: number, z: number, distance: number, count: number): void;
}
declare class Pad {
    /** Returns the controller mode */
    static GetControllerMode(): number;
    /** Stores the status of the specified key into a variable */
    static GetState(pad: Pad, buttonId: number): number;
    /** Returns true if the pad's button has been pressed */
    static IsButtonPressed(pad: Pad, buttonId: number): boolean;
    /** Shakes the player's joypad at the specified intensity for the specified time */
    static Shake(pad: Pad, time: number, intensity: number): void;
}
declare class Pager {
    /** Sends a new message to the player's pager */
    static AddMessage(text: string, speed: number, priority: number, _unused: number): void;
    /** Sends a new message in which the first string token~1~ is substituted with the specified number to the player's pager */
    static AddMessageWithNumber(text: string, num: number, speed: number, priority: number, _unused: number): void;
}
declare class Path {
    /** Adds a new waypoint to the route with the specified id */
    static AddRoutePoint(routeId: number, x: number, y: number, z: number): void;
    /** Returns the nearest path note from the specified coordinates that a vehicle can drive on */
    static GetClosestCarNode(x: number, y: number, z: number): {
        nodeX: number;
        nodeY: number;
        nodeZ: number;
    };
    /** Returns the position and heading of the closest vehicle path node to the specified position */
    static GetClosestCarNodeWithHeading(x: number, y: number, z: number): {
        nodeX: number;
        nodeY: number;
        nodeZ: number;
        angle: number;
    };
    /** Returns the position and heading of the closest vehicle path node to the specified position and with rotation away from the point */
    static GetClosestCarNodeWithHeadingAwayPoint(x: number, y: number, z: number, destX: number, destY: number): {
        nodeX: number;
        nodeY: number;
        nodeZ: number;
        angle: number;
    };
    /** Returns the position and heading of the closest vehicle path node to the specified position and with rotation towards the point */
    static GetClosestCarNodeWithHeadingTowardsPoint(x: number, y: number, z: number, destX: number, destY: number): {
        nodeX: number;
        nodeY: number;
        nodeZ: number;
        angle: number;
    };
    /** Returns the nearest path node from the specified coordinates that a pedestrian can walk on */
    static GetClosestCharNode(x: number, y: number, z: number): {
        nodeX: number;
        nodeY: number;
        nodeZ: number;
    };
    /** Marks all ped path nodes in the given 3D area as transitional between two levels (islands) */
    static MarkPedRoadsBetweenLevels(leftBottomX: number, leftBottomY: number, leftBottomZ: number, rightTopX: number, rightTopY: number, rightTopZ: number): void;
    /** Marks all car path nodes in the given 3D area as transitional between two levels (islands) */
    static MarkRoadsBetweenLevels(leftBottomX: number, leftBottomY: number, leftBottomZ: number, rightTopX: number, rightTopY: number, rightTopZ: number): void;
    /** Clears all waypoints in the route with the specified id */
    static RemoveRoute(routeId: number): void;
    /** Forbids pedestrians to walk into the specified area */
    static SwitchPedRoadsOff(leftBottomX: number, leftBottomY: number, leftBottomZ: number, rightTopX: number, rightTopY: number, rightTopZ: number): void;
    /** Forbids pedestrians to walk into the specified angled area */
    static SwitchPedRoadsOffAngled(leftBottomX: number, leftBottomY: number, leftBottomZ: number, rightTopX: number, rightTopY: number, rightTopZ: number, angle: number): void;
    /** Allows pedestrians to walk into the specified area */
    static SwitchPedRoadsOn(leftBottomX: number, leftBottomY: number, leftBottomZ: number, rightTopX: number, rightTopY: number, rightTopZ: number): void;
    /** Enables pedestrians walk into the specified angled area */
    static SwitchPedRoadsOnAngled(leftBottomX: number, leftBottomY: number, leftBottomZ: number, rightTopX: number, rightTopY: number, rightTopZ: number, angle: number): void;
    /** Prevents cars from driving on roads in the specified 3D area */
    static SwitchRoadsOff(leftBottomX: number, leftBottomY: number, leftBottomZ: number, rightTopX: number, rightTopY: number, rightTopZ: number): void;
    /** Prevents cars from driving on roads in the specified angled area */
    static SwitchRoadsOffAngled(leftBottomX: number, leftBottomY: number, leftBottomZ: number, rightTopX: number, rightTopY: number, rightTopZ: number, angle: number): void;
    /** Allows cars to drive in the specified 3D area */
    static SwitchRoadsOn(leftBottomX: number, leftBottomY: number, leftBottomZ: number, rightTopX: number, rightTopY: number, rightTopZ: number): void;
    /** Allows cars to drive in the specified angled area */
    static SwitchRoadsOnAngled(leftBottomX: number, leftBottomY: number, leftBottomZ: number, rightTopX: number, rightTopY: number, rightTopZ: number, angle: number): void;
}
declare class Phone {
    constructor(handle: number);
    /** Gets the phone at the specified X and Y coordinates */
    static Grab(x: number, y: number): Phone;
    /** Returns true if the phone has finished displaying an assigned script line */
    hasDisplayedMessage(): boolean;
    /** Returns true if the phone is displaying an assigned script line */
    isDisplayingMessage(): boolean;
    /** Assigns two script lines to the phone */
    set2Messages(msg1: string, msg2: string): void;
    /** Assigns two script lines to the phone which can be picked up again in a minute */
    set2RepeatedMessages(msg1: string, msg2: string): void;
    /** Assigns three script lines to the phone */
    set3Messages(msg1: string, msg2: string, msg3: string): void;
    /** Assigns three script lines to the phone which can be picked up again in a minute */
    set3RepeatedMessages(msg1: string, msg2: string, msg3: string): void;
    /** Assigns four script lines to the phone */
    set4Messages(msg1: string, msg2: string, msg3: string, msg4: string): void;
    /** Assigns four script lines to the phone which can be picked up again in a minute */
    set4RepeatedMessages(msg1: string, msg2: string, msg3: string, msg4: string): void;
    /** Assigns five script lines to the phone */
    set5Messages(msg1: string, msg2: string, msg3: string, msg4: string, msg5: string): void;
    /** Assigns five script lines to the phone which can be picked up again in a minute */
    set5RepeatedMessages(msg1: string, msg2: string, msg3: string, msg4: string, msg5: string): void;
    /** Assigns six script lines to the phone */
    set6Messages(msg1: string, msg2: string, msg3: string, msg4: string, msg5: string, msg6: string): void;
    /** Assigns six script lines to the phone which can be picked up again in a minute */
    set6RepeatedMessages(msg1: string, msg2: string, msg3: string, msg4: string, msg5: string, msg6: string): void;
    /** Assigns a script line to the phone */
    setMessage(message: string): void;
    /** Assigns a script line to the phone which can be picked up again in a minute */
    setRepeatedMessage(message: string): void;
    /** Disables the phone from ringing */
    turnOff(): void;
    /** Makes the phone ringing */
    turnOn(): void;
}
declare class Pickup {
    constructor(handle: number);
    /** Creates a pickup with the given model and type */
    static Create(modelId: number, pickupType: number, x: number, y: number, z: number): Pickup;
    /** Creates a pickup of type FloatingPackage at the given coordinates */
    static CreateFloatingPackage(x: number, y: number, z: number): Pickup;
    /** Creates a money pickup with the specified cash value */
    static CreateMoney(x: number, y: number, z: number, cashAmount: number): Pickup;
    /** Creates a weapon pickup, giving the player the specified amount of ammo when they pick it up */
    static CreateWithAmmo(modelId: number, pickupType: number, ammo: number, x: number, y: number, z: number): Pickup;
    /** Creates a mine pickup of type MineInactive at the location */
    static DropMine(x: number, y: number, z: number): void;
    /** Creates a nautical mine pickup of type MineInactive at the location */
    static DropNauticalMine(x: number, y: number, z: number): void;
    /** Returns true if specified pickup has been collected */
    hasBeenCollected(): boolean;
    /** Destroys the specified pickup, freeing game memory */
    remove(): void;
}
declare class Player {
    constructor(handle: number);
    /** Creates a player at the specified location */
    static Create(modelId: number, x: number, y: number, z: number): Player;
    /** Returns the amount of times the player has destroyed a specific model */
    static GetNumOfModelsKilled(modelId: number): number;
    /** Gives the player a detonator */
    static GiveDetonator(): void;
    /** Returns true if the handle is an invalid player handle or the player is dead (wasted) */
    static IsDead(handle: number): boolean;
    /** Resets the count of how many times the player has destroyed a certain model (0298) */
    static ResetNumOfModelsKilled(): void;
    /** Adds the specified amount of ammo to the player's weapon */
    addAmmo(weaponType: number, ammo: number): void;
    /** Increases the character's armour by the specified value to the maximum of 100.0 */
    addArmour(amount: number): void;
    /** Adds to the player's money */
    addScore(money: number): void;
    /** Sets the player's wanted level */
    alterWantedLevel(wantedLevel: number): void;
    /** Sets the player's wanted level if the specified level is higher than the current one */
    alterWantedLevelNoDrop(wantedLevel: number): void;
    /** Applies brakes to the player's car */
    applyBrakesToCar(state: boolean): void;
    /** Returns true if the player can move */
    canStartMission(): boolean;
    /** Clears the player's wanted level */
    clearWantedLevel(): void;
    /** Kills the player */
    explodeHead(): void;
    /** Gets the amount of ammo in the specified weapon of the player */
    getAmmoInWeapon(weaponType: number): number;
    /** Gets the character handle for the specified player */
    getChar(): Char;
    /** Returns the player's coordinates */
    getCoordinates(): {
        x: number;
        y: number;
        z: number;
    };
    /** Returns the type of weapon that the player is currently holding */
    getCurrentWeapon(): number;
    /** Returns the player's heading (z-angle) */
    getHeading(): number;
    /** Returns the player's health */
    getHealth(): number;
    /** Gives the player the weapon with the specified amount of ammo */
    giveWeapon(weaponType: number, ammo: number): void;
    /** Returns true if the specified player is being arrested (busted) */
    hasBeenArrested(): boolean;
    /** Returns true if the player is holding the given type of weapon */
    isCurrentWeapon(weaponType: number): boolean;
    /** Returns true if the player's health is over the specified value */
    isHealthGreater(health: number): boolean;
    isInAngledArea2D(leftBottomX: number, leftBottomY: number, rightTopX: number, rightTopY: number, angle: number, drawSphere: boolean): boolean;
    isInAngledArea3D(leftBottomX: number, leftBottomY: number, leftBottomZ: number, rightTopX: number, rightTopY: number, rightTopZ: number, angle: number, drawSphere: boolean): boolean;
    isInAngledAreaInCar2D(leftBottomX: number, leftBottomY: number, rightTopX: number, rightTopY: number, angle: number, drawSphere: boolean): boolean;
    isInAngledAreaInCar3D(leftBottomX: number, leftBottomY: number, leftBottomZ: number, rightTopX: number, rightTopY: number, rightTopZ: number, angle: number, drawSphere: boolean): boolean;
    isInAngledAreaOnFoot2D(leftBottomX: number, leftBottomY: number, rightTopX: number, rightTopY: number, angle: number, drawSphere: boolean): boolean;
    isInAngledAreaOnFoot3D(leftBottomX: number, leftBottomY: number, leftBottomZ: number, rightTopX: number, rightTopY: number, rightTopZ: number, angle: number, drawSphere: boolean): boolean;
    /** Returns true if the player has a vehicle, even if they are not actually sat inside it (opening and closing the door) */
    isInAnyCar(): boolean;
    /** Returns true if the player is within the specified 2D area */
    isInArea2D(leftBottomX: number, leftBottomY: number, rightTopX: number, rightTopY: number, drawSphere: boolean): boolean;
    /** Returns true if the player is within the specified 3D area */
    isInArea3D(leftBottomX: number, leftBottomY: number, leftBottomZ: number, rightTopX: number, rightTopY: number, rightTopZ: number, drawSphere: boolean): boolean;
    /** Returns true if the player is within the specified 2D area in a vehicle */
    isInAreaInCar2D(leftBottomX: number, leftBottomY: number, rightTopX: number, rightTopY: number, drawSphere: boolean): boolean;
    /** Returns true if the player is within the specified 3D area in a vehicle */
    isInAreaInCar3D(leftBottomX: number, leftBottomY: number, leftBottomZ: number, rightTopX: number, rightTopY: number, rightTopZ: number, drawSphere: boolean): boolean;
    /** Returns true if the player is within the specified 2D area on foot */
    isInAreaOnFoot2D(leftBottomX: number, leftBottomY: number, rightTopX: number, rightTopY: number, drawSphere: boolean): boolean;
    /** Returns true if the player is within the specified 3D area on foot */
    isInAreaOnFoot3D(leftBottomX: number, leftBottomY: number, leftBottomZ: number, rightTopX: number, rightTopY: number, rightTopZ: number, drawSphere: boolean): boolean;
    /** Returns true if the player is in the specified vehicle */
    isInCar(vehicle: Car): boolean;
    /** Returns true if the player is driving a vehicle with the specified model */
    isInModel(modelId: number): boolean;
    /** Returns true if the player is controlling a remote-control vehicle */
    isInRemoteMode(): boolean;
    /** Returns true if the player vehicle's model is Taxi (110), Cabbie (128), or Borgnine (148) */
    isInTaxi(): boolean;
    /** Returns true if the player is in the specified map zone */
    isInZone(zone: string): boolean;
    /** Returns true if the player is talking over the phone (024A) */
    isLiftingAPhone(): boolean;
    /** Returns true if the player is driving a bike */
    isOnAnyBike(): boolean;
    /** Returns true if the player is on foot, and not occupying a vehicle */
    isOnFoot(): boolean;
    /** Returns true if the player hasn't been wasted or busted (the player is still playing) */
    isPlaying(): boolean;
    /** Returns true if the player is honking the horn in a car */
    isPressingHorn(): boolean;
    /** Returns true if the player's money is over the specified value */
    isScoreGreater(money: number): boolean;
    /** Returns true if the player is firing a weapon */
    isShooting(): boolean;
    /** Returns true if the player fired a weapon within the specified 2D area */
    isShootingInArea(leftBottomX: number, leftBottomY: number, rightTopX: number, rightTopY: number, drawSphere: boolean): boolean;
    /** Returns true if the player is sitting in any vehicle */
    isSittingInAnyCar(): boolean;
    /** Returns true if the player is in the specified vehicle */
    isSittingInCar(vehicle: Car): boolean;
    /** Returns true if the player is not moving */
    isStopped(): boolean;
    isStoppedInAngledArea2D(leftBottomX: number, leftBottomY: number, rightTopX: number, rightTopY: number, angle: number, drawSphere: boolean): boolean;
    isStoppedInAngledArea3D(leftBottomX: number, leftBottomY: number, leftBottomZ: number, rightTopX: number, rightTopY: number, rightTopZ: number, angle: number, drawSphere: boolean): boolean;
    isStoppedInAngledAreaInCar2D(leftBottomX: number, leftBottomY: number, rightTopX: number, rightTopY: number, angle: number, drawSphere: boolean): boolean;
    isStoppedInAngledAreaInCar3D(leftBottomX: number, leftBottomY: number, leftBottomZ: number, rightTopX: number, rightTopY: number, rightTopZ: number, angle: number, drawSphere: boolean): boolean;
    isStoppedInAngledAreaOnFoot2D(leftBottomX: number, leftBottomY: number, rightTopX: number, rightTopY: number, angle: number, drawSphere: boolean): boolean;
    isStoppedInAngledAreaOnFoot3D(leftBottomX: number, leftBottomY: number, leftBottomZ: number, rightTopX: number, rightTopY: number, rightTopZ: number, angle: number, drawSphere: boolean): boolean;
    /** Returns true if the player stopped within the specified 2D area */
    isStoppedInArea2D(leftBottomX: number, leftBottomY: number, rightTopX: number, rightTopY: number, drawSphere: boolean): boolean;
    /** Returns true if the player stopped within the specified 3D area */
    isStoppedInArea3D(leftBottomX: number, leftBottomY: number, leftBottomZ: number, rightTopX: number, rightTopY: number, rightTopZ: number, drawSphere: boolean): boolean;
    /** Returns true if the player stopped within the specified 2D area in a vehicle */
    isStoppedInAreaInCar2D(leftBottomX: number, leftBottomY: number, rightTopX: number, rightTopY: number, drawSphere: boolean): boolean;
    /** Returns true if the player stopped within the specified 3D area in a vehicle */
    isStoppedInAreaInCar3D(leftBottomX: number, leftBottomY: number, leftBottomZ: number, rightTopX: number, rightTopY: number, rightTopZ: number, drawSphere: boolean): boolean;
    /** Returns true if the player stopped within the specified 2D area on foot */
    isStoppedInAreaOnFoot2D(leftBottomX: number, leftBottomY: number, rightTopX: number, rightTopY: number, drawSphere: boolean): boolean;
    /** Returns true if the player stopped within the specified 3D area on foot */
    isStoppedInAreaOnFoot3D(leftBottomX: number, leftBottomY: number, leftBottomZ: number, rightTopX: number, rightTopY: number, rightTopZ: number, drawSphere: boolean): boolean;
    /** Returns true if the player is aiming at any character */
    isTargettingAnyChar(): boolean;
    /** Returns true if the player is aiming at the specified character */
    isTargettingChar(handle: Char): boolean;
    /** Returns true if the player is aiming at the specified object */
    isTargettingObject(handle: Object): boolean;
    /** Returns true if the player is colliding with the specified object */
    isTouchingObject(object: Object): boolean;
    /** Returns true if the player is colliding with the specified object on foot */
    isTouchingObjectOnFoot(object: Object): boolean;
    /** Returns true if the player's wanted level is over the specified value */
    isWantedLevelGreater(wantedLevel: number): boolean;
    /** Returns true if the player is within the 2D radius of the coordinates point */
    locateAnyMeans2D(x: number, y: number, xRadius: number, yRadius: number, drawSphere: boolean): boolean;
    /** Returns true if the player is within the specified 3D area */
    locateAnyMeans3D(x: number, y: number, z: number, xRadius: number, yRadius: number, zRadius: number, drawSphere: boolean): boolean;
    locateAnyMeansCar2D(handle: Car, xRadius: number, yRadius: number, drawSphere: boolean): boolean;
    locateAnyMeansCar3D(handle: Car, xRadius: number, yRadius: number, zRadius: number, drawSphere: boolean): boolean;
    /** Returns true if the player is within the 2D radius of the specified character */
    locateAnyMeansChar2D(target: Char, xRadius: number, yRadius: number, drawSphere: boolean): boolean;
    /** Returns true if the player is nearby the specified character */
    locateAnyMeansChar3D(target: Char, xRadius: number, yRadius: number, zRadius: number, drawSphere: boolean): boolean;
    /** Returns true if the player is within the 2D radius of the coordinates point in a vehicle */
    locateInCar2D(x: number, y: number, xRadius: number, yRadius: number, drawSphere: boolean): boolean;
    /** Returns true if the player is within the specified 3D area in a vehicle */
    locateInCar3D(x: number, y: number, z: number, xRadius: number, yRadius: number, zRadius: number, drawSphere: boolean): boolean;
    locateInCarCar2D(handle: Car, xRadius: number, yRadius: number, drawSphere: boolean): boolean;
    locateInCarCar3D(handle: Car, xRadius: number, yRadius: number, zRadius: number, drawSphere: boolean): boolean;
    /** Returns true if the player is within the 2D radius of the specified character in a vehicle */
    locateInCarChar2D(target: Char, xRadius: number, yRadius: number, drawSphere: boolean): boolean;
    /** Returns true if the player is nearby the specified character in a vehicle */
    locateInCarChar3D(target: Char, xRadius: number, yRadius: number, zRadius: number, drawSphere: boolean): boolean;
    /** Returns true if the player is within the 2D radius of the coordinates point on foot */
    locateOnFoot2D(x: number, y: number, xRadius: number, yRadius: number, drawSphere: boolean): boolean;
    /** Returns true if the player is within the specified 3D area on foot */
    locateOnFoot3D(x: number, y: number, z: number, xRadius: number, yRadius: number, zRadius: number, drawSphere: boolean): boolean;
    locateOnFootCar2D(handle: Car, xRadius: number, yRadius: number, drawSphere: boolean): boolean;
    locateOnFootCar3D(handle: Car, xRadius: number, yRadius: number, zRadius: number, drawSphere: boolean): boolean;
    /** Returns true if the player is within the 2D radius of the specified character on foot */
    locateOnFootChar2D(target: Char, xRadius: number, yRadius: number, drawSphere: boolean): boolean;
    /** Returns true if the player is nearby the specified character on foot */
    locateOnFootChar3D(target: Char, xRadius: number, yRadius: number, zRadius: number, drawSphere: boolean): boolean;
    /** Returns true if the player stopped within the 2D radius of the coordinates point */
    locateStoppedAnyMeans2D(x: number, y: number, xRadius: number, yRadius: number, drawSphere: boolean): boolean;
    /** Returns true if the player stopped within the specified 3D area */
    locateStoppedAnyMeans3D(x: number, y: number, z: number, xRadius: number, yRadius: number, zRadius: number, drawSphere: boolean): boolean;
    /** Returns true if the player stopped within the 2D radius of the coordinates point in a vehicle */
    locateStoppedInCar2D(x: number, y: number, xRadius: number, yRadius: number, drawSphere: boolean): boolean;
    /** Returns true if the player stopped within the specified 3D area in a vehicle */
    locateStoppedInCar3D(x: number, y: number, z: number, xRadius: number, yRadius: number, zRadius: number, drawSphere: boolean): boolean;
    /** Returns true if the player stopped within the 2D radius of the coordinates point on foot */
    locateStoppedOnFoot2D(x: number, y: number, xRadius: number, yRadius: number, drawSphere: boolean): boolean;
    /** Returns true if the player stopped within the specified 3D area on foot */
    locateStoppedOnFoot3D(x: number, y: number, z: number, xRadius: number, yRadius: number, zRadius: number, drawSphere: boolean): boolean;
    /** Makes the player to keep looking at the direction of the character */
    lookAtCharAlways(target: Char): void;
    /** Makes the player safe, putting the character in a safe location */
    makeSafeForCutscene(): void;
    /** Takes all weapons away from the player */
    removeAllWeapons(): void;
    /** Removes all fires located within 3.0 units of the player's position */
    saveFromFires(): void;
    /** Sets the amount of ammo the player has in the specified weapon */
    setAmmo(weaponType: number, ammo: number): void;
    /** Sets the animation group for the player */
    setAnimGroup(animGroup: number): void;
    /** Sets whether player's control is enabled */
    setControl(state: boolean): void;
    /** Puts the player at the specified location */
    setCoordinates(x: number, y: number, z: number): void;
    /** Sets the player's currently held weapon */
    setCurrentWeapon(weaponType: number): void;
    /** Defines whether the player have to reload their gun */
    setFastReload(state: boolean): void;
    /** Sets whether the player loses the cash when gets wasted (works once) */
    setFreeHealthCare(state: boolean): void;
    /** Sets whether the player loses the cash when gets busted (works once) */
    setGetOutOfJailFree(state: boolean): void;
    /** Sets the player's heading (z-angle) */
    setHeading(heading: number): void;
    /** Sets the player's health */
    setHealth(health: number): void;
    /** Makes the player to attack whoever attacks them */
    setHeedThreats(state: boolean): void;
    /** Makes the character act as the player's hooker */
    setHooker(hooker: Char): void;
    /** Sets whether cops should ignore the player regardless of wanted level */
    setIgnorePolice(state: boolean): void;
    /** Defines whether the player can run fast forever */
    setNeverGetsTired(state: boolean): void;
    /** Sets whether the player is visible or not */
    setVisible(state: boolean): void;
    /** Makes the player to stop looking at the character (022E) */
    stopLooking(): void;
    /** Returns the current vehicle of the player and adds it to the mission cleanup list */
    storeCarIsIn(): Car;
    /** Returns the player's vehicle handle without marking it as used by the script, therefore allowing it to be deleted by the game at any time */
    storeCarIsInNoSave(): Car;
    /** Returns the player's money */
    storeScore(): number;
    /** Returns the player's current wanted level */
    storeWantedLevel(): number;
    /** Rotates the player to face the character */
    turnToFaceChar(char: Char): void;
    /** Rotates the player to face the location */
    turnToFaceCoord(x: number, y: number, z: number): void;
    /** Puts the player at the specified location, removing them from any vehicle they're in */
    warpFromCarToCoord(x: number, y: number, z: number): void;
    /** Puts the player in the specified vehicle */
    warpIntoCar(vehicle: Car): void;
}
declare class Rc {
    /** Destroys the remote-control vehicle */
    static BlowUpBuggy(): void;
    /** Gives control of the remote-control vehicle to the player */
    static GiveCarToPlayer(player: Player, x: number, y: number, z: number, angle: number): void;
    /** Puts the player in control of a remote-control vehicle */
    static GiveModelToPlayer(handle: Player, x: number, y: number, z: number, angle: number, modelId: number): void;
}
declare class Restart {
    /** Adds a new location where the player can respawn after death */
    static AddHospital(x: number, y: number, z: number, heading: number): void;
    /** Adds a new location where the player can respawn after arrest */
    static AddPolice(x: number, y: number, z: number, heading: number): void;
    /** Stops the player from spawning at the override location (016E) */
    static CancelOverride(): void;
    /** Fades the screen and puts the player at the location */
    static CriticalMission(x: number, y: number, z: number, heading: number): void;
    /** Overrides the hospital level (island) */
    static OverrideHospital(levelId: number): void;
    /** Forces this location to be the next respawn location */
    static OverrideNext(x: number, y: number, z: number, heading: number): void;
    /** Overrides the police station level (island) */
    static OverridePolice(levelId: number): void;
    /** Sets whether the next arrest will cause the screen to fade in */
    static SetFadeInAfterNextArrest(state: boolean): void;
    /** Sets whether the next death will cause the screen to fade in */
    static SetFadeInAfterNextDeath(state: boolean): void;
}
declare class ScriptFire {
    constructor(handle: number);
    /** Creates a script fire at the location */
    static Create(x: number, y: number, z: number): ScriptFire;
    /** Creates a script fire on the vehicle */
    static CreateCarFire(vehicle: Car): ScriptFire;
    /** Creates a script fire on the character */
    static CreateCharFire(char: Char): ScriptFire;
    /** Returns true if the script fire has been put out */
    isExtinguished(): boolean;
    /** Removes the script fire */
    remove(): void;
    /** Enables or disables the audio of the script fire */
    setAudio(state: boolean): void;
}
declare class Sound {
    constructor(handle: number);
    /** Creates a continuous sound at the location */
    static AddContinuous(x: number, y: number, z: number, soundId: number): Sound;
    /** Plays a sound with the specified ID at the location */
    static AddOneOffSound(x: number, y: number, z: number, soundId: number): void;
    /** Stops the sound */
    remove(): void;
}
declare class Sphere {
    constructor(handle: number);
    /** Creates a static sphere at the location, with the specified radius */
    static Create(x: number, y: number, z: number, radius: number): Sphere;
    /** Displays a red cylinder sphere */
    static Draw(x: number, y: number, z: number, radius: number): void;
    /** Destroys a static sphere */
    remove(): void;
}
declare class Stat {
    /** Increases the progress made stat by the specified amount */
    static PlayerMadeProgress(progress: number): void;
    /** Saves the fastest time to the Multistorey Mayhem stat */
    static Register4X4MayhemTime(timeInSec: number): void;
    /** Saves the fastest time to the Patriot Playground stat */
    static Register4X4OneTime(timeInSec: number): void;
    /** Saves the fastest time to the Gripped! stat */
    static Register4X4ThreeTime(timeInSec: number): void;
    /** Saves the fastest time to the A Ride In The Park stat */
    static Register4X4TwoTime(timeInSec: number): void;
    /** Saves the highest paramedic mission level stat */
    static RegisterAmbulanceLevel(highestLevel: number): void;
    /** Increments the number of criminals killed on Vigilante mission stat by 1 */
    static RegisterCriminalCaught(): void;
    /** Saves the time for bomb defusal stat */
    static RegisterDefuseBombTime(timeInSec: number): void;
    /** Saves the best time in Turismo stat */
    static RegisterElBurroTime(timeInSec: number): void;
    /** Updates the stat if the value is lower than the current stat value */
    static RegisterFastestTime(statId: number, value: number): void;
    /** Increments the number of fires extinguished stat by 1 */
    static RegisterFireExtinguished(): void;
    /** Updates the stat if the value is higher than the current stat value */
    static RegisterHighestScore(statId: number, value: number): void;
    /** Saves the highest insane jump distance stat */
    static RegisterJumpDistance(distance: number): void;
    /** Saves the highest insane jump flips stat */
    static RegisterJumpFlips(flips: number): void;
    /** Saves the highest insane jump height stat */
    static RegisterJumpHeight(height: number): void;
    /** Saves the highest insane jump rotation stat */
    static RegisterJumpSpins(spins: number): void;
    /** Saves the best insane stunt stat */
    static RegisterJumpStunt(stunt: number): void;
    /** Increments the number of rampages passed stat by 1 */
    static RegisterKillFrenzyPassed(): void;
    /** Increments the number of people saved in an ambulance stat by 1 */
    static RegisterLifeSaved(): void;
    /** Saves the longest flight in Dodo stat */
    static RegisterLongestDodoFlight(timeInSec: number): void;
    /** Increments the number of mission attempts stat by 1 */
    static RegisterMissionGiven(): void;
    /** Sets the GXT of the last mission passed */
    static RegisterMissionPassed(key: string): void;
    /** Adds the value to the cash made in taxi stat */
    static RegisterMoneyMadeTaxi(cashAmount: number): void;
    /** Increments the number of passengers dropped off stat by 1 */
    static RegisterPassengerDroppedOffTaxi(): void;
    /** Increments the completed number of unique stunt jumps stat by 1 */
    static RegisterUniqueJumpFound(): void;
    /** Sets Staunton Island as complete */
    static SetCommercialPassed(): void;
    /** Sets Portland as complete */
    static SetIndustrialPassed(): void;
    /** Sets the maximum progress the player can reach */
    static SetProgressTotal(maxProgress: number): void;
    /** Sets Shoreside Vale as complete */
    static SetSuburbanPassed(): void;
    /** Sets the total number of rampages passed stat */
    static SetTotalNumberOfKillFrenzies(total: number): void;
    /** Sets the total number of missions that can be completed */
    static SetTotalNumberOfMissions(numMissions: number): void;
    /** Sets the total number of unique stunt jumps stat */
    static SetUniqueJumpsTotal(total: number): void;
}
declare class Streaming {
    /** Returns true if the model is available for creation */
    static HasModelLoaded(modelId: number): boolean;
    /** Returns true if the special character's model (023C) is available for creation */
    static HasSpecialCharacterLoaded(slotId: number): boolean;
    /** Returns true if the level (island) collision is loaded (03F7) */
    static IsCollisionInMemory(level: number): boolean;
    /** Loads any requested models (0247 or 0353) synchronously */
    static LoadAllModelsNow(): void;
    /** Loads the level (island) collision */
    static LoadCollision(level: number): void;
    /** Loads a level (island) collision with a greeting message */
    static LoadCollisionWithScreen(level: number): void;
    /** Starts loading a specific location, just like if the player was there, removing LOD textures */
    static LoadScene(x: number, y: number, z: number): void;
    /** Requests a special character's model to be loaded into the specified slot */
    static LoadSpecialCharacter(slotId: number, modelName: string): void;
    /** Loads a model with the given name as a cutscene model id (GTA III: 185-189, VC: 295-299) */
    static LoadSpecialModel(cutsceneModelId: number, modelName: string): void;
    /** Releases the specified model, freeing game memory */
    static MarkModelAsNoLongerNeeded(modelId: number): void;
    /** Requests a new model to load */
    static RequestModel(modelId: number): void;
    /** Sets the streaming of additional models like peds, cars, and maps */
    static Switch(state: boolean): void;
    /** Releases the special character (023C), freeing game memory */
    static UnloadSpecialCharacter(slotId: number): void;
}
declare class StuckCarCheck {
    /** Adds the vehicle to the stuck cars array */
    static Add(vehicle: Car, distance: number, duration: number): void;
    /** Returns true if the car is stuck */
    static IsCarStuck(vehicle: Car): boolean;
    /** Removes the vehicle from the stuck cars array */
    static Remove(vehicle: Car): void;
}
declare class Text {
    /** Removes the text box from the screen */
    static ClearHelp(): void;
    /** Clears all priority text and some styles of big texts */
    static ClearPrints(): void;
    /** Clears small messages from the screen */
    static ClearSmallPrints(): void;
    /** Removes the styled text from the screen */
    static ClearThisBigPrint(key: string): void;
    /** Removes the priority text from the screen */
    static ClearThisPrint(key: string): void;
    /** Draws text at the specified on-screen position */
    static Display(offsetLeft: number, offsetTop: number, key: string): void;
    /** Draws text with 2 numbers */
    static DisplayWith2Numbers(offsetLeft: number, offsetTop: number, key: string, num1: number, num2: number): void;
    /** Draws text with 1 number */
    static DisplayWithNumber(offsetLeft: number, offsetTop: number, key: string, num: number): void;
    /** Displays a message positioned on the bottom of the screen for the specified time */
    static Print(key: string, time: number, flag: number): void;
    /** Displays a styled message for the specified time */
    static PrintBig(key: string, time: number, style: number): void;
    /** Displays a low-priority styled message for the specified time */
    static PrintBigQ(key: string, duration: number, style: number): void;
    /** Displays a black text box for a few seconds */
    static PrintHelp(key: string): void;
    /** Displays a message positioned on the bottom of the screen for the specified time */
    static PrintNow(key: string, time: number, flag: number): void;
    /** Displays a message for the specified time when there are no other messages being printed */
    static PrintSoon(key: string, time: number, flag: number): void;
    /** Displays a styled message in which the first string token ~a~ is substituted with the specified text */
    static PrintStringInString(templateKey: string, replacementKey: string, duration: number, style: number): void;
    /** Displays a styled message in which the first string token ~a~ is substituted with the specified text */
    static PrintStringInStringNow(templateKey: string, replacementKey: string, duration: number, style: number): void;
    /** Displays a styled message in which the first two ~1~ tokens are substituted with the specified numbers */
    static PrintWith2Numbers(key: string, num1: number, num2: number, duration: number, style: number): void;
    /** Displays a styled message in which the first two ~1~ tokens are substituted with the specified numbers */
    static PrintWith2NumbersBig(key: string, num1: number, num2: number, duration: number, style: number): void;
    /** Displays a styled message in which the first two ~1~ tokens are substituted with the specified numbers */
    static PrintWith2NumbersNow(key: string, num1: number, num2: number, duration: number, style: number): void;
    /** Displays a styled message with the 2 specified numbers when there are no other messages being printed */
    static PrintWith2NumbersSoon(key: string, num1: number, num2: number, duration: number, style: number): void;
    /** Displays a styled message in which the first three ~1~ tokens are substituted with the specified numbers */
    static PrintWith3Numbers(key: string, num1: number, num2: number, num3: number, duration: number, style: number): void;
    /** Displays a styled message in which the first three ~1~ tokens are substituted with the specified numbers */
    static PrintWith3NumbersBig(key: string, num1: number, num2: number, num3: number, duration: number, style: number): void;
    /** Displays a styled message in which the first three ~1~ tokens are substituted with the specified numbers */
    static PrintWith3NumbersNow(key: string, num1: number, num2: number, num3: number, duration: number, style: number): void;
    /** Displays a styled message in which the first four ~1~ tokens are substituted with the specified numbers */
    static PrintWith4Numbers(key: string, num1: number, num2: number, num3: number, num4: number, duration: number, style: number): void;
    /** Displays a styled message in which the first four ~1~ tokens are substituted with the specified numbers */
    static PrintWith4NumbersBig(key: string, num1: number, num2: number, num3: number, num4: number, duration: number, style: number): void;
    /** Displays a styled message in which the first four ~1~ tokens are substituted with the specified numbers */
    static PrintWith4NumbersNow(key: string, num1: number, num2: number, num3: number, num4: number, duration: number, style: number): void;
    /** Displays a styled message in which the first five ~1~ tokens are substituted with the specified numbers */
    static PrintWith5Numbers(key: string, num1: number, num2: number, num3: number, num4: number, num5: number, duration: number, style: number): void;
    /** Displays a styled message in which the first five ~1~ tokens are substituted with the specified numbers */
    static PrintWith5NumbersBig(key: string, num1: number, num2: number, num3: number, num4: number, num5: number, duration: number, style: number): void;
    /** Displays a styled message in which the first five ~1~ tokens are substituted with the specified numbers */
    static PrintWith5NumbersNow(key: string, num1: number, num2: number, num3: number, num4: number, num5: number, duration: number, style: number): void;
    /** Displays a styled message in which the first six ~1~ tokens are substituted with the specified numbers */
    static PrintWith6Numbers(key: string, num1: number, num2: number, num3: number, num4: number, num5: number, num6: number, duration: number, style: number): void;
    /** Displays a styled message in which the first six ~1~ tokens are substituted with the specified numbers */
    static PrintWith6NumbersBig(key: string, num1: number, num2: number, num3: number, num4: number, num5: number, num6: number, duration: number, style: number): void;
    /** Displays a styled message in which the first six ~1~ tokens are substituted with the specified numbers */
    static PrintWith6NumbersNow(key: string, num1: number, num2: number, num3: number, num4: number, num5: number, num6: number, duration: number, style: number): void;
    /** Displays a styled message in which the first string token ~1~ is substituted with the specified number */
    static PrintWithNumber(key: string, num: number, duration: number, flag: number): void;
    /** Displays a styled message in which the first string token~1~ is substituted with the specified number */
    static PrintWithNumberBig(key: string, num: number, duration: number, style: number): void;
    /** Displays a low-priority styled message in which the first string token~1~ is replaced with the specified number */
    static PrintWithNumberBigQ(key: string, num: number, duration: number, style: number): void;
    /** Displays a styled message in which the first string token ~1~ is substituted with the specified number */
    static PrintWithNumberNow(key: string, num: number, duration: number, flag: number): void;
    /** Gives the text a background (0346) */
    static SetBackground(state: boolean): void;
    /** Sets the color of the background of the text */
    static SetBackgroundColor(r: number, g: number, b: number, a: number): void;
    /** Sets the background of the text to enclose centered text (0342 and 0346) */
    static SetBackgroundOnlyText(state: boolean): void;
    /** Centers the text */
    static SetCenter(state: boolean): void;
    /** Sets the line width of the centered text */
    static SetCenterSize(width: number): void;
    /** Sets the color of the text letters */
    static SetColor(red: number, green: number, blue: number, alpha: number): void;
    /** Causes the next text to be drawn before the fade is drawn */
    static SetDrawBeforeFade(state: boolean): void;
    /** Sets the text draw font */
    static SetFont(font: number): void;
    /** Sets the text to be drawn justified, which means the text will wrap in order to fill an even rectangle of space */
    static SetJustify(state: boolean): void;
    /** Makes the text size proportionate */
    static SetProportional(state: boolean): void;
    /** Sets the text draw to be aligned to the right */
    static SetRightJustify(state: boolean): void;
    /** Scales the width and height of the text letters */
    static SetScale(widthScale: number, heightScale: number): void;
    /** Sets the line width of the text */
    static SetWrapX(width: number): void;
    /** Enables text and texture drawing */
    static UseCommands(state: boolean): void;
}
declare class Txd {
    /** Loads the texture dictionary for use in drawing sprites (038D) on the screen */
    static LoadDictionary(name: string): void;
    /** Loads a sprite from the most recently loaded texture dictionary (0390) */
    static LoadSprite(memorySlot: number, spriteName: string): void;
    /** Unloads all currently loaded textures (038F), as well as texture dictionaries (0390), freeing game memory */
    static Remove(): void;
}
declare class Weather {
    /** Forces the game weather to the specified type */
    static Force(type: number): void;
    /** Forces the upcoming weather to the specified type */
    static ForceNow(type: number): void;
    /** Forces rain everywhere */
    static ForceRain(state: boolean): void;
    /** Allows the game to continue its usual weather pattern after using 01B5 */
    static Release(): void;
    /** Restores the weather previously saved with 0251 */
    static Restore(): void;
    /** Saves the weather (type, interpolation value and the amount of rain fallen) */
    static Store(): void;
}
declare class World {
    /** Returns the handle of an object with the specified model located in the 2D area, or -1 otherwise */
    static GetClosestObjectOfType(x: number, y: number, z: number, range: number, modelId: number): Object;
    /** Returns the handle of a random car with the specified model in the specified 2D area, or -1 otherwise */
    static GetRandomCarOfTypeInArea(leftBottomX: number, leftBottomY: number, rightTopX: number, rightTopY: number, modelId: number): Car;
    /** Returns the handle of a random vehicle with the specified model in the specified map zone, or -1 otherwise */
    static GetRandomCarOfTypeInZone(zone: string, modelId: number): Car;
    /** Returns the handle of a random pedestrian in the specified 2D area, or -1 otherwise */
    static GetRandomCharInArea(leftBottomX: number, leftBottomY: number, rightTopX: number, rightTopY: number): Char;
    /** Returns the handle of a random law enforcement pedestrian in the 2D area, or -1 otherwise */
    static GetRandomCopInArea(leftBottomX: number, leftBottomY: number, rightTopX: number, rightTopY: number): Char;
    /** Clears the area, removing all vehicles and pedestrians */
    static ClearArea(x: number, y: number, z: number, radius: number, clearParticles: boolean): void;
    /** Clears all cars in the specified 3D area */
    static ClearAreaOfCars(leftBottomX: number, leftBottomY: number, leftBottomZ: number, rightTopX: number, rightTopY: number, rightTopZ: number): void;
    /** Clears all pedestrians from the given area */
    static ClearAreaOfChars(leftBottomX: number, leftBottomY: number, leftBottomZ: number, rightTopX: number, rightTopY: number, rightTopZ: number): void;
    /** Starts spawning random cars at the specified location */
    static CreateRandomCarForCarPark(x: number, y: number, z: number, heading: number): void;
    /** Destroys all projectiles in the specified 3D area */
    static DestroyProjectilesInArea(leftBottomX: number, leftBottomY: number, leftBottomZ: number, rightTopX: number, rightTopY: number, rightTopZ: number): boolean;
    /** Forces the game to spawn only pedestrians of the given type */
    static ForceRandomPedType(pedType: number): void;
    /** Stores the ground position at the location */
    static GetGroundZFor3DCoord(x: number, y: number, z: number): number;
    /** Returns true if there is anything with the specified properties within the 3D area */
    static IsAreaOccupied(leftBottomX: number, leftBottomY: number, leftBottomZ: number, rightTopX: number, rightTopY: number, rightTopZ: number, solid: boolean, car: boolean, char: boolean, object: boolean, particle: boolean): boolean;
    /** Returns true if there is an explosion of the specified type in the 3D area */
    static IsExplosionInArea(explosionType: number, leftBottomX: number, leftBottomY: number, leftBottomZ: number, rightTopX: number, rightTopY: number, rightTopZ: number): boolean;
    /** Returns true if an explosion of the specified type in the map zone */
    static IsExplosionInZone(explosionType: number, zone: string): boolean;
    /** Returns true if there is a vehicle in the specified area */
    static IsPointObscuredByAMissionEntity(x: number, y: number, z: number, radiusX: number, radiusY: number, radiusZ: number): boolean;
    /** Returns true if a projectile is in the specified 3D area */
    static IsProjectileInArea(leftBottomX: number, leftBottomY: number, leftBottomZ: number, rightTopX: number, rightTopY: number, rightTopZ: number): boolean;
    /** Returns true if a sniper bullet is in the specified area */
    static IsSniperBulletInArea(leftBottomX: number, leftBottomY: number, leftBottomZ: number, rightTopX: number, rightTopY: number, rightTopZ: number): boolean;
    /** Returns true if a sniper bullet is flying in the specified 2D area */
    static LocateSniperBullet2D(leftBottomX: number, leftBottomY: number, rightTopX: number, rightTopY: number, drawSphere: boolean): boolean;
    /** Returns true if a sniper bullet is flying in the specified 3D area */
    static LocateSniperBullet3D(leftBottomX: number, leftBottomY: number, leftBottomZ: number, topRightX: number, topRightY: number, topRightZ: number, drawSphere: boolean): boolean;
    /** Removes all script fires (02CF) */
    static RemoveAllScriptFires(): void;
    /** Removes all particle effects (02A2 or 039D) in the specified area */
    static RemoveParticleEffectsInArea(leftBottomX: number, leftBottomY: number, leftBottomZ: number, rightTopX: number, rightTopY: number, rightTopZ: number): void;
    /** Sets the quantity of traffic that will spawn in the game */
    static SetCarDensityMultiplier(multiplier: number): void;
    /** Sets the quantity of pedestrians to spawn in the game */
    static SetPedDensityMultiplier(multiplier: number): void;
    /** Sets the visibility of the object closest to the specified coordinates, matching the specified model */
    static SetVisibilityOfClosestObjectOfType(x: number, y: number, z: number, radius: number, modelId: number, state: boolean): void;
    /** Swaps a map model with another map model nearest to the center of the search area */
    static SwapNearestBuildingModel(x: number, y: number, z: number, radius: number, fromModelId: number, toModelId: number): void;
    /** Sets whether the game should render the world or only the cutscene objects */
    static SwitchProcessing(state: boolean): void;
    /** Toggles garbage on the streets */
    static SwitchRubbish(state: boolean): void;
}
declare class Zone {
    /** Returns the handle of a random pedestrian in the map zone */
    static GetRandomChar(zone: string): Char;
    /** Returns the handle of a random law enforcement ped in the map zone */
    static GetRandomCop(zone: string): Char;
    /** Sets the traffic density in the specified map zone during the day or at night */
    static SetCarDensity(zone: string, dayOrNight: number, density: number): void;
    /** Sets the map zone's peds, gangs, and cops traffic density */
    static SetCarInfo(zone: string, dayOrNight: number, density: number, mafia: number, triad: number, diablo: number, yakuza: number, yardie: number, colombian: number, hood: number, cop: number, poor: number, rich: number, executive: number, worker: number, special: number, big: number): void;
    /** Assigns one of the ped groups defined in pedgrp.dat to the map zone */
    static SetGroup(zone: string, dayOrNight: number, pedGroup: number): void;
    /** Sets the peds density in the specified map zone during the day or at night */
    static SetPedDensity(zone: string, dayOrNight: number, density: number): void;
    /** Sets the map zone's peds, gangs, and cops density */
    static SetPedInfo(zone: string, dayOrNight: number, density: number, mafia: number, triad: number, diablo: number, yakuza: number, yardie: number, colombian: number, hood: number, cop: number): void;
}
declare class Boat extends Car {
    constructor(handle: number);
    /** Makes the boat stay motionless in the water */
    anchor(state: boolean): void;
    /** Makes the boat sail to the location */
    goto(x: number, y: number, z: number): void;
    /** Sets the boat's max speed */
    setCruiseSpeed(maxSpeed: number): void;
    /** Turns off the car's engine */
    stop(): void;
}
