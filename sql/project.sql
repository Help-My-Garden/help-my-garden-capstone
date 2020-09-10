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
    plantFamilyName VARCHAR(128),
    plantCommonName VARCHAR(128),
    plantScientificName VARCHAR(128) not null,
    plantColor VARCHAR(128),
    plantImageUrl VARCHAR(128),
    plantDuration VARCHAR(300),
    plantSunlight VARCHAR(128),
    plantSize VARCHAR(128),
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

select plantId from plant where plantId = UUID_TO_BIN('0003904d-eec6-11ea-a2a6-0242ac1b0002')
