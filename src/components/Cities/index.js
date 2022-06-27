import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

import { CityModel } from '../../models/CityModel';

export default function Cities() {
  return (
    <Box
      backdropFilter="blur(10px)"
      backgroundColor="rgba(0,0,0,0.1)"
      borderRadius="md"
    >
      <Tabs>
        <TabList>
          {CityModel.map(({ name }) => (
            <Tab fontWeight="bold" fontSize="xl" key={name}>
              {name}
            </Tab>
          ))}
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
