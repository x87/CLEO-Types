// Sanny Builder Library v0.117
declare class Audio {
    /** Unloads the mission audio (03CF), freeing game memory */
    static ClearMissionAudio(slotId: number): void;
    /** Returns true if the audio (03CF) is no longer playing */
    static HasMissionAudioFinished(slotId: number): boolean;
    /** Returns true if the mission audio has loaded (03CF) */
    static HasMissionAudioLoaded(slotId: number): boolean;
    /** Loads the end of game music */
    static LoadEndOfGameTune(): void;
    /** Loads the file from the audio directory */
    static LoadMissionAudio(slotId: number, name: string): void;
    /** Plays an announcement audio */
    static PlayAnnouncement(track: number): void;
    /** Plays the theme tune */
    static PlayEndOfGameTune(): void;
    /** Plays the loaded sound (03CF) */
    static PlayMissionAudio(slotId: number): void;
    /** Plays an audio file with the specified ID from the Audio directory */
    static PlayMissionPassedTune(soundId: number): void;
    /** Plays police radio message audio reporting the suspect has last been seen at the specified location */
    static PoliceRadioMessage(x: number, y: number, z: number): void;
    /** Sets the location of the mission audio (03CF) where it can be heard */
    static SetMissionAudioPosition(slotId: number, x: number, y: number, z: number): void;
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
    /** Adds a blip and a marker to the pickup */
    static AddForPickup(pickup: Pickup): Blip;
    /** Adds a contact sprite blip for the specified coordinates */
    static AddShortRangeSpriteForContactPoint(x: number, y: number, z: number, sprite: number): Blip;
    /** Adds a sprite blip for the specified coordinates */
    static AddShortRangeSpriteForCoord(x: number, y: number, z: number, sprite: number): Blip;
    /** Adds a sprite blip to the contact point */
    static AddSpriteForContactPoint(x: number, y: number, z: number, sprite: number): Blip;
    /** Adds a sprite blip to the location */
    static AddSpriteForCoord(x: number, y: number, z: number, sprite: number): Blip;
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
    /** Returns the debug camera position */
    static GetDebugCoordinates(): {
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
    /** Sets the near clip */
    static SetNearClip(value: number): void;
    /** Sets how far behind the camera is from the player */
    static SetZoom(zoom: number): void;
    /** Shakes the camera with the given intensity */
    static Shake(intensity: number): void;
    /** Displays a white interference overlay on the screen */
    static SwitchLift(state: boolean): void;
    /** Displays a green scan line overlay on the screen */
    static SwitchSecurity(state: boolean): void;
}
declare class Car {
    constructor(handle: number);
    /** Creates a vehicle at the specified location, with the specified model */
    static Create(modelId: number, x: number, y: number, z: number): Car;
    /** Returns true if the handle is an invalid vehicle handle or the vehicle has been destroyed (wrecked) */
    static IsDead(handle: number): boolean;
    /** Sets the variation of the next car to be created */
    static SetModelComponents(_unused: number, component1: number, component2: number): void;
    /** Activates upside-down car check for the car */
    addUpsidedownCheck(): void;
    /** Deflates the car's tire */
    burstTire(tireId: number): void;
    /** Sets the car's primary and secondary colors */
    changeColor(primaryColor: number, secondaryColor: number): void;
    /** Clears the vehicle's last weapon damage (see 031E) */
    clearLastWeaponDamage(): void;
    /** Closes all car doors, hoods and boots */
    closeAllDoors(): void;
    /** Removes the vehicle from the game */
    delete(): void;
    /** Disarms the car's bomb */
    disarmBomb(): void;
    /** Makes the vehicle explode */
    explode(): void;
    /** Locks the vehicle's position */
    freezePosition(state: boolean): void;
    /** Makes the car maintain its position */
    freezePositionAndDontLoadCollision(state: boolean): void;
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
    /** Returns the coordinates of an offset of the vehicle's position, depending on the vehicle's rotation */
    getOffsetInWorldCoords(xOffset: number, yOffset: number, zOffset: number): {
        x: number;
        y: number;
        z: number;
    };
    /** Gets the car's speed */
    getSpeed(): number;
    /** Makes the AI drive to the specified location by any means */
    gotoCoordinates(x: number, y: number, z: number): void;
    /** Makes the AI drive to the specified location obeying the traffic rules */
    gotoCoordinatesAccurate(x: number, y: number, z: number): void;
    /** Returns true if the vehicle has been hit by the specified weapon */
    hasBeenDamagedByWeapon(weaponType: number): boolean;
    /** Returns true if the car's health is over the specified value */
    isHealthGreater(health: number): boolean;
    /** Returns true if the vehicle's siren is on */
    isIcecreamJingleOn(): boolean;
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
    /** Returns true if the car is burning */
    isOnFire(): boolean;
    /** Returns true if the car is visible */
    isOnScreen(): boolean;
    /** Returns true if the specified car seat is empty */
    isPassengerSeatFree(seatIndex: number): boolean;
    /** Returns true if the vehicle is not moving */
    isStopped(): boolean;
    isStoppedInArea2D(leftBottomX: number, leftBottomY: number, rightTopX: number, rightTopY: number, drawSphere: boolean): boolean;
    isStoppedInArea3D(leftBottomX: number, leftBottomY: number, leftBottomZ: number, rightTopX: number, rightTopY: number, rightTopZ: number, drawSphere: boolean): boolean;
    /** Returns true if the car has been upside down for more than 2 seconds (requires 0190) */
    isStuckOnRoof(): boolean;
    /** Returns true if the car's tire is deflated */
    isTireBurst(tireId: number): boolean;
    /** Returns true if the vehicle is in the normal position (upright) */
    isUpright(): boolean;
    /** Returns true if the car is upside down */
    isUpsidedown(): boolean;
    isWaitingForWorldCollision(): boolean;
    locate2D(x: number, y: number, xRadius: number, yRadius: number, drawSphere: boolean): boolean;
    locate3D(x: number, y: number, z: number, xRadius: number, yRadius: number, zRadius: number, drawSphere: boolean): boolean;
    locateStopped2D(x: number, y: number, xRadius: number, yRadius: number, drawSphere: boolean): boolean;
    /** Returns true if the car is stopped in the radius of the specified point */
    locateStopped3D(x: number, y: number, z: number, xRadius: number, yRadius: number, zRadius: number, drawSphere: boolean): boolean;
    /** Sets the locked status of the car's doors */
    lockDoors(lockStatus: number): void;
    /** Marks the car as being part of a convoy, which seems to follow a path set by 0994 */
    markAsConvoyCar(state: boolean): void;
    /** Allows the vehicle to be deleted by the game if necessary, and also removes it from the mission cleanup list, if applicable */
    markAsNoLongerNeeded(): void;
    /** Opens the car's trunk and keeps it open */
    popBoot(): void;
    /** Opens the trunk/boot door component of the vehicle */
    popBootUsingPhysics(): void;
    /** Deactivates upside-down car check (0190) for the car */
    removeUpsidedownCheck(): void;
    /** Sets the driver and all passengers' objective to leave the vehicle */
    setAllOccupantsLeave(): void;
    /** Sets whether the vehicle will avoid paths between levels (0426) */
    setAvoidLevelTransitions(state: boolean): void;
    /** Sets whether the car receives damage */
    setCanBeDamaged(state: boolean): void;
    /** Sets whether the car's tires can be deflated */
    setCanBurstTires(state: boolean): void;
    /** Enables or disables the ability to Pay'n'Spray the car */
    setCanRespray(state: boolean): void;
    /** Set's whether the AI driver will occupy the fast (left) lane on a two-way road */
    setChangeLane(state: boolean): void;
    /** Puts the vehicle at the specified location */
    setCoordinates(x: number, y: number, z: number): void;
    /** Sets the vehicle's max speed */
    setCruiseSpeed(maxSpeed: number): void;
    /** Sets the behavior of the vehicle's AI driver */
    setDrivingStyle(drivingStyle: number): void;
    /** Sets the speed of the car */
    setForwardSpeed(forwardSpeed: number): void;
    /** Sets the vehicle's heading (z-angle) */
    setHeading(heading: number): void;
    /** Sets the vehicle's health */
    setHealth(health: number): void;
    /** Sets whether the car is heavy */
    setHeavy(state: boolean): void;
    /** Sets the car's mission to idle (MISSION_NONE), stopping any driving activity */
    setIdle(): void;
    setLoadCollisionFlag(state: boolean): void;
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
    /** Sets the car on a specific route */
    setRandomRouteSeed(routeSeed: number): void;
    /** Sets the car's status */
    setStatus(status: number): void;
    /** Sets the minimum distance for the AI driver to start ignoring car paths and go straight to the target */
    setStraightLineDistance(distance: number): void;
    /** Makes the car more resistant to collisions */
    setStrong(state: boolean): void;
    /** Sets whether the taxi's roof light is on */
    setTaxiLights(state: boolean): void;
    /** Makes the AI driver perform the action in the vehicle for the specified period of time */
    setTempAction(actionId: number, timeInMs: number): void;
    /** Sets the alpha transparency of a distant vehicle */
    setToFadeIn(alpha: number): void;
    /** Overrides the default vehicle traction value of 1.0 */
    setTraction(traction: number): void;
    /** Disables the car from exploding when it is upside down, as long as the player is not in the vehicle */
    setUpsidedownNotDamaged(state: boolean): void;
    /** Makes the vehicle watertight, meaning characters inside will not be harmed if the vehicle is submerged in water */
    setWatertight(state: boolean): void;
    /** Sets whether the car's alarm can be activated */
    switchSiren(state: boolean): void;
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
    /** Creates a driver in the vehicle */
    static CreateRandomAsDriver(vehicle: Car): Char;
    /** Creates a random character in the passenger seat of the vehicle */
    static CreateRandomAsPassenger(vehicle: Car, seatId: number): Char;
    /** Returns true if the handle is a valid character handle */
    static DoesExist(handle: number): boolean;
    /** Returns true if the handle is an invalid character handle or the character is dead (wasted) */
    static IsDead(handle: number): boolean;
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
    /** Attaches the character to the specified object, in turret mode */
    attachToObject(handle: Object, xOffset: number, yOffset: number, zOffset: number, orientation: number, angleLimit: number, weaponType: number): void;
    /** Returns true if the character sees a dead body of the given type */
    canSeeDeadChar(pedType: number): boolean;
    clearAllAnims(): void;
    clearFollowPath(): void;
    /** Resets the information that the character has bought "ice cream" */
    clearIceCreamPurchase(): void;
    clearLastDamageEntity(): void;
    /** Clears the character's last weapon damage (see 031D) */
    clearLastWeaponDamage(): void;
    /** Resets character's hostility to other ped types (011A) */
    clearThreatSearch(): void;
    /** Stops the idle animation on the character (0372) */
    clearWaitState(): void;
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
    /** Sets the character's follow path */
    followPath(x: number, y: number, z: number, radius: number, moveState: number): void;
    /** Sets whether the character's position remains unchanged */
    freezePosition(state: boolean): void;
    /** Returns the character's armor amount */
    getArmor(): number;
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
    /** Returns the coordinates of the character, with an offset */
    getOffsetInWorldCoords(xOffset: number, yOffset: number, zOffset: number): {
        x: number;
        y: number;
        z: number;
    };
    /** Returns the weapon type, ammo and model from the specified slot */
    getWeaponInSlot(weaponSlotId: number): {
        weaponType: number;
        weaponAmmo: number;
        weaponModel: number;
    };
    /** Gives the character the weapon with the specified amount of ammo */
    giveWeapon(weaponType: number, ammo: number): void;
    /** Checks if the distribution ped has been attracted */
    hasAttemptedAttractor(): boolean;
    /** Returns true if the character has been hurt by the other character */
    hasBeenDamagedByChar(handle: Char): boolean;
    /** Returns true if the character has been hit by the specified weapon */
    hasBeenDamagedByWeapon(weaponType: number): boolean;
    /** Returns true if the character has been photographed */
    hasBeenPhotographed(): boolean;
    /** Returns true if the character has bought "ice cream" */
    hasBoughtIceCream(): boolean;
    /** Returns true if the character has seen the specified player */
    hasSpottedPlayer(player: Player): boolean;
    /** Returns true if the character is holding the given type of weapon */
    isCurrentWeapon(weaponType: number): boolean;
    /** Returns true if the character is taking damage from ocean water while on foot */
    isDrowningInWater(): boolean;
    /** Returns true if the specified character is crouching */
    isDucking(): boolean;
    /** Returns true if the character's health is over the specified value */
    isHealthGreater(health: number): boolean;
    /** Returns true if the character has a vehicle, even if they are not actually sat inside it (opening and closing the door) */
    isInAnyCar(): boolean;
    /** Returns true if the character is driving a police vehicle */
    isInAnyPoliceVehicle(): boolean;
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
    /** Returns true if the character is driving a vehicle with the specified model */
    isInModel(modelId: number): boolean;
    /** Returns true if the character is part of the leader's group (01DF) */
    isInPlayersGroup(leader: Player): boolean;
    /** Returns true if the character is in water */
    isInWater(): boolean;
    /** Returns true if the character is in the specified map zone */
    isInZone(zone: string): boolean;
    isLeavingVehicleToDie(): boolean;
    /** Returns true if the character is male */
    isMale(): boolean;
    /** Returns true if the character's model ID is equivalent to the model ID passed */
    isModel(modelId: number): boolean;
    /** Returns true if the character has no objective (011C) */
    isObjNoObj(): boolean;
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
    /** Returns true if the character is sitting in any vehicle */
    isSittingInAnyCar(): boolean;
    /** Returns true if the character is sitting in the specified vehicle */
    isSittingInCar(vehicle: Car): boolean;
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
    isStuck(): boolean;
    isWaitingForWorldCollision(): boolean;
    isWanderPathClear(x: number, y: number, z: number, radius: number): boolean;
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
    /** Removes the characters weapons */
    removeAllWeapons(): void;
    /** Removes the character with a fade, freeing game memory */
    removeElegantly(): void;
    /** Affects how often the character will hit the target when attacking with a weapon */
    setAccuracy(accuracy: number): void;
    /** Sets the animation group for the character */
    setAnimGroup(animGroup: number): void;
    setAnsweringMobile(state: boolean): void;
    /** Makes the character follow the leader player */
    setAsLeader(leader: Player): void;
    /** Sets whether the character ignores the player's crimes */
    setAsPlayerFriend(player: Player, state: boolean): void;
    /** Makes a character bleed */
    setBleeding(state: boolean): void;
    /** Sets the character be damageable by members of the gang */
    setCanBeDamagedByMembersOfGang(gangId: number, state: boolean): void;
    /** Makes the character immune to a damage while in a vehicle */
    setCanBeShotInVehicle(state: boolean): void;
    /** Locks the character while in a car */
    setCantBeDraggedOut(state: boolean): void;
    /** Sets the maximum time the character can withstand the damage */
    setCeaseAttackTimer(timer: number): void;
    /** Puts the character at the specified location */
    setCoordinates(x: number, y: number, z: number): void;
    /** Makes the character crouch */
    setCrouch(state: boolean, time: number): void;
    setCrouchWhenThreatened(state: boolean): void;
    /** Sets the character's currently held weapon */
    setCurrentWeapon(weaponType: number): void;
    /** Controls whether the character can drown in water */
    setDrownsInWater(state: boolean): void;
    setFrightenedInJackedCar(state: boolean): void;
    /** Sets the character's heading (z-angle) */
    setHeading(heading: number): void;
    /** Sets the character's health */
    setHealth(health: number): void;
    /** Makes the character attack whoever attacks them */
    setHeedThreats(state: boolean): void;
    /** Sets the character's objective to stay idle */
    setIdle(): void;
    setIgnoreThreatsBehindObjects(state: boolean): void;
    setInPlayersGroupCanFight(state: boolean): void;
    /** Sets whether the character is a psychotic killer or not */
    setIsChrisCriminal(state: boolean): void;
    setLoadCollisionFlag(state: boolean): void;
    /** Sets the character's cash sum, setting how much cash they will drop when dead */
    setMoney(amount: number): void;
    /** Sets whether the character won't be targeted by the autoaim system */
    setNeverTargetted(state: boolean): void;
    /** Sets the character's objective to aim the current weapon at the target character */
    setObjAimGunAtChar(target: Char): void;
    /** Makes the character approach the distribution vehicle to buy "ice cream" and returns the status of this attempt */
    setObjBuyIceCream(distributionCar: Car): number;
    /** Sets the character's objective to destroy the vehicle */
    setObjDestroyCar(vehicle: Car): void;
    /** Sets the character's objective to destroy the object */
    setObjDestroyObject(handle: Object): void;
    /** Sets the character's objective to enter the vehicle as a driver */
    setObjEnterCarAsDriver(vehicle: Car): void;
    /** Sets the character's objective to enter the vehicle as a passenger */
    setObjEnterCarAsPassenger(vehicle: Car): void;
    /** Makes the character leave their car and run away from it */
    setObjFleeCar(vehicle: Car): void;
    /** Sets the character's objective to walk away forever and stay away from the target character */
    setObjFleeCharOnFootAlways(target: Char): void;
    /** Sets the character's objective to run away */
    setObjFleeOnFootTillSafe(): void;
    /** Sets the character's objective to walk away forever and stay away from the target player */
    setObjFleePlayerOnFootAlways(target: Player): void;
    /** Sets the character's objective to escape on foot and stay away from the target player until it is safe */
    setObjFleePlayerOnFootTillSafe(target: Player): void;
    /** Sets the character's objective to follow along the specified route */
    setObjFollowRoute(routeId: number, mode: number): void;
    /** Sets the character's objective to walk towards the target character */
    setObjGotoCharOnFoot(target: Char): void;
    /** Sets the character's objective to walk at the specified location */
    setObjGotoCoordOnFoot(x: number, y: number): void;
    /** Sets the character's objective to walk towards the target player */
    setObjGotoPlayerOnFoot(target: Player): void;
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
    /** Sets the character's objective to leave the car they are in */
    setObjLeaveAnyCar(): void;
    /** Sets the character's objective to leave the vehicle */
    setObjLeaveCar(vehicle: Car): void;
    /** Clears the character's current objective */
    setObjNoObj(): void;
    /** Sets the character's objective to run at the specified location */
    setObjRunToCoord(x: number, y: number): void;
    setObjSprintToCoord(x: number, y: number): void;
    /** Sets the character's objective to find any traffic vehicle nearby and take the driver's seat */
    setObjStealAnyCar(): void;
    /** Sets the character's objective to stay idle on foot */
    setObjWaitOnFoot(): void;
    /** Sets the character's objective to walk towards the target character */
    setObjWalkToChar(target: Char): void;
    /** Makes a character immune to everything except the player */
    setOnlyDamagedByPlayer(state: boolean): void;
    /** Sets the ped stat of the character */
    setPersonality(pedstat: number): void;
    /** Sets the character's immunities */
    setProofs(bulletProof: boolean, fireProof: boolean, explosionProof: boolean, collisionProof: boolean, meleeProof: boolean): void;
    /** Makes the character run */
    setRunning(state: boolean): void;
    /** Moves the character from a passenger seat to the driver seat */
    setShuffleIntoDriversSeat(): void;
    /** Makes the character stay in the vehicle when it is jacked (characters let themselves get "kidnapped") */
    setStayInCarWhenJacked(state: boolean): void;
    /** Makes the character maintain their position when attacked */
    setStayInSamePlace(state: boolean): void;
    setStopShootDontSeekEntity(state: boolean): void;
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
    /** Sets the character ability to talk */
    shutUp(state: boolean): void;
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
    /** Creates an effect of a heli blowing up dust on the ground */
    static CreateDustEffectForHeli(heliObject: CutsceneObject, radius: number, density: number): void;
    static DisableShadows(): void;
    /** Returns the time in milliseconds passed since the cutscene has started (02E7) */
    static GetTime(): number;
    /** Returns true if the cutscene has finished */
    static HasFinished(): boolean;
    /** Loads the data for the specified cutscene */
    static Load(name: string): void;
    static LoadUncompressedAnim(animation: string): void;
    /** Sets the cutscene animation to loop endlessly */
    static SetAnimToLoop(animName: string): void;
    /** Sets the position for a cutscene */
    static SetOffset(x: number, y: number, z: number): void;
    /** Starts the loaded cutscene (02E4) */
    static Start(): void;
    /** Returns true if the cutscene was skipped */
    static WasSkipped(): boolean;
}
declare class CutsceneObject {
    constructor(handle: number);
    /** Creates a new cutscene object with the model */
    static Create(modelId: number): CutsceneObject;
    /** Attaches the cutscene object to the cutscene character's bone */
    attachToBone(char: CutsceneObject, boneId: number): void;
    /** Attaches the cutscene object to the cutscene character's frame */
    attachToComponent(char: CutsceneObject, frameName: string): void;
    /** Attaches the cutscene object to the vehicle */
    attachToVehicle(vehicle: Car): void;
    /** Sets the animation of the cutscene object */
    setAnim(animation: string): void;
}
declare class Debugger {
    /** Disables the debug mode */
    static Off(): void;
    /** Enables the debug mode */
    static On(): void;
}
declare class Fx {
    /** Creates a gun flash particle effect */
    static AddBigGunFlash(fromX: number, fromY: number, fromZ: number, toX: number, toY: number, toZ: number): void;
    /** Creates an explosion at the point */
    static AddExplosion(x: number, y: number, z: number, type: number): void;
    /** Creates an explosion with no sound */
    static AddExplosionNoSound(x: number, y: number, z: number, type: number): void;
    /** Adds a moving particle effect */
    static AddMovingParticleEffect(particle: number, x: number, y: number, z: number, strengthX: number, strengthY: number, strengthZ: number, scale: number, r: number, g: number, b: number, durationInMs: number): void;
    /** Creates a single particle at the specified coordinates */
    static CreateSingleParticle(type: number, x: number, y: number, z: number, strengthX: number, strengthY: number, strengthZ: number, scale: number): void;
    /** Displays a corona at the specified location */
    static DrawCorona(x: number, y: number, z: number, size: number, coronaType: number, flareType: number, r: number, g: number, b: number): void;
    /** Displays a corona with the lowered draw distance at the specified coordinates */
    static DrawWeaponshopCorona(x: number, y: number, z: number, size: number, coronaType: number, flareType: number, r: number, g: number, b: number): void;
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
    /** Returns true if the current game is an Australian release */
    static IsAustralian(): boolean;
    /** Returns true if the game language is set to French */
    static IsFrench(): boolean;
    /** Returns true if the game language is set to German */
    static IsGerman(): boolean;
    /** Returns true on PC versions of the game */
    static IsPcVersion(): boolean;
    /** Sets whether all cars receive damage */
    static SetAllCarsCanBeDamaged(state: boolean): void;
    /** Toggles whether all taxis have nitrous */
    static SetAllTaxisHaveNitro(state: boolean): void;
    /** Makes the two characters chat for the specified period of time */
    static SetCharsChatting(char1: Char, char2: Char, duration: number): void;
    /** Sets the total number of hidden packages to collect */
    static SetCollectableTotal(amount: number): void;
    /** Makes pedestrians pay no attention to the player */
    static SetEveryoneIgnorePlayer(handle: Player, state: boolean): void;
    /** Defines whether the player can respray their car for free */
    static SetFreeResprays(state: boolean): void;
    /** Greys out the radar */
    static SetIsInStadium(state: boolean): void;
    /** Sets the maximum wanted level the player can receive */
    static SetMaxWantedLevel(wantedLevel: number): void;
    /** Sets the riot sound volume level (0-127) */
    static SetRiotIntensity(level: number): void;
    /** Sets the ped type's hostility to other ped types */
    static SetThreatForPedType(type: number, threatMask: number): void;
    /** Sets sensitivity to crime, changing how many crimes a player can commit before police begin to pursue */
    static SetWantedMultiplier(multiplier: number): void;
}
declare class Gang {
    /** Forces members of the specified gang to act as law enforcement towards the player */
    static SetAttackPlayerWithCops(gangId: number, state: boolean): void;
    /** Sets the car used by members of the specified gang */
    static SetCarModel(gangId: number, modelId: number): void;
    /** Sets the models used by members of the specified gang */
    static SetPedModels(gangId: number, modelId1: number, modelId2: number): void;
    /** Sets the weapons that the specified gang can use */
    static SetWeapons(gangId: number, weaponType1: number, weaponType2: number): void;
}
declare class Garage {
    constructor(handle: number);
    /** Creates a garage at the specified coordinates */
    static Create(leftBottomX: number, leftBottomY: number, leftBottomZ: number, frontX: number, frontY: number, rightTopX: number, rightTopY: number, rightTopZ: number, type: number): Garage;
    /** Sets the garage's type */
    changeType(type: number): void;
    /** Closes the garage */
    close(): void;
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
    /** Sets the maximum number of vehicles for a save garage to open */
    setMaximumNumberOfCars(max: number): void;
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
    /** Displays an onscreen counter with the text in the specified slot, either shown in numbers or as a bar */
    static DisplayNthCounterWithString(counter: number, direction: number, slot: number, text: string): void;
    /** Displays or hides the radar */
    static DisplayRadar(state: boolean): void;
    /** Creates a countdown or countup onscreen timer */
    static DisplayTimer(timer: number, direction: number): void;
    /** Creates a countdown or countup onscreen timer with the text */
    static DisplayTimerWithString(timer: number, direction: number, text: string): void;
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
    static WantedStarsAreFlashing(): boolean;
}
declare class KillFrenzy {
    /** Returns the status of the current rampage */
    static ReadStatus(): number;
    /** Starts a rampage */
    static Start(text: string, weaponType: number, timeInMs: number, targetsNum: number, targetModel1: number, targetModel2: number, targetModel3: number, targetModel4: number, betaSoundsAndMessages: boolean): void;
}
declare class Math {
    /** Returns the absolute value of the local float variable */
    static Abs(): number;
    /** Returns the result of converting metres to feet */
    static ConvertMetresToFeet(metres: number): number;
    /** Returns the cosine of the angle */
    static Cos(angle: number): number;
    /** Gets the distance between two points */
    static GetDistanceBetweenCoords2D(fromX: number, fromY: number, toX: number, toZ: number): number;
    /** Gets the distance between two points */
    static GetDistanceBetweenCoords3D(fromX: number, fromY: number, fromZ: number, toX: number, toY: number, toZ: number): number;
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
    /** Adds the given vector to the object's velocity (0381) */
    addToVelocity(x: number, y: number, z: number): void;
    /** Destroys the object, freeing game memory */
    delete(): void;
    /** Removes the object from the mission cleanup list, preventing it from being deleted when the mission ends */
    dontRemove(): void;
    /** Keeps the object in the games memory */
    freezePosition(state: boolean): void;
    /** Returns the object's coordinates */
    getCoordinates(): {
        x: number;
        y: number;
        z: number;
    };
    /** Returns the object's heading (z-angle) */
    getHeading(): number;
    /** Returns the object's coordinates with an offset */
    getOffsetInWorldCoords(xOffset: number, yOffset: number, zOffset: number): {
        x: number;
        y: number;
        z: number;
    };
    /** Returns true if the object is damaged */
    hasBeenDamaged(): boolean;
    /** Returns true if the object has collided */
    hasCollidedWithAnything(): boolean;
    /** Returns true if object is in the specified area */
    isInArea2D(leftBottomX: number, leftBottomY: number, rightTopX: number, rightTopY: number, drawSphere: boolean): boolean;
    /** Returns true if the object is in the specified area */
    isInArea3D(leftBottomX: number, leftBottomY: number, leftBottomZ: number, rightTopX: number, rightTopY: number, rightTopZ: number, drawSphere: boolean): boolean;
    /** Returns true if the object is in water */
    isInWater(): boolean;
    /** Returns true if the object is visible */
    isOnScreen(): boolean;
    /** Returns true if the object is near the specified coordinates */
    locate2D(x: number, y: number, xRadius: number, yRadius: number, drawSphere: boolean): boolean;
    /** Returns true if the object is near the specified point */
    locate3D(x: number, y: number, z: number, xRadius: number, yRadius: number, zRadius: number, drawSphere: boolean): boolean;
    /** Makes the object targettable (ability to be auto-aimed) */
    makeTargettable(): void;
    /** Allows the object to be deleted by the game if necessary, and also removes it from the mission cleanup list, if applicable */
    markAsNoLongerNeeded(): void;
    /** Places the object at an offset from the car */
    placeRelativeToCar(vehicle: Car, xOffset: number, yOffset: number, zOffset: number): void;
    /** Rotates the object from one angle to another, optionally accounting for a collision during the rotation */
    rotate(fromAngle: number, toAngle: number, collisionCheck: boolean): boolean;
    /** Sets the visibility of the object to the specified interior */
    setAreaVisible(areaId: number): void;
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
    /** Enables the use of collision checking for the object */
    setRecordsCollisions(state: boolean): void;
    /** Sets the object rotation along X, Y and Z axis */
    setRotation(x: number, y: number, z: number): void;
    /** Sets the object's velocity */
    setVelocity(xSpeed: number, ySpeed: number, zSpeed: number): void;
    /** Returns true if the object has finished moving */
    slide(fromX: number, fromY: number, fromZ: number, xSpeed: number, ySpeed: number, zSpeed: number, collisionCheck: boolean): boolean;
    /** Makes the specified car have no collision with the specified object */
    sortOutCollisionWithCar(handle: Car): void;
}
declare class ObjectPath {
    constructor(handle: number);
    /** Initialises a script path */
    static Initialise(pathId: number, width: number): ObjectPath;
    /** Removes the script path */
    clear(): void;
    /** Sets the distance along the script path */
    setPosition(position: number): void;
    /** Sets the speed of objects on the script path */
    setSpeed(speed: number): void;
    /** Attaches the object to the script path */
    start(object: Object): void;
}
declare class Pad {
    /** Returns the controller mode */
    static GetControllerMode(): number;
    /** Returns the offset of the specified Left/Right, Up/Down, Look Left/Look Right and Look Up/Look Down keys */
    static GetPositionOfAnalogueSticks(pad: Pad): {
        leftStickX: number;
        leftStickY: number;
        rightStickX: number;
        rightStickY: number;
    };
    /** Returns true if the pad's button has been pressed */
    static IsButtonPressed(pad: Pad, buttonId: number): boolean;
    /** Returns true if the attack button is being pressed */
    static IsInCarFireButtonPressed(): boolean;
    /** Affects the delay to the left and right steering while driving */
    static SetDrunkInputDelay(pad: Pad, delay: number): void;
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
    /** Returns the nearest path node from the specified coordinates that a pedestrian can walk on */
    static GetClosestCharNode(x: number, y: number, z: number): {
        nodeX: number;
        nodeY: number;
        nodeZ: number;
    };
    /** Gets two closest path nodes within the specified distance range */
    static GetClosestStraightRoad(x: number, y: number, z: number, minDist: number, maxDist: number): {
        node1X: number;
        node1Y: number;
        node1Z: number;
        node2X: number;
        node2Y: number;
        node2Z: number;
        angle: number;
    };
    /** Gets the coordinates of the nth car path node closest to the given coordinates */
    static GetNthClosestCarNode(fromX: number, fromY: number, fromZ: number, n: number): {
        x: number;
        y: number;
        z: number;
    };
    /** Clears all waypoints in the route with the specified id */
    static RemoveRoute(routeId: number): void;
    /** Forbids pedestrians to walk into the specified area */
    static SwitchPedRoadsOff(leftBottomX: number, leftBottomY: number, leftBottomZ: number, rightTopX: number, rightTopY: number, rightTopZ: number): void;
    /** Allows pedestrians to walk into the specified area */
    static SwitchPedRoadsOn(leftBottomX: number, leftBottomY: number, leftBottomZ: number, rightTopX: number, rightTopY: number, rightTopZ: number): void;
    /** Prevents cars from driving on roads in the specified 3D area */
    static SwitchRoadsOff(leftBottomX: number, leftBottomY: number, leftBottomZ: number, rightTopX: number, rightTopY: number, rightTopZ: number): void;
    /** Allows cars to drive in the specified 3D area */
    static SwitchRoadsOn(leftBottomX: number, leftBottomY: number, leftBottomZ: number, rightTopX: number, rightTopY: number, rightTopZ: number): void;
}
declare class Phone {
    constructor(handle: number);
    /** Gets the phone at the specified X and Y coordinates */
    static Grab(x: number, y: number): Phone;
    /** Disables the phone from ringing */
    turnOff(): void;
    /** Makes the phone ringing */
    turnOn(): void;
}
declare class Pickup {
    constructor(handle: number);
    /** Creates a pickup with the given model and type */
    static Create(modelId: number, pickupType: number, x: number, y: number, z: number): Pickup;
    /** Creates a clothing pickup at the location */
    static CreateClothes(x: number, y: number, z: number, type: number): Pickup;
    /** Creates an asset pickup for an asset which can be bought */
    static CreateForSaleProperty(x: number, y: number, z: number, price: number, message: string): Pickup;
    /** Creates an asset icon for an asset that is not for sale */
    static CreateLockedProperty(x: number, y: number, z: number, message: string): Pickup;
    /** Creates a money pickup with the specified cash value */
    static CreateMoney(x: number, y: number, z: number, cashAmount: number): Pickup;
    /** Creates an asset revenue pickup */
    static CreateProtection(x: number, y: number, z: number, revenueLimit: number, revenueRate: number): Pickup;
    /** Creates a weapon pickup, giving the player the specified amount of ammo when they pick it up */
    static CreateWithAmmo(modelId: number, pickupType: number, ammo: number, x: number, y: number, z: number): Pickup;
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
    /** Returns true if the handle is an invalid player handle or the player is dead (wasted) */
    static IsDead(handle: number): boolean;
    /** Resets the count of how many times the player has destroyed a certain model (0298) */
    static ResetNumOfModelsKilled(): void;
    static SetHasMetDebbieHarry(state: boolean): void;
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
    /** Sets the amount of ammo a player has during a driveby */
    ensureHasDriveByWeapon(ammo: number): void;
    /** Kills the player */
    explodeHead(): void;
    /** Gets the amount of ammo in the specified weapon of the player */
    getAmmoInWeapon(weaponType: number): number;
    /** Gets the bus fares collected by the player */
    getBusFaresCollected(): number;
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
    /** Returns the level of chaos inflicted by the player since the last reset (04BE) */
    getHavoc(): number;
    /** Returns the player's heading (z-angle) */
    getHeading(): number;
    /** Returns the player's health */
    getHealth(): number;
    /** Returns the stats of the most recent wheelie or stoppie attempt */
    getWheelieStats(): {
        twoWheelsTime: number;
        twoWheelsDistance: number;
        wheelieTime: number;
        wheelieDistance: number;
        stoppieTime: number;
        stoppieDistance: number;
    };
    /** Gives the player the weapon with the specified amount of ammo */
    giveWeapon(weaponType: number, ammo: number): void;
    /** Returns true if the player has the specified weapon */
    hasGotWeapon(weaponId: number): boolean;
    /** Increases the players armor by the specified amount */
    increaseMaxArmor(value: number): void;
    /** Increases the players maximum health by the specified amount */
    increaseMaxHealth(value: number): void;
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
    /** Returns true if the player is on a boat */
    isInAnyBoat(): boolean;
    /** Returns true if the player has a vehicle, even if they are not actually sat inside it (opening and closing the door) */
    isInAnyCar(): boolean;
    /** Returns true if the player is in a helicopter */
    isInAnyHeli(): boolean;
    /** Returns true if the player is on a plane */
    isInAnyPlane(): boolean;
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
    /** Returns true if the player is flying in a plane or a helicopter */
    isInFlyingVehicle(): boolean;
    /** Returns true if the player is in the specified zone */
    isInInfoZone(infoZone: string): boolean;
    /** Returns true if the player is driving a vehicle with the specified model */
    isInModel(modelId: number): boolean;
    /** Returns true if the player is controlling a remote-control vehicle */
    isInRemoteMode(): boolean;
    /** Returns true if the player is entering a shortcut taxi (0556) */
    isInShortcutTaxi(): boolean;
    /** Returns true if the player vehicle's model is Taxi (110), Cabbie (128), or Borgnine (148) */
    isInTaxi(): boolean;
    /** Returns true if the player is in the specified map zone */
    isInZone(zone: string): boolean;
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
    /** Returns true if the player is aiming at the specified character */
    isTargettingChar(handle: Char): boolean;
    /** Returns true if the player is colliding with the vehicle either on foot or while driving */
    isTouchingVehicle(vehicle: Car): boolean;
    /** Returns true if the player's wanted level is over the specified value */
    isWantedLevelGreater(wantedLevel: number): boolean;
    /** Returns true if the player has the specified model (0352) */
    isWearing(modelName: string): boolean;
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
    /** Makes the player immune to fire */
    makeFireProof(state: boolean): void;
    /** Makes the player safe, putting the character in a safe location */
    makeSafeForCutscene(): void;
    /** Takes all weapons away from the player */
    removeAllWeapons(): void;
    /** Resets the level of chaos inflicted by the player */
    resetHavoc(): void;
    /** Sets the amount of ammo the player has in the specified weapon */
    setAmmo(weaponType: number, ammo: number): void;
    setAutoAim(state: boolean): void;
    /** Sets the players driveby mode */
    setCanDoDriveBy(state: boolean): void;
    /** Sets whether player's control is enabled */
    setControl(state: boolean): void;
    /** Puts the player at the specified location */
    setCoordinates(x: number, y: number, z: number): void;
    /** Sets the player's currently held weapon */
    setCurrentWeapon(weaponType: number): void;
    /** Makes the camera start moving around in a swirling motion with the specified intensity as if drunk */
    setDrunkenness(intensity: number): void;
    /** Defines whether the player have to reload their gun */
    setFastReload(state: boolean): void;
    /** Sets whether the player loses the cash when gets wasted (works once) */
    setFreeHealthCare(state: boolean): void;
    /** Sets the player's heading (z-angle) */
    setHeading(heading: number): void;
    /** Sets the player's health */
    setHealth(health: number): void;
    /** Makes the character act as the player's hooker */
    setHooker(hooker: Char): void;
    /** Sets whether cops should ignore the player regardless of wanted level */
    setIgnorePolice(state: boolean): void;
    /** Sets the players mood, affecting the dialogue spoken by the player */
    setMood(mood: number, time: number): void;
    /** Defines whether the player can run fast forever */
    setNeverGetsTired(state: boolean): void;
    /** Sets whether the player is visible or not */
    setVisible(state: boolean): void;
    /** Shuts the player up */
    shutUp(state: boolean): void;
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
    /** Puts the player at the specified location, removing them from any vehicle they're in */
    warpFromCarToCoord(x: number, y: number, z: number): void;
    /** Puts the player in the specified vehicle */
    warpIntoCar(vehicle: Car): void;
}
declare class Rc {
    /** Destroys the remote-control vehicle */
    static BlowUpBuggy(): void;
    /** Returns the players radio-controlled vehicle */
    static GetCar(player: Player): Car;
    /** Gives control of the remote-control vehicle to the player */
    static GiveCarToPlayer(player: Player, x: number, y: number, z: number, angle: number): void;
    /** Puts the player in control of a remote-control vehicle */
    static GiveModelToPlayer(handle: Player, x: number, y: number, z: number, angle: number, modelId: number): void;
    /** Exits remote-control mode */
    static RemoveBuggy(): void;
    /** Enables a remote-control vehicle detonation */
    static SetEnableDetonate(state: boolean): void;
    /** Sets whether RC Bandits detonate on contact with the wheels of any four-wheeled vehicles */
    static SetEnableDetonateOnContact(state: boolean): void;
}
declare class Restart {
    /** Adds a new location where the player can respawn after death */
    static AddHospital(x: number, y: number, z: number, heading: number): void;
    /** Adds a new location where the player can respawn after arrest */
    static AddPolice(x: number, y: number, z: number, heading: number): void;
    /** Stops the player from spawning at the override location (016E) */
    static CancelOverride(): void;
    /** Forces this location to be the next respawn location */
    static OverrideNext(x: number, y: number, z: number, heading: number): void;
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
}
declare class Shortcut {
    /** Clears any taxi shortcut that is set up by 0556 or 058E */
    static ClearTaxi(): void;
    /** Sets the taxi shortcut pick-up point for mission */
    static SetDropoffPointForMission(x: number, y: number, z: number, angle: number): void;
    /** Sets the taxi shortcut pick-up point for mission */
    static SetPickupPoint(x: number, y: number, z: number, angle: number): void;
    /** Sets up both the pick-up (058D) and drop-off (058E) points of the taxi shortcut */
    static SetUpTaxi(pickUpX: number, pickUpY: number, pickUpZ: number, pickUpAngle: number, dropoffX: number, dropoffY: number, dropoffZ: number, dropoffAngle: number): void;
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
    /** Adds to the number of Bloodring kills stat */
    static AddBloodRingKills(num: number): void;
    /** Adds to the "ice cream" sold stat */
    static AddIceCreamsSold(num: number): void;
    /** Adds to the fashion budget stat */
    static AddMoneySpentOnClothes(amount: number): void;
    /** Adds to the property budget stat */
    static AddMoneySpentOnProperty(amount: number): void;
    /** Adds to the weapon budget stat */
    static AddMoneySpentOnWeapons(amount: number): void;
    /** Adds to the assassination contracts stat */
    static AddNumberOfAssassinations(num: number): void;
    /** Adds to the pizzas delivered stat */
    static AddPizzasDelivered(num: number): void;
    /** Adds to the stores knocked off stat */
    static AddStoresKnockedOff(num: number): void;
    /** Gets the progress of completion as a percentage */
    static GetProgressPercentage(): number;
    /** Increases the progress made stat by the specified amount */
    static PlayerMadeProgress(progress: number): void;
    /** Saves the highest paramedic mission level stat */
    static RegisterAmbulanceLevel(highestLevel: number): void;
    /** Updates the race best position */
    static RegisterBestPosition(statId: number, position: number): void;
    /** Increments the number of criminals killed on Vigilante mission stat by 1 */
    static RegisterCriminalCaught(): void;
    /** Updates the stat if the value is lower than the current stat value */
    static RegisterFastestTime(statId: number, value: number): void;
    /** Increments the number of fires extinguished stat by 1 */
    static RegisterFireExtinguished(): void;
    /** Saves the highest firefighter level stat */
    static RegisterFireLevel(highestLevel: number): void;
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
    /** Increments the number of people saved in an ambulance stat by 1 */
    static RegisterLifeSaved(): void;
    /** Increments the number of mission attempts stat by 1 */
    static RegisterMissionGiven(): void;
    /** Sets the GXT of the last mission passed */
    static RegisterMissionPassed(key: string): void;
    /** Adds the value to the cash made in taxi stat */
    static RegisterMoneyMadeTaxi(cashAmount: number): void;
    /** Sets the latest odd job mission passed */
    static RegisterOddjobMissionPassed(): void;
    /** Increments the number of passengers dropped off stat by 1 */
    static RegisterPassengerDroppedOffTaxi(): void;
    /** Increments the completed number of unique stunt jumps stat by 1 */
    static RegisterUniqueJumpFound(): void;
    /** Saves the highest vigilante level stat */
    static RegisterVigilanteLevel(highestLevel: number): void;
    /** Sets the longest time in Bloodring stat */
    static SetLongestTimeInBloodRing(timeInSec: number): void;
    /** Sets the maximum progress the player can reach */
    static SetProgressTotal(maxProgress: number): void;
    /** Adds the property to the property owned stat */
    static SetPropertyAsOwned(propertyIndex: number): void;
    /** Sets the total number of rampages passed stat */
    static SetTotalNumberOfKillFrenzies(total: number): void;
    /** Sets the total number of missions that can be completed */
    static SetTotalNumberOfMissions(numMissions: number): void;
    /** Sets the total number of unique stunt jumps stat */
    static SetUniqueJumpsTotal(total: number): void;
}
declare class Streaming {
    /** Returns true if the specified IFP file is loaded */
    static HasAnimationLoaded(animationFile: string): boolean;
    /** Returns true if the model is available for creation */
    static HasModelLoaded(modelId: number): boolean;
    /** Returns true if the special character's model (023C) is available for creation */
    static HasSpecialCharacterLoaded(slotId: number): boolean;
    /** Returns true if the specified model exists in the loaded  */
    static IsModelAvailable(modelId: number): boolean;
    /** Loads any requested models (0247 or 0353) synchronously */
    static LoadAllModelsNow(): void;
    /** Starts loading a specific location, just like if the player was there, removing LOD textures */
    static LoadScene(x: number, y: number, z: number): void;
    /** Requests a special character's model to be loaded into the specified slot */
    static LoadSpecialCharacter(slotId: number, modelName: string): void;
    /** Loads a model with the given name as a cutscene model id (GTA III: 185-189, VC: 295-299) */
    static LoadSpecialModel(cutsceneModelId: number, modelName: string): void;
    /** Releases the specified model, freeing game memory */
    static MarkModelAsNoLongerNeeded(modelId: number): void;
    /** Releases the specified IFP file, freeing game memory */
    static RemoveAnimation(animationFile: string): void;
    /** Loads the specified IFP File */
    static RequestAnimation(animationFile: string): void;
    /** Reloads the area at the specified coordinates */
    static RequestCollision(x: number, y: number): void;
    /** Requests a new model to load */
    static RequestModel(modelId: number): void;
    /** Sets the visibility of an interior area */
    static SetAreaVisible(areaId: number): void;
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
    /** Makes the game use GXT Entries from the specified GXT Table */
    static LoadMissionText(tableName: string): void;
    /** Displays a message positioned on the bottom of the screen for the specified time */
    static Print(key: string, time: number, flag: number): void;
    /** Displays a styled message for the specified time */
    static PrintBig(key: string, time: number, style: number): void;
    /** Displays a low-priority styled message for the specified time */
    static PrintBigQ(key: string, duration: number, style: number): void;
    /** Displays a black text box for a few seconds */
    static PrintHelp(key: string): void;
    /** Shows a text box which stays on screen until it is removed by another command */
    static PrintHelpForever(key: string): void;
    /** Displays a message positioned on the bottom of the screen for the specified time */
    static PrintNow(key: string, time: number, flag: number): void;
    /** Displays a styled message in which the first string token ~a~ is substituted with the specified text */
    static PrintStringInStringNow(templateKey: string, replacementKey: string, duration: number, style: number): void;
    /** Displays a styled message in which the first two ~1~ tokens are substituted with the specified numbers */
    static PrintWith2NumbersBig(key: string, num1: number, num2: number, duration: number, style: number): void;
    /** Displays a styled message in which the first two ~1~ tokens are substituted with the specified numbers */
    static PrintWith2NumbersNow(key: string, num1: number, num2: number, duration: number, style: number): void;
    /** Displays a styled message in which the first three ~1~ tokens are substituted with the specified numbers */
    static PrintWith3Numbers(key: string, num1: number, num2: number, num3: number, duration: number, style: number): void;
    /** Displays a styled message in which the first four ~1~ tokens are substituted with the specified numbers */
    static PrintWith4Numbers(key: string, num1: number, num2: number, num3: number, num4: number, duration: number, style: number): void;
    /** Displays a styled message in which the first six ~1~ tokens are substituted with the specified numbers */
    static PrintWith6Numbers(key: string, num1: number, num2: number, num3: number, num4: number, num5: number, num6: number, duration: number, style: number): void;
    /** Displays a styled message in which the first string token ~1~ is substituted with the specified number */
    static PrintWithNumber(key: string, num: number, duration: number, flag: number): void;
    /** Displays a styled message in which the first string token~1~ is substituted with the specified number */
    static PrintWithNumberBig(key: string, num: number, duration: number, style: number): void;
    /** Displays a styled message in which the first string token ~1~ is substituted with the specified number */
    static PrintWithNumberNow(key: string, num: number, duration: number, flag: number): void;
    /** Gives the text a background (0346) */
    static SetBackground(state: boolean): void;
    /** Centers the text */
    static SetCenter(state: boolean): void;
    /** Sets the color of the text letters */
    static SetColor(red: number, green: number, blue: number, alpha: number): void;
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
    /** Allows the game to continue its usual weather pattern after using 01B5 */
    static Release(): void;
    /** Allows hurricane weather */
    static SetAllowHurricanes(state: boolean): void;
}
declare class World {
    /** Returns the handle of a random car with the specified model in the specified 2D area, or -1 otherwise */
    static GetRandomCarOfTypeInArea(leftBottomX: number, leftBottomY: number, rightTopX: number, rightTopY: number, modelId: number): Car;
    /** Returns the handle of the next ped in the given area who has not bought "ice cream" yet, or -1 otherwise */
    static GetRandomIceCreamCustomerInArea(leftBottomX: number, leftBottomY: number, rightTopX: number, rightTopY: number, allowCivilian: number, allowGangMember: number, allowCriminal: number): Char;
    /** Sets visibility of secondary rubbish (03AD) */
    static AddPornLeafletToRubbish(state: boolean): void;
    /** Creates a trigger zone for police to appear during chases */
    static AddSetPiece(type: number, fromX: number, fromY: number, toX: number, toY: number, spawnPoliceAAtX: number, spawnPoliceAAtY: number, headedTowardsAAtX: number, headedTowardsAAtY: number, spawnPoliceBAtX: number, spawnPoliceBAtY: number, headedTowardsBAtX: number, headedTowardsBAtY: number): void;
    /** Returns true if there is a pedestrian of the given model in the specified area around the player */
    static CheckForPedModelAroundPlayer(player: Player, offsetX: number, offsetY: number, offsetZ: number, modelId1: number, modelId2: number): boolean;
    /** Removes references to all created roadblocks, freeing game memory */
    static ClearAllScriptRoadblocks(): void;
    /** Clears the area, removing all vehicles and pedestrians */
    static ClearArea(x: number, y: number, z: number, radius: number, clearParticles: boolean): void;
    /** Clears all cars in the specified 3D area */
    static ClearAreaOfCars(leftBottomX: number, leftBottomY: number, leftBottomZ: number, rightTopX: number, rightTopY: number, rightTopZ: number): void;
    /** Clears all pedestrians from the given area */
    static ClearAreaOfChars(leftBottomX: number, leftBottomY: number, leftBottomZ: number, rightTopX: number, rightTopY: number, rightTopZ: number): void;
    /** Clears the extra color of the sky */
    static ClearExtraColors(withFade: boolean): void;
    /** Starts spawning random cars at the specified location */
    static CreateRandomCarForCarPark(x: number, y: number, z: number, heading: number): void;
    /** Creates a roadblock in the specified area */
    static CreateScriptRoadblock(leftBottomX: number, leftBottomY: number, leftBottomZ: number, topRightX: number, topRightY: number, topRightZ: number): void;
    /** Creates a SWAT character coming down from a rope at the coordinates */
    static CreateSwatRope(x: number, y: number, z: number): void;
    /** Forces the game to spawn only pedestrians of the given type */
    static ForceRandomPedType(pedType: number): void;
    /** Returns appropriate coordinates for creating a pickup by a dead character */
    static GetDeadCharPickupCoords(char: Char): {
        x: number;
        y: number;
        z: number;
    };
    /** Stores the ground position at the location */
    static GetGroundZFor3DCoord(x: number, y: number, z: number): number;
    /** Loops through the pool of vehicles to retrieve one that matches the specified model in the specified 2D area */
    static GetRandomCarOfTypeInAreaNoSave(leftBottomX: number, leftBottomY: number, rightTopX: number, rightTopY: number, modelId: number): Car;
    /** Gets a random law enforcement ped of any of the specified types in the 2D area */
    static GetRandomCopInArea(leftBottomX: number, leftBottomY: number, rightTopX: number, rightTopY: number, cop: boolean, swat: boolean, fbi: boolean, army: boolean, vice: boolean): Char;
    /** Checks if glass has been shattered near the specified location */
    static HasGlassBeenShatteredNearby(x: number, y: number, z: number): boolean;
    /** Returns true if the pickup at the specified coordinates is available to be picked up */
    static IsAnyPickupAtCoords(x: number, y: number, z: number): boolean;
    /** Returns true if there is anything with the specified properties within the 3D area */
    static IsAreaOccupied(leftBottomX: number, leftBottomY: number, leftBottomZ: number, rightTopX: number, rightTopY: number, rightTopZ: number, solid: boolean, car: boolean, char: boolean, object: boolean, particle: boolean): boolean;
    /** Returns true if there is a vehicle in the specified area */
    static IsPointObscuredByAMissionEntity(x: number, y: number, z: number, radiusX: number, radiusY: number, radiusZ: number): boolean;
    /** Returns true if a sniper bullet is in the specified area */
    static IsSniperBulletInArea(leftBottomX: number, leftBottomY: number, leftBottomZ: number, rightTopX: number, rightTopY: number, rightTopZ: number): boolean;
    /** Removes all script fires (02CF) */
    static RemoveAllScriptFires(): void;
    /** Stops processing of everything in the world to free up the game memory */
    static RemoveEverythingForHugeCutscene(): void;
    /** Removes all particle effects (02A2 or 039D) in the specified area */
    static RemoveParticleEffectsInArea(leftBottomX: number, leftBottomY: number, leftBottomZ: number, rightTopX: number, rightTopY: number, rightTopZ: number): void;
    /** Sets the quantity of traffic that will spawn in the game */
    static SetCarDensityMultiplier(multiplier: number): void;
    /** Sets the extra color of the sky */
    static SetExtraColors(color: number, fade: boolean): void;
    /** Sets the quantity of pedestrians to spawn in the game */
    static SetPedDensityMultiplier(multiplier: number): void;
    /** Sets the scrollbar message at Hyman Memorial Stadium */
    static SetTonightsEvent(scrollbarMessage: number): void;
    /** Sets the visibility of the object closest to the specified coordinates, matching the specified model */
    static SetVisibilityOfClosestObjectOfType(x: number, y: number, z: number, radius: number, modelId: number, state: boolean): void;
    /** Swaps a map model with another map model nearest to the center of the search area */
    static SwapNearestBuildingModel(x: number, y: number, z: number, radius: number, fromModelId: number, toModelId: number): void;
    /** Sets whether the game should render the world or only the cutscene objects */
    static SwitchProcessing(state: boolean): void;
    /** Toggles garbage on the streets */
    static SwitchRubbish(state: boolean): void;
    /** Unlocks all car doors in the specified rectangular area */
    static UnlockAllCarDoorsInArea(leftBottomX: number, leftBottomY: number, topRightX: number, topRightY: number): void;
}
declare class Zone {
    /** Gets a random character in the specified zone whose pedtype matches the specified values */
    static GetRandomChar(zone: string, civilian: boolean, gang: boolean, criminalOrProstitute: boolean): Char;
    /** Sets the zone's peds, gangs, and cops spawn density in car */
    static SetCarInfo(zone: string, dayOrNight: number, density: number, cuban: number, haitian: number, street: number, diaz: number, security: number, biker: number, player: number, golfer: number, gang9: number, cop: number): void;
    /** Sets the traffic density of cars and boats in the zone */
    static SetCivilianCarInfo(zone: string, dayOrNight: number, normal: number, poor: number, rich: number, exec: number, worker: number, big: number, taxi: number, moped: number, motorbike: number, leisureBoat: number, workerBoat: number): void;
    /** Assigns one of the ped groups defined in pedgrp.dat to the map zone */
    static SetGroup(zone: string, dayOrNight: number, pedGroup: number): void;
    /** Sets the zone's peds, gangs, and cops spawn density on foot */
    static SetPedInfo(zone: string, dayOrNight: number, density: number, cuban: number, haitian: number, street: number, diaz: number, security: number, biker: number, player: number, golfer: number, gang9: number, cop: number): void;
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
declare class Heli extends Car {
    constructor(handle: number);
    /** Resets the heli rotation set with 04D0 */
    clearOrientation(): void;
    /** Makes the Hunter helicopter fire cannon gun */
    fireHunterGun(): void;
    /** Makes the helicopter fly to the specified location, keeping a specific Z height/altitude */
    gotoCoords(x: number, y: number, z: number, speed: number): void;
    /** Makes helicopter simulate crash landing, exploding on the way if high up */
    makeComeCrashingDown(): void;
    /** Forces the heli rotation relative to the north */
    setOrientation(angle: number): void;
    /** Limits the amount a helicopter can tilt */
    setStabiliser(state: boolean): void;
}
declare class Plane extends Car {
    constructor(handle: number);
    /** Makes the AI fly the plane to the specified location */
    gotoCoords(x: number, y: number, z: number, speed: number): void;
}
declare class Tank extends Car {
    constructor(handle: number);
    /** Sets the tank's ability to detonate vehicles on contact */
    setDetonateCars(state: boolean): void;
}
