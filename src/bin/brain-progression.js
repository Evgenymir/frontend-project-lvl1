#!/usr/bin/env node
import { description, gameProgression } from '../games/brain-progression';
import startGame from '../index';

startGame(description, gameProgression);
