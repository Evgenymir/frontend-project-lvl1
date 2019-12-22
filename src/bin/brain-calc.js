#!/usr/bin/env node
import { description, gameCalc } from '../games/brain-calc';
import startGame from '../index';

startGame(description, gameCalc);
