import "module-alias/register";

import { TestUtil } from "@cova/test/util/test.util";
import { NetServer } from "@cova/test/server/net.server";

(async (): Promise<void> => {
  const addr = TestUtil.createUnixSock();
  const unix = new NetServer();

  unix.start(addr);

  console.log("Unix-socket server running on " + addr);
})();
