// import {
//   selectDocumentsFacets,
//   selectIsEmbedded,
//   selectLoadingDocuments,
//   selectSearchedDocumentsCount,
//   selectSelectedDocument
// } from './archive.selector';
// import {ArchiveState} from './archive.reducer';
// import {SearchDocumentsResponse} from '../types/documents/search-documents-response.interface';
// import {DocumentData} from '../types/documents/document-data.interface';

// describe('Archive Selectors', () => {
//   it('should select and not modify embedded mode set to true', () => {
//     const state = { isEmbeddedMode: true } as ArchiveState;

//     const isEmbedded = selectIsEmbedded.projector(state);

//     expect(isEmbedded).toEqual(true);
//   });

//   it('should select and not modify embedded mode set to false', () => {
//     const state = { isEmbeddedMode: false } as ArchiveState;

//     const isEmbedded = selectIsEmbedded.projector(state);

//     expect(isEmbedded).toEqual(false);
//   });

//   it('should select total results from existing SearchDocumentsResponse', () => {
//     const response = { totalResults: 12 } as SearchDocumentsResponse;
//     const state = { searchedDocuments: response } as ArchiveState;

//     const selector = selectSearchedDocumentsCount.projector(state);

//     expect(selector).toEqual(12);
//   });

//   it("should select totalResults and return undefined if there's no existing SearchDocumentsResponse", () => {
//     const state = { searchedDocuments: null } as ArchiveState;

//     const selector = selectSearchedDocumentsCount.projector(state);

//     expect(selector).toEqual(undefined);
//   });

//   it("should return empty facets array if there's no existing SearchDocumentsResponse", () => {
//     const state = { searchedDocuments: null } as ArchiveState;

//     const selector = selectDocumentsFacets.projector(state);

//     expect(selector).toEqual([]);
//   });

//   it('should return alphabetically sorted facets array from SearchDocumentsResponse', () => {
//     const response = {
//       facets: [
//         {
//           name: 'medical_document_subdossier_agg',
//           type: 'terms',
//           values: [
//             { value: 'Nursing', count: '3' },
//             { value: 'Admin', count: '2' },
//             { value: 'Medical', count: '1' }
//           ]
//         },
//         {
//           name: 'medical_document_discipline_agg',
//           type: 'terms',
//           values: [
//             { value: 'Cardiologie', count: '22' },
//             { value: 'Tarificatie', count: '2' },
//             { value: 'Geriatrie', count: '1' },
//             { value: 'Urologie', count: '1' }
//           ]
//         }
//       ]
//     } as SearchDocumentsResponse;
//     const state = { searchedDocuments: response } as ArchiveState;

//     const selector = selectDocumentsFacets.projector(state);
//     const sortedFacets = [
//       {
//         name: 'medical_document_subdossier_agg',
//         type: 'terms',
//         values: [
//           { value: 'Admin', count: '2' },
//           { value: 'Medical', count: '1' },
//           { value: 'Nursing', count: '3' }
//         ]
//       },
//       {
//         name: 'medical_document_discipline_agg',
//         type: 'terms',
//         values: [
//           { value: 'Cardiologie', count: '22' },
//           { value: 'Geriatrie', count: '1' },
//           { value: 'Tarificatie', count: '2' },
//           { value: 'Urologie', count: '1' }
//         ]
//       }
//     ];

//     expect(selector).toEqual(sortedFacets);
//   });

//   it('should select loading documents set to true from store', () => {
//     const state = { loadingDocuments: true } as ArchiveState;

//     const selector = selectLoadingDocuments.projector(state);

//     expect(selector).toEqual(true);
//   });

//   it('should select loading documents set to false from store', () => {
//     const state = { loadingDocuments: false } as ArchiveState;

//     const selector = selectLoadingDocuments.projector(state);

//     expect(selector).toEqual(false);
//   });

//   it('should select selected document from store', () => {
//     const document = { id: 'test' } as DocumentData;
//     const state = { selectedDocument: { ...document } } as ArchiveState;

//     const selector = selectSelectedDocument.projector(state);

//     expect(selector).toEqual(document);
//   });

//   it('should return null if no document is selected', () => {
//     const state = { selectedDocument: null } as ArchiveState;

//     const selector = selectSelectedDocument.projector(state);

//     expect(selector).toEqual(null);
//   });
// });
