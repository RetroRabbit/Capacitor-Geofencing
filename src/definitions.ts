declare global {
  interface PluginRegistry {
    CapacitorGeofencing?: CapacitorGeofencingPlugin;
  }
}

export interface CapacitorGeofencingPlugin {
  setup(options: CapacitorGeofencingConfig): Promise<void>;
  addRegion(options: CapacitorGeofencingRegion): Promise<void>;
  stopMonitoring(options: CapacitorGeofencingIdentifier): Promise<void>;
  monitoredRegions(): Promise<{regions:string[]}>;
}

export interface  CapacitorGeofencingConfig {
  url: string;
  notifyOnEntry: boolean;
  notifyOnExit: boolean;
  payload: object;
}

export interface  CapacitorGeofencingIdentifier {
  identifier: string;
}

export interface  CapacitorGeofencingRegion extends CapacitorGeofencingIdentifier { 
  latitude: number;
  longitude: number;
  radius?: number;
}