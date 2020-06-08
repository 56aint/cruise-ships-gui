const Port = require('../src/Port');

describe('Port', () => {
  it('can be instantiated', () => {
    expect(new Port()).toBeInstanceOf(Object);
  });

  it('can add a ship', () => {
    const port = new Port('Dover');
    const ship = jest.fn();

    port.addShip(ship);

    expect(port.ships).toContain(ship);
  });

  it('can remove a ship', () => {
    const port = new Port('Dover');
    const titanic = jest.fn();
    const queenMary = jest.fn();

    port.addShip(titanic);
    port.addShip(queenMary);
    port.removeShip(queenMary);

    expect(port.ships).toEqual([titanic]);
  });

  it('has a name', () => {
    const port = new Port('Dover');

    expect(port.name).toBe('Dover');
  });
});
