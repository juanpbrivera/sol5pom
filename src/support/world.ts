// support/world.ts
import { setWorldConstructor } from '@cucumber/cucumber';
import { CustomWorld } from './CustomWorld';

setWorldConstructor(CustomWorld);