#!/usr/bin/env node
import { description, gameGcd } from '../games/brain-gcd';
import startGame from '../index';

startGame(description, gameGcd);
