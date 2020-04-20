/* ----------------------------------------------------------------------------
 * This file was automatically generated by SWIG (http://www.swig.org).
 * Version 3.0.12
 *
 * Do not make changes to this file unless you know what you are doing--modify
 * the SWIG interface file instead.
 * ----------------------------------------------------------------------------- */

package com.mach1.Mach1SpatialLibs;

public final class Mach1EncodeOutputModeType {
  public final static Mach1EncodeOutputModeType Mach1EncodeOutputModeM1Horizon = new Mach1EncodeOutputModeType("Mach1EncodeOutputModeM1Horizon", Mach1EncodeModuleJNI.Mach1EncodeOutputModeM1Horizon_get());
  public final static Mach1EncodeOutputModeType Mach1EncodeOutputModeM1Spatial = new Mach1EncodeOutputModeType("Mach1EncodeOutputModeM1Spatial");
  public final static Mach1EncodeOutputModeType Mach1EncodeOutputModeM1SpatialPlus = new Mach1EncodeOutputModeType("Mach1EncodeOutputModeM1SpatialPlus");
  public final static Mach1EncodeOutputModeType Mach1EncodeOutputModeM1SpatialPlusPlus = new Mach1EncodeOutputModeType("Mach1EncodeOutputModeM1SpatialPlusPlus");
  public final static Mach1EncodeOutputModeType Mach1EncodeOutputModeM1SpatialExt = new Mach1EncodeOutputModeType("Mach1EncodeOutputModeM1SpatialExt");
  public final static Mach1EncodeOutputModeType Mach1EncodeOutputModeM1SpatialExtPlus = new Mach1EncodeOutputModeType("Mach1EncodeOutputModeM1SpatialExtPlus");

  public final int swigValue() {
    return swigValue;
  }

  public String toString() {
    return swigName;
  }

  public static Mach1EncodeOutputModeType swigToEnum(int swigValue) {
    if (swigValue < swigValues.length && swigValue >= 0 && swigValues[swigValue].swigValue == swigValue)
      return swigValues[swigValue];
    for (int i = 0; i < swigValues.length; i++)
      if (swigValues[i].swigValue == swigValue)
        return swigValues[i];
    throw new IllegalArgumentException("No enum " + Mach1EncodeOutputModeType.class + " with value " + swigValue);
  }

  private Mach1EncodeOutputModeType(String swigName) {
    this.swigName = swigName;
    this.swigValue = swigNext++;
  }

  private Mach1EncodeOutputModeType(String swigName, int swigValue) {
    this.swigName = swigName;
    this.swigValue = swigValue;
    swigNext = swigValue+1;
  }

  private Mach1EncodeOutputModeType(String swigName, Mach1EncodeOutputModeType swigEnum) {
    this.swigName = swigName;
    this.swigValue = swigEnum.swigValue;
    swigNext = this.swigValue+1;
  }

  private static Mach1EncodeOutputModeType[] swigValues = { Mach1EncodeOutputModeM1Horizon, Mach1EncodeOutputModeM1Spatial, Mach1EncodeOutputModeM1SpatialPlus, Mach1EncodeOutputModeM1SpatialPlusPlus, Mach1EncodeOutputModeM1SpatialExt, Mach1EncodeOutputModeM1SpatialExtPlus };
  private static int swigNext = 0;
  private final int swigValue;
  private final String swigName;
}
