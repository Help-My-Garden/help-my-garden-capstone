drop table if exists plantProfile;
drop table if exists plant;
drop table if exists  profile;

create table profile (
	profileId BINARY(16) not null,
	profileActivationToken char(32),
	profileEmail VARCHAR(128) not null,
	profileHash VARCHAR(97) not null,
	profileName varchar(64) not null,
	unique (profileEmail),
	unique (profileName),
	primary key (profileId)
);


create table plant (
    plantId BINARY(16) not null,
    plantFamilyName VARCHAR(128) not null,
    plantCommonName VARCHAR(128) not null,
    plantScientificName VARCHAR(128) not null,
    plantColor VARCHAR(128) not null,
    plantImageUrl VARCHAR(128) not null,
    plantDuration VARCHAR(300) not null,
    plantSunlight VARCHAR(128) not null,
    plantSize VARCHAR(128) not null,
    primary key (plantId)
);

create table plantProfile (
    plantProfilePlantId BINARY(16) NOT NULL,
    plantProfileProfileId BINARY(16) NOT NULL,
    index(plantProfilePlantId),
    index(plantProfileProfileId),
    FOREIGN KEY (plantProfilePlantId) REFERENCES plant(plantId),
    FOREIGN KEY (plantProfileProfileId) REFERENCES profile(profileId),
    PRIMARY KEY (plantProfilePlantId, plantProfileProfileId)
);
