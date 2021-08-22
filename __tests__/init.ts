import * as anchor from '@project-serum/anchor'

describe('init', () => {
    // Configure the client to use the local cluster.
    anchor.setProvider(anchor.Provider.env())
    it('Is initialized!', async () => {
        // Add your test here.
        const program = anchor.workspace.Init
        const tx = await program.rpc.initialize()
        expect(tx).toBeTruthy()
    })
})
