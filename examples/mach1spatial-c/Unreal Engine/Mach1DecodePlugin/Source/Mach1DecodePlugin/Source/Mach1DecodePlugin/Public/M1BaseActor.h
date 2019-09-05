//  Mach1 SDK
//  Copyright � 2017 Mach1. All rights reserved.
//

#pragma once

#include "GameFramework/Actor.h"
#include "Components/BoxComponent.h"
#include "Components/AudioComponent.h" 
#include "Components/BillboardComponent.h"
#include "Components/SceneCaptureComponent.h"

#include "Mach1Decode.h"
#include "Mach1DecodePositional.h"

#include <vector>

#include "M1BaseActor.generated.h"

//#define LEGACY_POSITIONAL

UCLASS(abstract)
class MACH1DECODEPLUGIN_API AM1BaseActor : public AActor
{
	GENERATED_BODY()

protected:

#ifdef LEGACY_POSITIONAL

	// geometric utils
	static float ClosestPointOnBox(FVector point, FVector center, FVector axis0, FVector axis1, FVector axis2, FVector extents, FVector& closestPoint);

	static bool Clip(float denom, float numer, float& t0, float& t1);
	static int DoClipping(float t0, float t1, FVector origin, FVector direction, FVector center, FVector axis0, FVector axis1, FVector axis2, FVector extents, bool solid, FVector& point0, FVector& point1);

	static FVector GetEuler(FQuat q1);

	void CalculateChannelVolumes(FQuat quat);

#endif

	USoundAttenuation* NullAttenuation;

	TArray<float> VolumeFactor;

	TArray<USoundWave*> SoundsMain;
	TArray<UAudioComponent*> LeftChannelsMain;
	TArray<UAudioComponent*> RightChannelsMain;

	TArray<USoundWave*> SoundsBlendMode;
	TArray<UAudioComponent*> LeftChannelsBlend;
	TArray<UAudioComponent*> RightChannelsBlend;

	USceneComponent* Root;
	UBoxComponent* Collision;
	UBillboardComponent* Billboard;

	int MAX_SOUNDS_PER_CHANNEL;
	bool isInited;
	bool needToPlayAfterInit; 

	void Init();
	void SetSoundSet();
	void SetVolumeMain(float volume);
	void SetVolumeBlend(float volume);

	virtual void SetSoundsMain();
	virtual void SetSoundsBlendMode();
	virtual void SoundAlgorithm(float Yaw, float Pitch, float Roll, float* volumes);

	Mach1Decode mach1Decode;
	Mach1DecodePositional m1Positional;

	Mach1Point3D ConvertToMach1Point3D(FVector vec);
	Mach1Point4D ConvertToMach1Point4D(FQuat quat);


public:

	void InitComponents(int MAX_SOUNDS_PER_CHANNEL);

	// Called when the game starts or when spawned
	void BeginPlay(); // overriden

	// Called every frame
	void Tick(float DeltaSeconds); // overriden

	// always tick
	bool ShouldTickIfViewportsOnly() const override { return true; }
	#if WITH_EDITOR
	void PostEditChangeProperty(FPropertyChangedEvent& PropertyChangedEvent) override;
	#endif
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Mach1 Class Settings", DisplayName = "Force HMD rotation instead of Player Controller")
		bool ForceHMDRotation = true;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Mach1 Class Settings", DisplayName = "Display Debug")
		bool Debug = true;

	UFUNCTION(BlueprintCallable, Category = "Trigger Options")
		void Play();

	UFUNCTION(BlueprintCallable, Category = "Trigger Options")
		void Stop();

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Trigger Options", DisplayName = "Autoplay")
		bool autoplay = false;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Trigger Options", DisplayName = "Volume")
		float Volume = 1.0f;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Trigger Options", DisplayName = "Fade In Duration")
		float fadeInDuration = 0;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Trigger Options", DisplayName = "Fade Out Duration")
		float fadeOutDuration = 0;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Attenuation & Rotation Settings", DisplayName = "Use Falloff")
		bool useFalloff = false;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Attenuation & Rotation Settings", DisplayName = "Attenuation Curve")
		UCurveFloat* attenuationCurve;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Attenuation & Rotation Settings", DisplayName = "Mute When Inside Object")
		bool muteWhenInsideObject = false;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Attenuation & Rotation Settings", DisplayName = "Mute When Outside Object")
		bool muteWhenOutsideObject = false;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Attenuation & Rotation Settings", DisplayName = "Use Closest Point Rotation & Mute When Inside")
		bool useClosestPointRotationMuteInside = false;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Attenuation & Rotation Settings", DisplayName = "Use Yaw for Positional Rotation")
		bool useYawForRotation = true;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Attenuation & Rotation Settings", DisplayName = "Use Pitch for Positional Rotation")
		bool usePitchForRotation = true;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Attenuation & Rotation Settings", DisplayName = "Use Roll for Positional Rotation")
		bool useRollForRotation = true;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Blend Mode (beta)", DisplayName = "Use Blend Mode")
		bool useBlendMode = false;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Blend Mode (beta)", DisplayName = "Attenuation BlendMode Curve")
		UCurveFloat* attenuationBlendModeCurve;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Blend Mode (beta)", DisplayName = "Ignore Top Bottom Planes in BlendMode")
		bool ignoreTopBottom = true;
};