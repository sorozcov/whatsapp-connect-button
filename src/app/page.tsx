'use client'
import { ConnectButton } from "360dialog-connect-button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="">
        <ConnectButton
          partnerId={"5OEDyLPA"}
          callback={(callbackObject:any) => {
            // console.log("Client ID: " + callbackObject.client);
            // console.log("Channel IDs: " + callbackObject.channels);
            // if (callbackObject.revokedChannels) {
            //   console.log("Revoked Channel IDs: " + callbackObject.revokedChannels);
            // }
          }}
          className="flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30" // <-- Insert your own styles via className definition or through inline styling
          label="Conectar a WhatsApp"
          />
      </div>
    </main>
  );
}
