//  Mach1 SDK
//  Copyright � 2017 Mach1. All rights reserved.
//

#pragma once

#include "GameFramework/Actor.h"
#include "M1BaseActor.h"
#include "M1SpatialActor.generated.h"

UCLASS(ClassGroup = (Custom), meta = (BlueprintSpawnableComponent))
class MACH1DECODEPLUGIN_API AM1SpatialActor : public AM1BaseActor
{
	GENERATED_BODY()

	void SetSoundsMain();
	void SetSoundsBlendMode();

public:
	// Sets default values for this actor's properties
	AM1SpatialActor();

	// Audio positions for the 8channel cube
	UPROPERTY(EditAnywhere, Category = "Mach1 Spatial Files|Main")
		USoundWave* ChannelMain1;

	UPROPERTY(EditAnywhere, Category = "Mach1 Spatial Files|Main")
		USoundWave* ChannelMain2;

	UPROPERTY(EditAnywhere, Category = "Mach1 Spatial Files|Main")
		USoundWave* ChannelMain3;

	UPROPERTY(EditAnywhere, Category = "Mach1 Spatial Files|Main")
		USoundWave* ChannelMain4;

	UPROPERTY(EditAnywhere, Category = "Mach1 Spatial Files|Main")
		USoundWave* ChannelMain5;

	UPROPERTY(EditAnywhere, Category = "Mach1 Spatial Files|Main")
		USoundWave* ChannelMain6;

	UPROPERTY(EditAnywhere, Category = "Mach1 Spatial Files|Main")
		USoundWave* ChannelMain7;

	UPROPERTY(EditAnywhere, Category = "Mach1 Spatial Files|Main")
		USoundWave* ChannelMain8;


	// Audio positions for the 8channel cube
	UPROPERTY(EditAnywhere, Category = "Mach1 Spatial Files|BlendMode")
		USoundWave* ChannelBlend1;

	UPROPERTY(EditAnywhere, Category = "Mach1 Spatial Files|BlendMode")
		USoundWave* ChannelBlend2;

	UPROPERTY(EditAnywhere, Category = "Mach1 Spatial Files|BlendMode")
		USoundWave* ChannelBlend3;

	UPROPERTY(EditAnywhere, Category = "Mach1 Spatial Files|BlendMode")
		USoundWave* ChannelBlend4;

	UPROPERTY(EditAnywhere, Category = "Mach1 Spatial Files|BlendMode")
		USoundWave* ChannelBlend5;

	UPROPERTY(EditAnywhere, Category = "Mach1 Spatial Files|BlendMode")
		USoundWave* ChannelBlend6;

	UPROPERTY(EditAnywhere, Category = "Mach1 Spatial Files|BlendMode")
		USoundWave* ChannelBlend7;

	UPROPERTY(EditAnywhere, Category = "Mach1 Spatial Files|BlendMode")
		USoundWave* ChannelBlend8;
};
